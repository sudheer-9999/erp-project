import { TRPCError } from "@trpc/server";
import { addDays, endOfDay, endOfMonth, endOfWeek, startOfDay, startOfMonth, startOfWeek } from "date-fns";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const scheduleStatusEnum = z.enum(["Scheduled", "Cancelled", "SubstituteAssigned"]);

const baseScheduleInput = z.object({
  classSectionId: z.number().int(),
  subjectId: z.number().int(),
  teacherId: z.number().int(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
});

export const scheduleRouter = createTRPCRouter({
  /**
   * Create a schedule with automatic handling of teacher attendance and substitutes.
   *
   * Logic:
   * - Look up attendance for the requested teacher on the given date.
   * - If the teacher is Present or has no record:
   *   - Create the schedule with status = Scheduled and no substituteTeacherId.
   * - If the teacher is Absent or on Leave:
   *   - Try to find another teacher who is mapped to the same subject (TeacherSubject)
   *     AND is Present (or has no Absent/Leave record) on that date.
   *   - If such a teacher is found:
   *       - Create schedule with status = SubstituteAssigned and substituteTeacherId set.
   *   - If none is found:
   *       - Create schedule with status = Cancelled.
   */
  createSchedule: publicProcedure
    .input(baseScheduleInput)
    .mutation(async ({ ctx, input }) => {
      const tx = ctx.db;

      const dayStart = startOfDay(input.date);
      const dayEnd = addDays(dayStart, 1);

      // Basic validation: start must be before end.
      if (input.startTime >= input.endTime) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Start time must be before end time.",
        });
      }

      // Prevent overlapping schedules for the same class section and day.
      // Overlap rule: (new.start < existing.end) && (new.end > existing.start)
      const overlapping = await tx.classSchedule.findFirst({
        where: {
          classSectionId: input.classSectionId,
          date: {
            gte: dayStart,
            lt: dayEnd,
          },
          startTime: {
            lt: input.endTime,
          },
          endTime: {
            gt: input.startTime,
          },
        },
      });

      if (overlapping) {
        throw new TRPCError({
          code: "CONFLICT",
          message:
            "This class section already has a schedule that overlaps with the selected time.",
        });
      }

      const attendance = await tx.teacherAttendance.findFirst({
        where: {
          teacherId: input.teacherId,
          date: {
            gte: dayStart,
            lt: dayEnd,
          },
        },
      });

      const isAbsentOrLeave =
        attendance && (attendance.status === "Absent" || attendance.status === "Leave");

      if (!isAbsentOrLeave) {
        // Teacher is present or no record exists; schedule as normal.
        return tx.classSchedule.create({
          data: {
            classSectionId: input.classSectionId,
            subjectId: input.subjectId,
            teacherId: input.teacherId,
            date: input.date,
            startTime: input.startTime,
            endTime: input.endTime,
            status: "Scheduled",
          },
        });
      }

      // Teacher is absent / on leave. Try to find a substitute.
      // 1. Find all teachers who can teach this subject (TeacherSubject).
      const candidateTeacherSubjects = await tx.teacherSubject.findMany({
        where: {
          subjectId: input.subjectId,
          // exclude original teacher
          teacherId: {
            not: input.teacherId,
          },
        },
        include: {
          teacher: true,
        },
      });

      let substituteTeacherId: number | null = null;

      for (const ts of candidateTeacherSubjects) {
        const subAttendance = await tx.teacherAttendance.findFirst({
          where: {
            teacherId: ts.teacherId,
            date: {
              gte: dayStart,
              lt: dayEnd,
            },
          },
        });

        const subIsAbsentOrLeave =
          subAttendance && (subAttendance.status === "Absent" || subAttendance.status === "Leave");

        // if there is no attendance record OR it is Present, we can assign as substitute.
        if (!subIsAbsentOrLeave) {
          substituteTeacherId = ts.teacherId;
          break;
        }
      }

      if (substituteTeacherId) {
        return tx.classSchedule.create({
          data: {
            classSectionId: input.classSectionId,
            subjectId: input.subjectId,
            teacherId: input.teacherId,
            date: input.date,
            startTime: input.startTime,
            endTime: input.endTime,
            status: "SubstituteAssigned",
            substituteTeacherId,
          },
        });
      }

      // No substitute teacher available; cancel the class.
      return tx.classSchedule.create({
        data: {
          classSectionId: input.classSectionId,
          subjectId: input.subjectId,
          teacherId: input.teacherId,
          date: input.date,
          startTime: input.startTime,
          endTime: input.endTime,
          status: "Cancelled",
        },
      });
    }),

  updateSchedule: publicProcedure
    .input(
      z.object({
        id: z.number().int(),
        status: scheduleStatusEnum.optional(),
        substituteTeacherId: z.number().int().nullable().optional(),
        startTime: z.coerce.date().optional(),
        endTime: z.coerce.date().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.classSchedule.update({
        where: { id: input.id },
        data: {
          status: input.status,
          substituteTeacherId: input.substituteTeacherId,
          startTime: input.startTime,
          endTime: input.endTime,
        },
      });
    }),

  getScheduleByDay: publicProcedure
    .input(
      z.object({
        date: z.coerce.date(),
        classSectionId: z.number().int().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const rangeStart = startOfDay(input.date);
      const rangeEnd = endOfDay(input.date);

      return ctx.db.classSchedule.findMany({
        where: {
          date: {
            gte: rangeStart,
            lte: rangeEnd,
          },
          ...(input.classSectionId
            ? {
                classSectionId: input.classSectionId,
              }
            : {}),
        },
        include: {
          classSection: true,
          subject: true,
          teacher: true,
          substituteTeacher: true,
        },
        orderBy: {
          startTime: "asc",
        },
      });
    }),

  getScheduleByWeek: publicProcedure
    .input(
      z.object({
        weekDate: z.coerce.date(),
        classSectionId: z.number().int().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const rangeStart = startOfWeek(input.weekDate, { weekStartsOn: 1 }); // Monday
      const rangeEnd = endOfWeek(input.weekDate, { weekStartsOn: 1 });

      return ctx.db.classSchedule.findMany({
        where: {
          date: {
            gte: rangeStart,
            lte: rangeEnd,
          },
          ...(input.classSectionId
            ? {
                classSectionId: input.classSectionId,
              }
            : {}),
        },
        include: {
          classSection: true,
          subject: true,
          teacher: true,
          substituteTeacher: true,
        },
        orderBy: {
          date: "asc",
        },
      });
    }),

  getScheduleByMonth: publicProcedure
    .input(
      z.object({
        monthDate: z.coerce.date(),
        classSectionId: z.number().int().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const rangeStart = startOfMonth(input.monthDate);
      const rangeEnd = endOfMonth(input.monthDate);

      return ctx.db.classSchedule.findMany({
        where: {
          date: {
            gte: rangeStart,
            lte: rangeEnd,
          },
          ...(input.classSectionId
            ? {
                classSectionId: input.classSectionId,
              }
            : {}),
        },
        include: {
          classSection: true,
          subject: true,
          teacher: true,
          substituteTeacher: true,
        },
        orderBy: {
          date: "asc",
        },
      });
    }),
});


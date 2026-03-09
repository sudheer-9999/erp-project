import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const attendanceStatusEnum = z.enum(["Present", "Absent", "Leave"]);

export const attendanceRouter = createTRPCRouter({
  markAttendance: publicProcedure
    .input(
      z.object({
        teacherId: z.number().int(),
        date: z.coerce.date(),
        status: attendanceStatusEnum,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Upsert so multiple submissions for same teacher/day are safe.
      return ctx.db.teacherAttendance.upsert({
        where: {
          teacherId_date: {
            teacherId: input.teacherId,
            date: input.date,
          },
        },
        update: {
          status: input.status,
        },
        create: {
          teacherId: input.teacherId,
          date: input.date,
          status: input.status,
        },
      });
    }),

  getAttendanceByDate: publicProcedure
    .input(
      z.object({
        date: z.coerce.date(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const startOfDay = new Date(input.date);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(startOfDay);
      endOfDay.setDate(endOfDay.getDate() + 1);

      return ctx.db.teacherAttendance.findMany({
        where: {
          date: {
            gte: startOfDay,
            lt: endOfDay,
          },
        },
        include: {
          teacher: true,
        },
        orderBy: {
          teacher: {
            name: "asc",
          },
        },
      });
    }),
});


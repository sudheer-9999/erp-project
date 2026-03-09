import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const teacherSubjectRouter = createTRPCRouter({
  assignTeacherToSubject: publicProcedure
    .input(
      z.object({
        teacherId: z.number().int(),
        subjectId: z.number().int(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.teacherSubject.upsert({
        where: {
          teacherId_subjectId: {
            teacherId: input.teacherId,
            subjectId: input.subjectId,
          },
        },
        update: {},
        create: {
          teacherId: input.teacherId,
          subjectId: input.subjectId,
        },
      });
    }),

  listTeacherSubjects: publicProcedure
    .input(
      z.object({
        teacherId: z.number().int(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.teacherSubject.findMany({
        where: { teacherId: input.teacherId },
        include: { subject: true },
        orderBy: { subject: { name: "asc" } },
      });
    }),
});


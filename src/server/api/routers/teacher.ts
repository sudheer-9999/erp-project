import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const teacherRouter = createTRPCRouter({
  addTeacher: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.teacher.create({
        data: {
          name: input.name,
          email: input.email,
        },
      });
    }),

  listTeachers: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.teacher.findMany({
      orderBy: { name: "asc" },
    });
  }),
});


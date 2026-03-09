import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const subjectRouter = createTRPCRouter({
  addSubject: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.subject.create({
        data: {
          name: input.name,
        },
      });
    }),

  listSubjects: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.subject.findMany({
      orderBy: { name: "asc" },
    });
  }),
});


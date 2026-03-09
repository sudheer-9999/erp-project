import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const classSectionRouter = createTRPCRouter({
  addClassSection: publicProcedure
    .input(
      z.object({
        className: z.string().min(1),
        section: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.classSection.create({
        data: {
          className: input.className,
          section: input.section,
        },
      });
    }),

  listClassSections: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.classSection.findMany({
      orderBy: [
        { className: "asc" },
        { section: "asc" },
      ],
    });
  }),
});


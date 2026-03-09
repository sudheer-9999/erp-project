import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { attendanceRouter } from "./routers/attendance";
import { classSectionRouter } from "./routers/classSection";
import { scheduleRouter } from "./routers/schedule";
import { subjectRouter } from "./routers/subject";
import { teacherRouter } from "./routers/teacher";
import { teacherSubjectRouter } from "./routers/teacherSubject";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  teacher: teacherRouter,
  attendance: attendanceRouter,
  teacherSubject: teacherSubjectRouter,
  schedule: scheduleRouter,
  subject: subjectRouter,
  classSection: classSectionRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);

// Simple Prisma seed script to populate teachers, subjects, and class sections.
// Run after `prisma migrate dev` using:
//   node prisma/seed.js

import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  const [math, science, english] = await Promise.all([
    prisma.subject.upsert({
      where: { name: "Mathematics" },
      update: {},
      create: { name: "Mathematics" },
    }),
    prisma.subject.upsert({
      where: { name: "Science" },
      update: {},
      create: { name: "Science" },
    }),
    prisma.subject.upsert({
      where: { name: "English" },
      update: {},
      create: { name: "English" },
    }),
  ]);

  const [t1, t2, t3] = await Promise.all([
    prisma.teacher.upsert({
      where: { email: "alice.math@example.com" },
      update: {},
      create: {
        name: "Alice Math",
        email: "alice.math@example.com",
      },
    }),
    prisma.teacher.upsert({
      where: { email: "bob.science@example.com" },
      update: {},
      create: {
        name: "Bob Science",
        email: "bob.science@example.com",
      },
    }),
    prisma.teacher.upsert({
      where: { email: "carol.english@example.com" },
      update: {},
      create: {
        name: "Carol English",
        email: "carol.english@example.com",
      },
    }),
  ]);

  // Map teachers to subjects for substitution logic.
  await Promise.all([
    prisma.teacherSubject.upsert({
      where: {
        teacherId_subjectId: {
          teacherId: t1.id,
          subjectId: math.id,
        },
      },
      update: {},
      create: {
        teacherId: t1.id,
        subjectId: math.id,
      },
    }),
    prisma.teacherSubject.upsert({
      where: {
        teacherId_subjectId: {
          teacherId: t2.id,
          subjectId: science.id,
        },
      },
      update: {},
      create: {
        teacherId: t2.id,
        subjectId: science.id,
      },
    }),
    prisma.teacherSubject.upsert({
      where: {
        teacherId_subjectId: {
          teacherId: t3.id,
          subjectId: english.id,
        },
      },
      update: {},
      create: {
        teacherId: t3.id,
        subjectId: english.id,
      },
    }),
  ]);

  const [class10A, class10B] = await Promise.all([
    prisma.classSection.upsert({
      where: {
        className_section: {
          className: "10",
          section: "A",
        },
      },
      update: {},
      create: {
        className: "10",
        section: "A",
      },
    }),
    prisma.classSection.upsert({
      where: {
        className_section: {
          className: "10",
          section: "B",
        },
      },
      update: {},
      create: {
        className: "10",
        section: "B",
      },
    }),
  ]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const firstPeriodStart = new Date(today);
  firstPeriodStart.setHours(9, 0, 0, 0);
  const firstPeriodEnd = new Date(today);
  firstPeriodEnd.setHours(9, 45, 0, 0);

  const secondPeriodStart = new Date(today);
  secondPeriodStart.setHours(10, 0, 0, 0);
  const secondPeriodEnd = new Date(today);
  secondPeriodEnd.setHours(10, 45, 0, 0);

  // Seed a couple of schedules; attendance will later influence future creations.
  await prisma.classSchedule.createMany({
    data: [
      {
        classSectionId: class10A.id,
        subjectId: math.id,
        teacherId: t1.id,
        date: today,
        startTime: firstPeriodStart,
        endTime: firstPeriodEnd,
        status: "Scheduled",
      },
      {
        classSectionId: class10B.id,
        subjectId: science.id,
        teacherId: t2.id,
        date: today,
        startTime: secondPeriodStart,
        endTime: secondPeriodEnd,
        status: "Scheduled",
      },
    ],
    skipDuplicates: true,
  });

  console.log("Seed data created.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


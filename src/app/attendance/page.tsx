/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import { useState } from "react";
import { format } from "date-fns";

import { api } from "~/trpc/react";

const statuses = ["Present", "Absent", "Leave"] as const;

export default function AttendancePage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const utils = api.useUtils();
  const { data: teachers } = api.teacher.listTeachers.useQuery();
  const { data: attendance } = api.attendance.getAttendanceByDate.useQuery({
    date: selectedDate,
  });

  const markAttendance = api.attendance.markAttendance.useMutation({
    onSuccess: async () => {
      await utils.attendance.getAttendanceByDate.invalidate();
    },
  });

  const attendanceByTeacherId =
    attendance?.reduce<Record<number, (typeof statuses)[number]>>((acc, rec) => {
      acc[rec.teacherId] = rec.status as (typeof statuses)[number];
      return acc;
    }, {}) ?? {};

  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <h1 className="text-lg font-semibold tracking-tight">Teacher Attendance</h1>
          <p className="text-xs text-slate-300">
            Date:{" "}
            <input
              type="date"
              className="rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs"
              value={format(selectedDate, "yyyy-MM-dd")}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
            />
          </p>
        </div>
      </header>
      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-4 px-4 py-6">
        <p className="text-sm text-slate-300">
          Mark attendance for each teacher. This drives schedule generation and substitute
          assignment.
        </p>
        <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/60">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-900/80 text-xs uppercase text-slate-400">
              <tr>
                <th className="px-4 py-2">Teacher</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {teachers?.map((t) => {
                const currentStatus = attendanceByTeacherId[t.id] ?? null;
                return (
                  <tr key={t.id} className="border-t border-slate-800">
                    <td className="px-4 py-2 text-sm font-medium text-slate-50">
                      {t.name}
                    </td>
                    <td className="px-4 py-2 text-xs text-slate-300">{t.email}</td>
                    <td className="px-4 py-2">
                      <div className="inline-flex gap-1 rounded-full bg-slate-900/60 p-0.5">
                        {statuses.map((status) => (
                          <button
                            key={status}
                            type="button"
                            className={`rounded-full px-3 py-1 text-xs transition ${
                              currentStatus === status
                                ? status === "Present"
                                  ? "bg-emerald-500/90 text-slate-950"
                                  : status === "Absent"
                                    ? "bg-rose-500/90 text-slate-950"
                                    : "bg-amber-400/90 text-slate-950"
                                : "bg-transparent text-slate-300 hover:bg-slate-800"
                            }`}
                            onClick={() =>
                              markAttendance.mutate({
                                teacherId: t.id,
                                date: selectedDate,
                                status,
                              })
                            }
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
              {teachers?.length === 0 && (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-6 text-center text-xs text-slate-400"
                  >
                    No teachers found. Add teachers first from the Teacher Management page.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}


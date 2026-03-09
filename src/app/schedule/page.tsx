"use client";

import { addDays, format } from "date-fns";
import { useMemo, useState } from "react";

import { api } from "~/trpc/react";

type ViewMode = "day" | "week" | "month";

export default function SchedulePage() {
  const [viewMode, setViewMode] = useState<ViewMode>("day");
  const [referenceDate, setReferenceDate] = useState<Date>(new Date());
  const [selectedClassSectionId, setSelectedClassSectionId] = useState<number | "all">(
    "all",
  );

  // Form state for creating a schedule entry
  const [formClassSectionId, setFormClassSectionId] = useState<number | "">("");
  const [formSubjectId, setFormSubjectId] = useState<number | "">("");
  const [formTeacherId, setFormTeacherId] = useState<number | "">("");
  const [formDate, setFormDate] = useState<string>(() =>
    format(new Date(), "yyyy-MM-dd"),
  );
  const [formStartTime, setFormStartTime] = useState<string>("09:00");
  const [formEndTime, setFormEndTime] = useState<string>("09:45");

  const utils = api.useUtils();

  const { data: classSections } = api.classSection.listClassSections.useQuery();
  const { data: subjects } = api.subject.listSubjects.useQuery();
  const { data: teachers } = api.teacher.listTeachers.useQuery();

  const scheduleQueryInput = useMemo(() => {
    const base =
      selectedClassSectionId === "all"
        ? {}
        : {
            classSectionId: selectedClassSectionId,
          };

    if (viewMode === "day") {
      return {
        type: "day" as const,
        input: {
          date: referenceDate,
          ...base,
        },
      };
    }
    if (viewMode === "week") {
      return {
        type: "week" as const,
        input: {
          weekDate: referenceDate,
          ...base,
        },
      };
    }
    return {
      type: "month" as const,
      input: {
        monthDate: referenceDate,
        ...base,
      },
    };
  }, [viewMode, referenceDate, selectedClassSectionId]);

  const dayQuery = api.schedule.getScheduleByDay.useQuery(
    scheduleQueryInput.type === "day"
      ? scheduleQueryInput.input
      : // dummy input, not used when disabled
        { date: new Date() },
    {
      enabled: scheduleQueryInput.type === "day",
    },
  );
  const weekQuery = api.schedule.getScheduleByWeek.useQuery(
    scheduleQueryInput.type === "week"
      ? scheduleQueryInput.input
      : { weekDate: new Date() },
    {
      enabled: scheduleQueryInput.type === "week",
    },
  );
  const monthQuery = api.schedule.getScheduleByMonth.useQuery(
    scheduleQueryInput.type === "month"
      ? scheduleQueryInput.input
      : { monthDate: new Date() },
    {
      enabled: scheduleQueryInput.type === "month",
    },
  );

  const data =
    viewMode === "day"
      ? dayQuery.data
      : viewMode === "week"
        ? weekQuery.data
        : monthQuery.data;

  const groupedByDate = useMemo(() => {
    const groups = new Map<string, typeof data>();
    (data ?? []).forEach((entry) => {
      const key = format(entry.date, "yyyy-MM-dd");
      const current = groups.get(key) ?? [];
      current.push(entry);
      groups.set(key, current);
    });
    return Array.from(groups.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [data]);

  const title =
    viewMode === "day"
      ? format(referenceDate, "EEEE, MMM d, yyyy")
      : viewMode === "week"
        ? `Week of ${format(referenceDate, "MMM d, yyyy")}`
        : format(referenceDate, "MMMM yyyy");

  const navigate = (direction: "prev" | "next") => {
    const delta = direction === "prev" ? -1 : 1;
    if (viewMode === "day") {
      setReferenceDate((d) => addDays(d, delta));
    } else if (viewMode === "week") {
      setReferenceDate((d) => addDays(d, 7 * delta));
    } else {
      const newDate = new Date(referenceDate);
      newDate.setMonth(newDate.getMonth() + delta);
      setReferenceDate(newDate);
    }
  };

  const isLoading =
    dayQuery.isLoading || weekQuery.isLoading || monthQuery.isLoading;

  const createSchedule = api.schedule.createSchedule.useMutation({
    onSuccess: async () => {
      // Refresh whichever view is active so the new schedule appears immediately.
      if (viewMode === "day") {
        await utils.schedule.getScheduleByDay.invalidate();
      } else if (viewMode === "week") {
        await utils.schedule.getScheduleByWeek.invalidate();
      } else {
        await utils.schedule.getScheduleByMonth.invalidate();
      }
    },
  });

  function handleCreateSchedule(e: React.FormEvent) {
    e.preventDefault();
    if (!formClassSectionId || !formSubjectId || !formTeacherId) return;

    // Build Date objects for date + time inputs.
    const [startHour, startMinute] = formStartTime.split(":").map((v) =>
      Number.parseInt(v, 10),
    );
    const [endHour, endMinute] = formEndTime.split(":").map((v) =>
      Number.parseInt(v, 10),
    );

    const baseDate = new Date(formDate);
    baseDate.setHours(0, 0, 0, 0);

    const start = new Date(baseDate);
    start.setHours(startHour, startMinute, 0, 0);
    const end = new Date(baseDate);
    end.setHours(endHour, endMinute, 0, 0);

    createSchedule.mutate({
      classSectionId: formClassSectionId,
      subjectId: formSubjectId,
      teacherId: formTeacherId,
      date: baseDate,
      startTime: start,
      endTime: end,
    });
  }

  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-sm">
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Class Schedule</h1>
            <p className="text-xs text-slate-300">
              Calendar view with day / week / month filters, driven by teacher attendance
              and subject assignments.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-md border border-slate-700 bg-slate-900/70 text-xs">
              {(["day", "week", "month"] satisfies ViewMode[]).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  className={`px-3 py-1 capitalize ${
                    viewMode === mode
                      ? "bg-sky-500 text-slate-950"
                      : "text-slate-200 hover:bg-slate-800"
                  }`}
                  onClick={() => setViewMode(mode)}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-4 px-4 py-6 text-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 text-xs text-slate-300">
            <button
              type="button"
              className="rounded-md border border-slate-700 bg-slate-900 px-2 py-1 hover:bg-slate-800"
              onClick={() => navigate("prev")}
            >
              Prev
            </button>
            <button
              type="button"
              className="rounded-md border border-slate-700 bg-slate-900 px-2 py-1 hover:bg-slate-800"
              onClick={() => setReferenceDate(new Date())}
            >
              Today
            </button>
            <button
              type="button"
              className="rounded-md border border-slate-700 bg-slate-900 px-2 py-1 hover:bg-slate-800"
              onClick={() => navigate("next")}
            >
              Next
            </button>
            <span className="ml-2 text-slate-100">{title}</span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-300">Class:</span>
            <select
              className="rounded-md border border-slate-700 bg-slate-950 px-2 py-1"
              value={selectedClassSectionId === "all" ? "" : selectedClassSectionId}
              onChange={(e) =>
                setSelectedClassSectionId(
                  e.target.value ? Number.parseInt(e.target.value, 10) : "all",
                )
              }
            >
              <option value="">All</option>
              {classSections?.map((cs) => (
                <option key={cs.id} value={cs.id}>
                  {cs.className} - {cs.section}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
          <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
          {isLoading ? (
            <p className="text-xs text-slate-400">Loading schedule...</p>
          ) : groupedByDate.length === 0 ? (
            <p className="text-xs text-slate-400">No schedules found.</p>
          ) : (
            <div className="space-y-4">
              {groupedByDate.map(([dateKey, entries]) => (
                <div key={dateKey} className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-medium text-slate-100">
                      {format(new Date(dateKey), "EEEE, MMM d")}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {entries.length} class{entries.length === 1 ? "" : "es"}
                    </span>
                  </div>
                  <div className="space-y-1 text-xs">
                    {entries.map((s) => {
                      const label =
                        s.status === "Scheduled"
                          ? "On Time"
                          : s.status === "SubstituteAssigned"
                            ? "Substitute"
                            : "Cancelled";

                      const badgeClass =
                        s.status === "Scheduled"
                          ? "bg-emerald-500/90 text-slate-950"
                          : s.status === "SubstituteAssigned"
                            ? "bg-amber-400/90 text-slate-950"
                            : "bg-rose-500/90 text-slate-950";

                      return (
                        <div
                          key={s.id}
                          className="flex items-center justify-between rounded-md border border-slate-800 bg-slate-900/80 px-3 py-2"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-slate-100">
                                {s.classSection.className}-{s.classSection.section} ·{" "}
                                {s.subject.name}
                              </span>
                              <span
                                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${badgeClass}`}
                              >
                                {label}
                              </span>
                            </div>
                            <div className="mt-0.5 text-[11px] text-slate-300">
                              {format(s.startTime, "HH:mm")}–{format(s.endTime, "HH:mm")} ·{" "}
                              Teacher: {s.teacher.name}
                              {s.substituteTeacher && (
                                <span>
                                  {" "}
                                  (Substitute:{" "}
                                  <span className="text-sky-300">
                                    {s.substituteTeacher.name}
                                  </span>
                                  )
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-xs">
            <h2 className="text-sm font-semibold text-slate-100">
              Create schedule entry
            </h2>
            <p className="mt-1 text-[11px] text-slate-400">
              When you create a schedule, the backend will:
              <br />
              1) Check the selected teacher&apos;s attendance for that date.
              <br />
              2) If Absent/Leave, try to assign another teacher who teaches the same
              subject.
              <br />
              3) If no substitute is found, mark the class as Cancelled.
            </p>
            <form className="mt-4 space-y-3" onSubmit={handleCreateSchedule}>
              <div className="space-y-1">
                <label className="text-slate-300">Class section</label>
                <select
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-2 py-1"
                  value={formClassSectionId}
                  onChange={(e) =>
                    setFormClassSectionId(
                      e.target.value ? Number.parseInt(e.target.value, 10) : "",
                    )
                  }
                  required
                >
                  <option value="">Select class</option>
                  {classSections?.map((cs) => (
                    <option key={cs.id} value={cs.id}>
                      {cs.className}-{cs.section}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-slate-300">Subject</label>
                <select
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-2 py-1"
                  value={formSubjectId}
                  onChange={(e) =>
                    setFormSubjectId(
                      e.target.value ? Number.parseInt(e.target.value, 10) : "",
                    )
                  }
                  required
                >
                  <option value="">Select subject</option>
                  {subjects?.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-slate-300">Primary teacher</label>
                <select
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-2 py-1"
                  value={formTeacherId}
                  onChange={(e) =>
                    setFormTeacherId(
                      e.target.value ? Number.parseInt(e.target.value, 10) : "",
                    )
                  }
                  required
                >
                  <option value="">Select teacher</option>
                  {teachers?.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-slate-300">Date</label>
                  <input
                    type="date"
                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-2 py-1"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-300">Time</label>
                  <div className="flex items-center gap-1">
                    <input
                      type="time"
                      className="w-full rounded-md border border-slate-700 bg-slate-950 px-2 py-1"
                      value={formStartTime}
                      onChange={(e) => setFormStartTime(e.target.value)}
                      required
                    />
                    <span className="text-slate-400">–</span>
                    <input
                      type="time"
                      className="w-full rounded-md border border-slate-700 bg-slate-950 px-2 py-1"
                      value={formEndTime}
                      onChange={(e) => setFormEndTime(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-sky-500 px-3 py-1.5 text-[11px] font-semibold text-slate-950 hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-300"
                disabled={createSchedule.isPending}
              >
                {createSchedule.isPending ? "Creating..." : "Create schedule"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}


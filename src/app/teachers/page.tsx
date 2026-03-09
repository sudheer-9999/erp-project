"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

export default function TeachersPage() {
  const utils = api.useUtils();
  const { data: teachers } = api.teacher.listTeachers.useQuery();
  const { data: subjects } = api.subject.listSubjects.useQuery();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTeacherId, setSelectedTeacherId] = useState<number | null>(null);
  const [selectedSubjectId, setSelectedSubjectId] = useState<number | null>(null);
  const [newSubjectName, setNewSubjectName] = useState("");

  const addTeacher = api.teacher.addTeacher.useMutation({
    onSuccess: async () => {
      setName("");
      setEmail("");
      await utils.teacher.listTeachers.invalidate();
    },
  });

  const addSubject = api.subject.addSubject.useMutation({
    onSuccess: async () => {
      setNewSubjectName("");
      await utils.subject.listSubjects.invalidate();
    },
  });

  const assignSubject = api.teacherSubject.assignTeacherToSubject.useMutation({
    onSuccess: async () => {
      if (selectedTeacherId != null) {
        await utils.teacherSubject.listTeacherSubjects.invalidate({
          teacherId: selectedTeacherId,
        });
      }
    },
  });

  const { data: teacherSubjects } = api.teacherSubject.listTeacherSubjects.useQuery(
    { teacherId: selectedTeacherId ?? -1 },
    {
      enabled: selectedTeacherId != null,
    },
  );

  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <h1 className="text-lg font-semibold tracking-tight">Teacher Management</h1>
        </div>
      </header>
      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-6 text-sm">
        <p className="text-slate-300">
          Add teachers and manage subject assignments. Subject mapping powers substitute
          allocation when a scheduled teacher is absent or on leave.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
            <h2 className="text-sm font-semibold">Add Teacher</h2>
            <form
              className="mt-3 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (!name || !email) return;
                addTeacher.mutate({ name, email });
              }}
            >
              <div className="space-y-1">
                <label className="text-xs text-slate-300">Name</label>
                <input
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-2 py-1 text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-300">Email</label>
                <input
                  type="email"
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-2 py-1 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-sky-500 px-3 py-1.5 text-xs font-medium text-slate-950 hover:bg-sky-400"
                disabled={addTeacher.isPending}
              >
                {addTeacher.isPending ? "Saving..." : "Add Teacher"}
              </button>
            </form>

            <div className="mt-6">
              <h3 className="text-xs font-semibold text-slate-300">All Teachers</h3>
              <ul className="mt-2 divide-y divide-slate-800 text-xs">
                {teachers?.map((t) => (
                  <li
                    key={t.id}
                    className={`flex items-center justify-between px-1 py-1.5 ${
                      selectedTeacherId === t.id ? "bg-slate-800/70" : ""
                    }`}
                  >
                    <button
                      type="button"
                      className="flex flex-1 flex-col items-start text-left"
                      onClick={() => setSelectedTeacherId(t.id)}
                    >
                      <span className="font-medium text-slate-50">{t.name}</span>
                      <span className="text-[11px] text-slate-400">{t.email}</span>
                    </button>
                  </li>
                ))}
                {teachers?.length === 0 && (
                  <li className="px-1 py-2 text-[11px] text-slate-400">
                    No teachers yet. Add one above.
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
              <h2 className="text-sm font-semibold">Subjects</h2>
              <form
                className="mt-3 flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!newSubjectName) return;
                  addSubject.mutate({ name: newSubjectName });
                }}
              >
                <input
                  className="flex-1 rounded-md border border-slate-700 bg-slate-950 px-2 py-1 text-sm"
                  placeholder="e.g. Mathematics"
                  value={newSubjectName}
                  onChange={(e) => setNewSubjectName(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="rounded-md bg-slate-800 px-3 py-1 text-xs font-medium hover:bg-slate-700"
                  disabled={addSubject.isPending}
                >
                  {addSubject.isPending ? "Adding..." : "Add"}
                </button>
              </form>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                {subjects?.map((s) => (
                  <span
                    key={s.id}
                    className="rounded-full bg-slate-800 px-2 py-0.5 text-slate-100"
                  >
                    {s.name}
                  </span>
                ))}
                {subjects?.length === 0 && (
                  <span className="text-[11px] text-slate-400">
                    No subjects yet. Add at least one.
                  </span>
                )}
              </div>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
              <h2 className="text-sm font-semibold">Assign Subjects to Teacher</h2>
              <p className="mt-1 text-[11px] text-slate-400">
                Select a teacher on the left, then assign one or more subjects. When a
                teacher is absent, the system looks for other teachers with the same
                subject.
              </p>

              <div className="mt-3 space-y-3">
                <div className="space-y-1">
                  <label className="text-xs text-slate-300">Teacher</label>
                  <select
                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-2 py-1 text-sm"
                    value={selectedTeacherId ?? ""}
                    onChange={(e) =>
                      setSelectedTeacherId(
                        e.target.value ? Number.parseInt(e.target.value, 10) : null,
                      )
                    }
                  >
                    <option value="">Select teacher</option>
                    {teachers?.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-slate-300">Subject</label>
                  <select
                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-2 py-1 text-sm"
                    value={selectedSubjectId ?? ""}
                    onChange={(e) =>
                      setSelectedSubjectId(
                        e.target.value ? Number.parseInt(e.target.value, 10) : null,
                      )
                    }
                  >
                    <option value="">Select subject</option>
                    {subjects?.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  className="rounded-md bg-emerald-500 px-3 py-1.5 text-xs font-medium text-slate-950 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-300"
                  disabled={
                    !selectedTeacherId || !selectedSubjectId || assignSubject.isPending
                  }
                  onClick={() => {
                    if (!selectedTeacherId || !selectedSubjectId) return;
                    assignSubject.mutate({
                      teacherId: selectedTeacherId,
                      subjectId: selectedSubjectId,
                    });
                  }}
                >
                  {assignSubject.isPending ? "Assigning..." : "Assign Subject"}
                </button>
              </div>

              {selectedTeacherId && (
                <div className="mt-4">
                  <h3 className="text-xs font-semibold text-slate-300">
                    Assigned subjects
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
                    {teacherSubjects?.map((ts) => (
                      <span
                        key={ts.subjectId}
                        className="rounded-full bg-slate-800 px-2 py-0.5 text-slate-100"
                      >
                        {ts.subject.name}
                      </span>
                    ))}
                    {teacherSubjects?.length === 0 && (
                      <span className="text-[11px] text-slate-400">
                        No subjects assigned yet.
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


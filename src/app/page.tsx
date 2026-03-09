import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <h1 className="text-lg font-semibold tracking-tight">
            School ERP – Class Schedule Management
          </h1>
          <nav className="flex gap-3 text-sm">
            <Link
              href="/attendance"
              className="rounded-md px-3 py-1.5 text-slate-100 hover:bg-slate-800"
            >
              Attendance
            </Link>
            <Link
              href="/schedule"
              className="rounded-md px-3 py-1.5 text-slate-100 hover:bg-slate-800"
            >
              Schedule
            </Link>
            <Link
              href="/teachers"
              className="rounded-md px-3 py-1.5 text-slate-100 hover:bg-slate-800"
            >
              Teachers
            </Link>
          </nav>
        </div>
      </header>
      <section className="mx-auto flex max-w-5xl flex-1 flex-col justify-center gap-6 px-4 py-10">
        <div>
          <p className="text-sm font-medium text-sky-400">Dashboard</p>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight">
            Class schedules, teacher attendance, and subject assignments.
          </h2>
         
        </div>
        <div className="grid gap-4 text-sm md:grid-cols-3">
          <Link
            href="/attendance"
            className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 hover:border-sky-500/70 hover:bg-slate-900"
          >
            <h3 className="font-medium">Attendance</h3>
            <p className="mt-1 text-slate-300">
              Mark Present / Absent / Leave for each teacher per day.
            </p>
          </Link>
          <Link
            href="/schedule"
            className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 hover:border-sky-500/70 hover:bg-slate-900"
          >
            <h3 className="font-medium">Schedule</h3>
            <p className="mt-1 text-slate-300">
              View daily, weekly, or monthly calendar of class schedules.
            </p>
          </Link>
          <Link
            href="/teachers"
            className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 hover:border-sky-500/70 hover:bg-slate-900"
          >
            <h3 className="font-medium">Teacher Management</h3>
            <p className="mt-1 text-slate-300">
              Add teachers and assign subjects for substitution logic.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}

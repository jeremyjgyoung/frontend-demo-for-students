"use client";
import { useState } from "react";

export function LessonDemo() {
  const [width, setWidth] = useState("wide");
  const [week, setWeek] = useState("this");
  const tasks =
    week === "this"
      ? [
          { title: "Sketch the homepage", owner: "Maya", done: true },
          { title: "Test the menu on a phone", owner: "Alex", done: false },
          { title: "Write image descriptions", owner: "Jordan", done: false },
        ]
      : [
          { title: "Build the gallery", owner: "Alex", done: false },
          { title: "Share a first version", owner: "Maya", done: false },
        ];
  const completed = tasks.filter(function isComplete(task) {
    return task.done;
  }).length;
  return (
    <div className="space-y-5">
      <label className="flex flex-wrap items-center gap-3 text-sm font-medium">
        Preview width
        <select
          value={width}
          onChange={function changeWidth(event) {
            setWidth(event.target.value);
          }}
          className="rounded-lg border bg-background px-3 py-2"
        >
          <option value="wide">Wide</option>
          <option value="narrow">Narrow</option>
        </select>
      </label>
      <p className="text-sm leading-6 text-muted-foreground">
        Narrow limits this example to 24rem. Wide uses the available space. The
        page itself stays the same size.
      </p>
      {/* Container queries respond to this preview box, not the whole browser. */}
      <div
        className={
          width === "narrow"
            ? "@container mx-auto w-full max-w-sm"
            : "@container w-full"
        }
      >
        <div className="grid overflow-hidden rounded-2xl border bg-background @2xl:grid-cols-[11rem_minmax(0,1fr)]">
          <aside className="space-y-5 border-b bg-muted/40 p-5 @2xl:border-r @2xl:border-b-0">
            <p className="font-bold">Studio board</p>
            <div
              role="group"
              aria-label="Choose a week"
              className="flex flex-wrap gap-2 @2xl:flex-col"
            >
              <button
                type="button"
                aria-pressed={week === "this"}
                onClick={function showThisWeek() {
                  setWeek("this");
                }}
                className={
                  week === "this"
                    ? "rounded-lg bg-primary px-3 py-2 text-left text-sm text-primary-foreground"
                    : "rounded-lg border px-3 py-2 text-left text-sm"
                }
              >
                This week
              </button>
              <button
                type="button"
                aria-pressed={week === "next"}
                onClick={function showNextWeek() {
                  setWeek("next");
                }}
                className={
                  week === "next"
                    ? "rounded-lg bg-primary px-3 py-2 text-left text-sm text-primary-foreground"
                    : "rounded-lg border px-3 py-2 text-left text-sm"
                }
              >
                Next week
              </button>
            </div>
          </aside>
          <section
            aria-labelledby="dashboard-title"
            className="min-w-0 space-y-6 p-5 @2xl:p-8"
          >
            <header>
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Team workspace
              </p>
              <h2 id="dashboard-title" className="mt-2 text-2xl font-bold">
                {week === "this" ? "This week" : "Next week"} at a glance
              </h2>
            </header>
            <dl className="grid gap-3 @xl:grid-cols-3">
              <div className="rounded-xl border bg-muted/30 p-4">
                <dt className="text-sm text-muted-foreground">Tasks</dt>
                <dd className="mt-2 text-3xl font-bold">{tasks.length}</dd>
              </div>
              <div className="rounded-xl border bg-muted/30 p-4">
                <dt className="text-sm text-muted-foreground">Complete</dt>
                <dd className="mt-2 text-3xl font-bold">{completed}</dd>
              </div>
              <div className="rounded-xl border bg-muted/30 p-4">
                <dt className="text-sm text-muted-foreground">Still to do</dt>
                <dd className="mt-2 text-3xl font-bold">
                  {tasks.length - completed}
                </dd>
              </div>
            </dl>
            <section aria-labelledby="dashboard-tasks">
              <h3 id="dashboard-tasks" className="font-semibold">
                Project tasks
              </h3>
              <ul className="mt-3 divide-y rounded-xl border px-4">
                {tasks.map(function renderTask(task) {
                  return (
                    <li
                      key={task.title}
                      className="flex flex-wrap items-center justify-between gap-3 py-4"
                    >
                      <div className="min-w-0">
                        <p className="font-medium">{task.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {task.owner}
                        </p>
                      </div>
                      <span className="rounded-full bg-muted px-3 py-1 text-xs">
                        {task.done ? "Complete" : "To do"}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

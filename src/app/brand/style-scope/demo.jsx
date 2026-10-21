"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  const [scope, setScope] = useState("one");
  return (
    <div className="space-y-6">
      <label className="flex flex-wrap items-center gap-3">
        Change the style of
        <select
          value={scope}
          className="rounded border bg-background p-2"
          onChange={function changeScope(event) {
            setScope(event.target.value);
          }}
        >
          <option value="one">One button</option>
          <option value="component">All example buttons</option>
          <option value="theme">The whole example app</option>
        </select>
      </label>
      <section
        className="space-y-5 rounded-xl border bg-card p-6 text-card-foreground"
        style={
          scope === "theme"
            ? {
                "--primary": "#7c3aed",
                "--primary-foreground": "#ffffff",
                "--card": "#f5f3ff",
                "--card-foreground": "#2e1065",
              }
            : undefined
        }
      >
        <h2 className="text-2xl font-semibold">Adventure Club</h2>
        <p>The same design decision can have a small or large scope.</p>
        <div className="flex flex-wrap gap-3">
          <Button
            className={
              scope === "one" || scope === "component"
                ? "rounded-full bg-violet-700 text-white hover:bg-violet-800"
                : ""
            }
          >
            Join the club
          </Button>
          <Button
            className={
              scope === "component"
                ? "rounded-full bg-violet-700 text-white hover:bg-violet-800"
                : ""
            }
          >
            View activities
          </Button>
        </div>
      </section>
      <dl className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border p-4">
          <dt className="font-semibold">One instance</dt>
          <dd className="mt-2 text-sm leading-6">
            Edit className in that page’s JSX.
          </dd>
        </div>
        <div className="rounded-xl border p-4">
          <dt className="font-semibold">Shared component</dt>
          <dd className="mt-2 text-sm leading-6">
            Edit its source or add a named variant.
          </dd>
        </div>
        <div className="rounded-xl border p-4">
          <dt className="font-semibold">Whole app</dt>
          <dd className="mt-2 text-sm leading-6">
            Edit the shared theme values in globals.css.
          </dd>
        </div>
      </dl>
      <p className="text-sm text-muted-foreground">
        These controls preview the scope. They do not edit your project files.
      </p>
    </div>
  );
}

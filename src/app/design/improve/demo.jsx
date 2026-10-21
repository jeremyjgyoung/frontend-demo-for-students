"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  const [spacing, setSpacing] = useState(true);
  const [hierarchy, setHierarchy] = useState(true);
  const [quiet, setQuiet] = useState(true);
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-5">
        <label>
          <input
            type="checkbox"
            checked={spacing}
            onChange={function changeSpacing(event) {
              setSpacing(event.target.checked);
            }}
          />{" "}
          More space
        </label>
        <label>
          <input
            type="checkbox"
            checked={hierarchy}
            onChange={function changeHierarchy(event) {
              setHierarchy(event.target.checked);
            }}
          />{" "}
          Clear hierarchy
        </label>
        <label>
          <input
            type="checkbox"
            checked={quiet}
            onChange={function changeDecoration(event) {
              setQuiet(event.target.checked);
            }}
          />{" "}
          Less decoration
        </label>
      </div>
      <article
        className={
          (spacing ? "space-y-5 p-6 " : "space-y-1 p-2 ") +
          (quiet
            ? "max-w-lg rounded-xl border"
            : "max-w-lg rounded-xl border-4 border-fuchsia-600 bg-yellow-100 text-slate-950 shadow-xl")
        }
      >
        <p
          className={
            hierarchy
              ? "text-xs tracking-wider text-muted-foreground uppercase"
              : "text-xl font-bold"
          }
        >
          Friday activity
        </p>
        <h2
          className={hierarchy ? "text-3xl font-semibold" : "text-xl font-bold"}
        >
          Make a school zine
        </h2>
        <p className={hierarchy ? "leading-7" : "text-xl font-bold"}>
          Bring your ideas. We supply paper and pens. No experience needed.
        </p>
        <Button>Join the workshop</Button>
      </article>
    </div>
  );
}

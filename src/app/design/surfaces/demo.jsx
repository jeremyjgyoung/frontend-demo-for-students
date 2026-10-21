"use client";
import { useState } from "react";

export function LessonDemo() {
  const [surface, setSurface] = useState("background");
  const styles = {
    border: "border-2 border-slate-300",
    background: "bg-blue-50 text-blue-950",
    shadow: "border border-slate-200 bg-white text-slate-900 shadow-lg",
  };
  return (
    <div className="space-y-5">
      <label className="flex items-center gap-3">
        Separation
        <select
          className="rounded border bg-background p-2"
          value={surface}
          onChange={function chooseSurface(event) {
            setSurface(event.target.value);
          }}
        >
          <option value="background">Background</option>
          <option value="border">Border</option>
          <option value="shadow">Shadow</option>
        </select>
      </label>
      <article
        className={"max-w-md space-y-4 rounded-xl p-6 " + styles[surface]}
      >
        <h2 className="text-xl font-semibold">Your next trip</h2>
        <p>Friday walk · 15:30</p>
        <span className="inline-block rounded bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-950">
          Spaces available
        </span>
      </article>
      <p>The availability uses words as well as color.</p>
    </div>
  );
}

"use client";
import { useState } from "react";

export function LessonDemo() {
  const [layout, setLayout] = useState("grid");
  const cards = ["Art club", "Robotics", "School newspaper", "Music", "Hiking"];
  return (
    <div className="space-y-5">
      <label className="flex items-center gap-3">
        Layout
        <select
          className="rounded border bg-background p-2"
          value={layout}
          onChange={function changeLayout(event) {
            setLayout(event.target.value);
          }}
        >
          <option value="grid">Responsive grid</option>
          <option value="flex">Wrapping row</option>
        </select>
      </label>
      <div
        className={
          layout === "grid"
            ? "grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            : "flex flex-wrap gap-4"
        }
      >
        {cards.map(function renderCard(name) {
          return (
            <article
              key={name}
              className={
                layout === "grid"
                  ? "rounded-xl border bg-muted p-6"
                  : "min-w-40 flex-1 rounded-xl border bg-muted p-6"
              }
            >
              <h2 className="font-semibold">{name}</h2>
              <p className="mt-2 text-sm">A place to try something new.</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

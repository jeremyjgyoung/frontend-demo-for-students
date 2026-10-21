"use client";
import { useState } from "react";

export function LessonDemo() {
  const [title, setTitle] = useState("Adventure Club");
  const [color, setColor] = useState("#2563eb");
  return (
    <div className="space-y-5 rounded-xl border p-6">
      <p>
        This is a tab preview. To change the real tab, edit metadata and
        icon.svg in the files shown in Code.
      </p>
      <label className="block space-y-2">
        <span>Tab title preview</span>
        <input
          className="w-full rounded-md border bg-background p-2"
          value={title}
          onChange={function changeTitle(event) {
            setTitle(event.target.value);
          }}
        />
      </label>
      <label className="flex items-center gap-3">
        Icon color
        <input
          aria-label="Icon color"
          type="color"
          value={color}
          onChange={function changeColor(event) {
            setColor(event.target.value);
          }}
        />
      </label>
      <div className="flex max-w-sm items-center gap-3 rounded-t-xl border bg-muted p-4">
        <span
          className="grid size-7 place-items-center rounded text-white"
          style={{ backgroundColor: color }}
        >
          F
        </span>
        <span className="truncate">{title || "Untitled"}</span>
      </div>
    </div>
  );
}

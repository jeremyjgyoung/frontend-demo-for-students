"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  const [heading, setHeading] = useState("sans");
  const [size, setSize] = useState(32);
  const [leading, setLeading] = useState(1.75);
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-5">
        <label className="flex items-center gap-3">
          Heading font
          <select
            className="rounded border bg-background p-2"
            value={heading}
            onChange={function changeFont(event) {
              setHeading(event.target.value);
            }}
          >
            <option value="sans">Sans-serif</option>
            <option value="serif">Serif</option>
          </select>
        </label>
        <label className="flex items-center gap-3">
          Heading: {size}px
          <input
            type="range"
            min="24"
            max="48"
            value={size}
            onChange={function changeSize(event) {
              setSize(Number(event.target.value));
            }}
          />
        </label>
        <label className="flex items-center gap-3">
          Body line height: {leading}
          <input
            type="range"
            min="1.2"
            max="2"
            step="0.1"
            value={leading}
            onChange={function changeLeading(event) {
              setLeading(Number(event.target.value));
            }}
          />
        </label>
      </div>
      <article className="max-w-prose space-y-5 rounded-xl border p-6 font-sans">
        <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          A club for curious people
        </p>
        <h2
          style={{
            fontFamily:
              heading === "serif"
                ? "Georgia, serif"
                : "Arial, Helvetica, sans-serif",
            fontSize: size + "px",
          }}
          className="leading-tight font-semibold tracking-tight"
        >
          Make time for something new.
        </h2>
        <p style={{ lineHeight: leading }}>
          The body font is inherited from this article. The heading has its own
          font choice. Use a readable line length and enough space between
          lines.
        </p>
        <Button variant="outline">A short action label</Button>
      </article>
      <p className="text-sm text-muted-foreground">
        The system fonts work offline. The explanation also shows how to load a
        font file with Next.js.
      </p>
    </div>
  );
}

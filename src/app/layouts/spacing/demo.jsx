"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LessonDemo() {
  const [wide, setWide] = useState(false);
  const [gap, setGap] = useState(16);
  return (
    <div className="space-y-5">
      <Button
        variant="outline"
        aria-pressed={wide}
        onClick={function toggleWidth() {
          setWide(!wide);
        }}
      >
        {wide ? "Use a readable width" : "Use the full width"}
      </Button>
      <label className="flex flex-wrap items-center gap-3">
        Space between items: {gap}px
        <input
          type="range"
          min="4"
          max="40"
          step="4"
          value={gap}
          onChange={function changeGap(event) {
            setGap(Number(event.target.value));
          }}
        />
      </label>
      <article
        className={
          wide
            ? "rounded-xl border p-6"
            : "mx-auto max-w-xl rounded-xl border p-6"
        }
        style={{ display: "grid", gap: gap }}
      >
        <h2 className="text-2xl font-semibold">A walk after school</h2>
        <p className="leading-7">
          Leave room around related content. A readable line lets your eyes move
          from the end of one line to the start of the next. A page does not
          need to fill every available pixel.
        </p>
        <Link href="/images" className="underline">
          See image examples
        </Link>
      </article>
    </div>
  );
}

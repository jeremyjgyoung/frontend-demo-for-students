"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  const [comfortable, setComfortable] = useState(true);
  return (
    <div className="space-y-5">
      <Button
        variant="outline"
        aria-pressed={comfortable}
        onClick={function toggleReading() {
          setComfortable(!comfortable);
        }}
      >
        Compare reading styles
      </Button>
      <article
        className={
          comfortable
            ? "max-w-prose space-y-5 rounded-xl border p-6 text-base leading-8"
            : "space-y-1 rounded-xl border p-2 text-sm leading-4"
        }
      >
        <h2
          className={
            comfortable
              ? "text-2xl font-semibold tracking-tight"
              : "text-sm font-normal"
          }
        >
          Make room for the words
        </h2>
        <p>
          People scan a page before they read every sentence. A clear title, a
          readable line length, and space between paragraphs help them find
          their place.
        </p>
        <p>
          Choose a few sizes and repeat them. The goal is a useful reading
          order, not a different font for every line.
        </p>
      </article>
    </div>
  );
}

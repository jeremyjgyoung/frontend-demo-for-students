"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  const [improved, setImproved] = useState(true);
  return (
    <div className="space-y-5">
      <Button
        variant="outline"
        aria-pressed={improved}
        onClick={function toggleDesign() {
          setImproved(!improved);
        }}
      >
        Compare before and after
      </Button>
      <article className="max-w-lg rounded-xl border p-6">
        <p
          className={
            improved
              ? "text-xs font-semibold tracking-widest text-muted-foreground uppercase"
              : "mb-2 text-xl font-bold"
          }
        >
          Adventure Club
        </p>
        <h2
          className={
            improved
              ? "mt-2 text-3xl font-semibold tracking-tight"
              : "mb-2 text-xl font-bold"
          }
        >
          A walk beside the water
        </h2>
        <p
          className={
            improved
              ? "mt-4 leading-7 text-muted-foreground"
              : "mb-2 text-xl font-bold"
          }
        >
          Friday, 15:30. Meet outside the main entrance.
        </p>
        <div className={improved ? "mt-6 border-t pt-5" : "mt-2"}>
          <Button>Join the walk</Button>
        </div>
      </article>
    </div>
  );
}

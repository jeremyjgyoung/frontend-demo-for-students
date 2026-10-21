"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  const [spacious, setSpacious] = useState(true);
  const [round, setRound] = useState(true);
  const [shadow, setShadow] = useState(false);
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-5">
        <label>
          <input
            type="checkbox"
            checked={spacious}
            onChange={function changeSpace(event) {
              setSpacious(event.target.checked);
            }}
          />{" "}
          More space
        </label>
        <label>
          <input
            type="checkbox"
            checked={round}
            onChange={function changeCorners(event) {
              setRound(event.target.checked);
            }}
          />{" "}
          Soft corners
        </label>
        <label>
          <input
            type="checkbox"
            checked={shadow}
            onChange={function changeShadow(event) {
              setShadow(event.target.checked);
            }}
          />{" "}
          Shadow
        </label>
      </div>
      <section
        className={
          spacious
            ? "mx-auto max-w-2xl space-y-6 rounded-xl bg-muted/40 p-6"
            : "mx-auto max-w-2xl space-y-2 rounded-xl bg-muted/40 p-3"
        }
        style={{ "--radius": round ? "1rem" : "0.125rem" }}
      >
        <header>
          <h2 className="text-2xl font-semibold">This week at the club</h2>
          <p className="mt-2 text-muted-foreground">
            One page, a few repeatable choices.
          </p>
        </header>
        <article
          className={
            (spacious ? "space-y-4 p-6 " : "space-y-2 p-3 ") +
            (shadow
              ? "rounded-lg border bg-card text-card-foreground shadow-md"
              : "rounded-lg border bg-card text-card-foreground")
          }
        >
          <h3 className="text-xl font-semibold">Poster workshop</h3>
          <p className="leading-7">
            Bring an idea. We supply the paper, pens, and space to try it.
          </p>
          <Button>View the workshop</Button>
        </article>
      </section>
    </div>
  );
}

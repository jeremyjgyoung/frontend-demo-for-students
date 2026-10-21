"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import styles from "./motion.module.css";
export function LessonDemo() {
  const [weak, setWeak] = useState(false);
  const [large, setLarge] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [moved, setMoved] = useState(false);
  function toggleColor() {
    setWeak(!weak);
  }
  function moveDot() {
    setMoved(!moved);
  }
  return (
    <div className="space-y-6">
      <section className="space-y-5 rounded-xl border p-6">
        <h2 className="text-2xl font-semibold">
          Keep the same message readable
        </h2>
        <div className="flex flex-wrap items-center gap-5">
          <Button variant="outline" aria-pressed={weak} onClick={toggleColor}>
            {weak ? "Use strong contrast" : "Compare weak contrast"}
          </Button>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={large}
              onChange={function changeSize(event) {
                setLarge(event.target.checked);
              }}
            />
            Enlarge preview text
          </label>
        </div>
        <article
          data-testid="reading-card"
          className={
            (weak ? "text-slate-400 " : "text-slate-900 ") +
            (large ? "text-2xl " : "text-base ") +
            "max-w-prose space-y-4 rounded-xl border-l-4 border-blue-700 bg-white p-6 leading-relaxed"
          }
        >
          <h3 className="font-semibold">Friday walk</h3>
          <p>Meet at the school library at 15:30. Bring water and a coat.</p>
          <p>Activity open: places are available.</p>
        </article>
        <p role="status">
          {weak
            ? "Weak contrast comparison. Use strong contrast for the real page."
            : "Strong contrast selected."}
        </p>
        <p className="text-sm leading-6 text-muted-foreground">
          Enlarged text should wrap without being cut off. Test browser zoom
          too; this checkbox only changes the practice card.
        </p>
      </section>
      <section className="space-y-5 rounded-xl border p-6">
        <h2 className="text-2xl font-semibold">Make motion optional</h2>
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={reduce}
            onChange={function changeMotion(event) {
              setReduce(event.target.checked);
            }}
          />
          Reduce motion in preview
        </label>
        <Button variant="outline" onClick={moveDot}>
          Move the dot
        </Button>
        <div className="rounded-xl bg-muted p-5" aria-hidden="true">
          <div
            data-testid="motion-dot"
            className={
              styles.dot +
              (moved ? " " + styles.moved : "") +
              (reduce ? " " + styles.still : "") +
              " size-8 rounded-full bg-blue-700"
            }
          />
        </div>
        <p role="status">
          Dot position: {moved ? "right" : "left"}.{" "}
          {reduce
            ? "Preview transition removed."
            : "Device motion preferences still apply."}
        </p>
      </section>
      <a
        className="inline-block text-sm underline"
        href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        W3C: text contrast (new tab)
      </a>
    </div>
  );
}

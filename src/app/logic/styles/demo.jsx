"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  const [highlighted, setHighlighted] = useState(false);
  const [radius, setRadius] = useState(16);
  const [layout, setLayout] = useState("grid");
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-4">
        <Button
          variant="outline"
          aria-pressed={highlighted}
          onClick={function toggleHighlight() {
            setHighlighted(!highlighted);
          }}
        >
          Highlight the cards
        </Button>
        <label className="flex items-center gap-3">
          Corner radius: {radius}px
          <input
            type="range"
            min="0"
            max="40"
            value={radius}
            onChange={function changeRadius(event) {
              setRadius(Number(event.target.value));
            }}
          />
        </label>
        <label className="flex items-center gap-3">
          Layout
          <select
            className="rounded border bg-background p-2"
            value={layout}
            onChange={function chooseLayout(event) {
              setLayout(event.target.value);
            }}
          >
            <option value="grid">Grid</option>
            <option value="list">List</option>
          </select>
        </label>
      </div>
      <div
        className={
          layout === "grid" ? "grid gap-4 sm:grid-cols-3" : "grid gap-4"
        }
      >
        {["Explore", "Create", "Share"].map(function renderCard(title) {
          return (
            <article
              key={title}
              style={{ borderRadius: radius + "px" }}
              className={
                highlighted
                  ? "border-2 border-blue-600 bg-blue-50 p-6 text-blue-950"
                  : "border-2 border-border p-6"
              }
            >
              <h2 className="font-semibold">{title}</h2>
              <p className="mt-2">State controls my appearance.</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

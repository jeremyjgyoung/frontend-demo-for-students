"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  const [showData, setShowData] = useState(false);
  const event = {
    id: "art",
    title: "Poster workshop",
    date: "2026-10-14",
    time: "15:30",
    place: "Art room",
  };
  return (
    <div className="space-y-6 rounded-xl border p-6">
      <h2 className="text-2xl font-semibold">
        First version: a month and its events
      </h2>
      <ol className="list-decimal space-y-2 pl-5">
        <li>Show the month name and weekday headings.</li>
        <li>Put dates in the correct columns.</li>
        <li>Show local sample events.</li>
        <li>Let users change the month and read event details.</li>
      </ol>
      <p>
        Leave editing, accounts, recurring events, and drag-and-drop for another
        project.
      </p>
      <div className="grid grid-cols-7 gap-1" aria-label="Calendar wireframe">
        {Array.from({ length: 14 }, function createCell(_, index) {
          return (
            <div
              key={index}
              className="grid aspect-square place-items-center rounded border bg-muted text-sm"
            >
              {index + 1}
            </div>
          );
        })}
      </div>
      <Button
        variant="outline"
        aria-expanded={showData}
        onClick={function toggleData() {
          setShowData(!showData);
        }}
      >
        Show an event object
      </Button>
      {showData && (
        <pre className="overflow-auto rounded bg-muted p-4">
          {JSON.stringify(event, null, 2)}
        </pre>
      )}
    </div>
  );
}

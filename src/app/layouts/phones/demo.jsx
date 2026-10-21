"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  const [long, setLong] = useState(false);
  return (
    <div className="space-y-5">
      <Button
        variant="outline"
        aria-pressed={long}
        onClick={function toggleText() {
          setLong(!long);
        }}
      >
        Toggle long content
      </Button>
      <article className="min-w-0 space-y-4 rounded-xl border p-5">
        <h2 className="text-xl font-semibold break-words">
          {long
            ? "An unusually long title about a school trip that still needs to fit"
            : "School trips"}
        </h2>
        <div className="flex flex-wrap gap-2">
          <Button size="sm">Join a trip</Button>
          <Button size="sm" variant="outline">
            Read the schedule
          </Button>
          <Button size="sm" variant="outline">
            Contact an organizer
          </Button>
        </div>
        <div
          className="overflow-x-auto"
          tabIndex={0}
          role="region"
          aria-label="Trip schedule, scroll horizontally"
        >
          <table className="w-full min-w-[38rem] text-left text-sm">
            <caption className="sr-only">Practice trip schedule</caption>
            <thead>
              <tr>
                <th className="p-3">Place</th>
                <th className="p-3">Meeting point</th>
                <th className="p-3">Departure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3">Science museum</td>
                <td className="p-3">Outside the main school entrance</td>
                <td className="p-3">Friday at 09:30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
}

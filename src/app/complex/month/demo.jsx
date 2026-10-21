"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(9); // JavaScript months start at 0: October is 9.

  // These calculations describe a local calendar day. No UTC conversion is needed.
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(new Date(year, month, 1));
  const cells = Array.from({ length: firstWeekday }, function emptyCell() {
    return null;
  });
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(day);
  }
  // Finish the last week so the grid has complete rows.
  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  function changeMonth(offset) {
    const next = new Date(year, month + offset, 1);
    setYear(next.getFullYear());
    setMonth(next.getMonth());
  }
  function showToday() {
    const today = new Date();
    setYear(today.getFullYear());
    setMonth(today.getMonth());
  }
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold" aria-live="polite">
          {monthName}
        </h2>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={function previousMonth() {
              changeMonth(-1);
            }}
          >
            Previous
          </Button>
          <Button variant="outline" onClick={showToday}>
            Today
          </Button>
          <Button
            variant="outline"
            onClick={function nextMonth() {
              changeMonth(1);
            }}
          >
            Next
          </Button>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        Local practice events are in October 2026. Dates use Sunday as the first
        column.
      </p>
      <div className="overflow-x-auto rounded-xl border">
        <div
          className="min-w-[34rem]"
          role="region"
          aria-label="Month calendar"
        >
          <div className="grid grid-cols-7 border-b">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              function weekday(name) {
                return (
                  <div
                    key={name}
                    className="p-2 text-center text-sm font-semibold"
                  >
                    {name}
                  </div>
                );
              },
            )}
          </div>
          <div className="grid grid-cols-7">
            {cells.map(function renderDay(day, index) {
              return (
                <div key={index} className="min-h-24 border-r border-b p-2">
                  {day !== null && (
                    <>
                      <span className="text-sm">{day}</span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

// A local preview using the real component already in your template.
export function CalendarPreview() {
  const [date, setDate] = useState(new Date(2026, 9, 21));
  return (
    <div>
      <Calendar
        mode="single"
        defaultMonth={new Date(2026, 9, 1)}
        selected={date}
        onSelect={setDate}
      />
      <p
        role="status"
        className="mt-2 text-center text-xs text-muted-foreground"
      >
        {date ? date.toLocaleDateString("en-GB") : "Choose a date."}
      </p>
    </div>
  );
}

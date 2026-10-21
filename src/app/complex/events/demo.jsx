"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(9); // JavaScript months start at 0: October is 9.
  const [selectedEvent, setSelectedEvent] = useState(null);
  const events = [
    {
      id: "walk",
      title: "Trail walk",
      date: "2026-10-08",
      time: "15:30",
      place: "Main entrance",
    },
    {
      id: "art",
      title: "Poster workshop",
      date: "2026-10-14",
      time: "15:30",
      place: "Art room",
    },
    {
      id: "music",
      title: "Lunchtime music",
      date: "2026-10-14",
      time: "12:30",
      place: "Music room",
    },
    {
      id: "garden",
      title: "Garden club",
      date: "2026-10-27",
      time: "15:45",
      place: "School garden",
    },
  ];
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
  const monthKey = String(year) + "-" + String(month + 1).padStart(2, "0");
  const monthEvents = events
    .filter(function inMonth(event) {
      return event.date.startsWith(monthKey + "-");
    })
    .sort(function byDate(a, b) {
      return (a.date + a.time).localeCompare(b.date + b.time);
    });
  function changeMonth(offset) {
    const next = new Date(year, month + offset, 1);
    setYear(next.getFullYear());
    setMonth(next.getMonth());
    setSelectedEvent(null);
  }
  function showToday() {
    const today = new Date();
    setYear(today.getFullYear());
    setMonth(today.getMonth());
    setSelectedEvent(null);
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
              const date = monthKey + "-" + String(day).padStart(2, "0");
              const dayEvents = events.filter(function onDay(event) {
                return event.date === date;
              });
              return (
                <div key={index} className="min-h-24 border-r border-b p-2">
                  {day !== null && (
                    <>
                      <span className="text-sm">{day}</span>
                      {dayEvents.map(function renderEvent(event) {
                        return (
                          <button
                            key={event.id}
                            type="button"
                            className="mt-1 block w-full rounded bg-blue-100 p-1 text-left text-xs break-words text-blue-950 hover:bg-blue-200"
                            onClick={function chooseEvent() {
                              setSelectedEvent(event);
                            }}
                          >
                            {event.time} {event.title}
                          </button>
                        );
                      })}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p role="status">{monthEvents.length} sample events this month.</p>
      <section className="rounded-xl border p-5" aria-live="polite">
        <h3 className="font-semibold">Event details</h3>
        {selectedEvent ? (
          <>
            <p className="mt-2">{selectedEvent.title}</p>
            <p>
              {selectedEvent.date} · {selectedEvent.time} ·{" "}
              {selectedEvent.place}
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-3"
              onClick={function clearEvent() {
                setSelectedEvent(null);
              }}
            >
              Close details
            </Button>
          </>
        ) : (
          <p className="mt-2">Choose an event to read its details.</p>
        )}
      </section>
    </div>
  );
}

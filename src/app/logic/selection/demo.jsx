"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  const activities = [
    { id: "walk", name: "Trail walk" },
    { id: "art", name: "Poster workshop" },
    { id: "garden", name: "Garden club" },
  ];
  const [selected, setSelected] = useState([]);
  function toggleSelection(id) {
    if (selected.includes(id)) {
      setSelected(
        selected.filter(function keepOther(value) {
          return value !== id;
        }),
      );
    } else {
      setSelected([...selected, id]);
    }
  }
  return (
    <div className="space-y-5">
      <p role="status">{selected.length} selected</p>
      <div className="grid gap-4 sm:grid-cols-3">
        {activities.map(function renderActivity(activity) {
          const active = selected.includes(activity.id);
          return (
            <button
              type="button"
              key={activity.id}
              aria-pressed={active}
              onClick={function selectActivity() {
                toggleSelection(activity.id);
              }}
              className={
                active
                  ? "rounded-xl border-2 border-blue-600 bg-blue-50 p-6 text-left text-blue-950"
                  : "rounded-xl border-2 border-border p-6 text-left hover:bg-muted"
              }
            >
              <span className="block font-semibold">{activity.name}</span>
              <span className="mt-3 block text-sm">
                {active ? "Selected ✓" : "Choose activity"}
              </span>
            </button>
          );
        })}
      </div>
      <Button
        variant="outline"
        disabled={selected.length === 0}
        onClick={function clearSelection() {
          setSelected([]);
        }}
      >
        Clear selection
      </Button>
    </div>
  );
}

"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  const initialItems = [
    { id: "water", title: "Bring water", done: false },
    { id: "coat", title: "Pack a coat", done: false },
    { id: "meet", title: "Check the meeting point", done: false },
  ];
  const [items, setItems] = useState(initialItems);
  const completed = items.filter(function isDone(item) {
    return item.done;
  }).length;
  function toggleItem(id) {
    // Preserve other items. Return a new object only for the one that changed.
    setItems(
      items.map(function updateItem(item) {
        return item.id === id ? { ...item, done: !item.done } : item;
      }),
    );
  }
  function resetList() {
    setItems(initialItems);
  }
  return (
    <div className="space-y-5 rounded-xl border p-6">
      <h2 className="text-2xl font-semibold">Get ready for the walk</h2>
      <p role="status">
        {completed} of {items.length} tasks complete.
      </p>
      <ul className="space-y-3">
        {items.map(function showItem(item) {
          return (
            <li key={item.id}>
              <label
                className={
                  item.done
                    ? "flex items-center gap-3 rounded-lg border bg-muted p-4"
                    : "flex items-center gap-3 rounded-lg border p-4"
                }
              >
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={function toggleCurrentItem() {
                    toggleItem(item.id);
                  }}
                />
                <span
                  className={
                    item.done ? "text-muted-foreground line-through" : ""
                  }
                >
                  {item.title}
                </span>
                <span className="sr-only">
                  {item.done ? "Complete" : "Not complete"}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
      <Button variant="outline" onClick={resetList} disabled={completed === 0}>
        Reset checklist
      </Button>
      <p className="text-sm text-muted-foreground">
        These choices live in browser memory. Reloading clears them. No database
        request is made.
      </p>
    </div>
  );
}

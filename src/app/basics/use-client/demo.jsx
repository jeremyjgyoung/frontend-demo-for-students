"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export function LessonDemo() {
  const [count, setCount] = useState(0);
  function addOne() {
    setCount(count + 1);
  }
  function resetCount() {
    setCount(0);
  }
  return (
    <section className="max-w-xl space-y-5 rounded-xl border p-6">
      <h2 className="text-2xl font-semibold">A small interactive part</h2>
      <p>
        The surrounding page comes from a Server Component. This counter needs
        browser interaction.
      </p>
      <p role="status" className="text-3xl font-semibold">
        Count: {count}
      </p>
      <div className="flex flex-wrap gap-3">
        <Button onClick={addOne}>Add one</Button>
        <Button variant="outline" onClick={resetCount}>
          Reset count
        </Button>
      </div>
    </section>
  );
}

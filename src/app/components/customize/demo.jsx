"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  const [variant, setVariant] = useState("default");
  const [rounded, setRounded] = useState(false);
  const [message, setMessage] = useState("");

  function joinClub() {
    setMessage("You joined the demo club.");
  }
  return (
    <div className="space-y-5 rounded-xl border p-6">
      <h2 className="text-xl font-semibold">Already in your template</h2>
      <p className="leading-7">
        All shadcn components are included. Import the component you need, then
        put it in your JSX.
      </p>
      <pre
        tabIndex={0}
        className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
      >
        <code>
          {
            'import { Button } from "@/components/ui/button";\n\n<Button variant="outline">Join the club</Button>'
          }
        </code>
      </pre>
      <label className="flex items-center gap-3">
        Variant
        <select
          value={variant}
          className="rounded border bg-background p-2"
          onChange={function changeVariant(event) {
            setVariant(event.target.value);
          }}
        >
          <option>default</option>
          <option>outline</option>
          <option>secondary</option>
          <option>ghost</option>
        </select>
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={rounded}
          onChange={function changeShape(event) {
            setRounded(event.target.checked);
          }}
        />
        Use a pill shape
      </label>
      <Button
        type="button"
        variant={variant}
        size="lg"
        onClick={joinClub}
        className={rounded ? "rounded-full" : "rounded-lg"}
      >
        Join the club
      </Button>
      <p role="status" className="text-sm">
        {message}
      </p>
    </div>
  );
}

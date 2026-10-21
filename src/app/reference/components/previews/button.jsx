"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// A local preview using the real component already in your template.
export function ButtonPreview() {
  const [saved, setSaved] = useState(false);
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={function save() {
            setSaved(!saved);
          }}
        >
          {saved ? "Saved" : "Save"}
        </Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
      <p role="status" className="text-xs text-muted-foreground">
        {saved ? "Saved in this preview." : "Try the Save button."}
      </p>
    </div>
  );
}

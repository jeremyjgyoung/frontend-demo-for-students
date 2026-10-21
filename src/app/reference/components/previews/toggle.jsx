"use client";
import { Toggle } from "@/components/ui/toggle";

// A local preview using the real component already in your template.
export function TogglePreview() {
  return (
    <Toggle aria-label="Bold text" variant="outline">
      <strong>B</strong>
    </Toggle>
  );
}

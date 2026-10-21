"use client";
import { Kbd } from "@/components/ui/kbd";

// A local preview using the real component already in your template.
export function KbdPreview() {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span>Use</span>
      <Kbd>Ctrl</Kbd>
      <span>+</span>
      <Kbd>K</Kbd>
      <span className="text-muted-foreground">for a shortcut label.</span>
    </div>
  );
}

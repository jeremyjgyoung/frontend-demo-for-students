"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// A local preview using the real component already in your template.
export function ToggleGroupPreview() {
  return (
    <ToggleGroup defaultValue={["list"]} aria-label="Display view">
      <ToggleGroupItem value="list" aria-label="List view">
        List
      </ToggleGroupItem>
      <ToggleGroupItem value="grid" aria-label="Grid view">
        Grid
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

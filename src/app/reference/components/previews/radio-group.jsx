"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// A local preview using the real component already in your template.
export function RadioGroupPreview() {
  return (
    <RadioGroup defaultValue="art" aria-label="Preferred club">
      <label className="flex items-center gap-3 text-sm">
        <RadioGroupItem value="art" />
        Art
      </label>
      <label className="flex items-center gap-3 text-sm">
        <RadioGroupItem value="walking" />
        Walking
      </label>
    </RadioGroup>
  );
}

"use client";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

// A local preview using the real component already in your template.
export function SliderPreview() {
  const [value, setValue] = useState([40]);
  return (
    <div className="w-full space-y-4">
      <p className="text-sm">Volume: {value[0]}</p>
      <Slider
        value={value}
        onValueChange={setValue}
        min={0}
        max={100}
        aria-label="Volume"
      />
    </div>
  );
}

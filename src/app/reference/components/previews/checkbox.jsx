"use client";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

// A local preview using the real component already in your template.
export function CheckboxPreview() {
  const [checked, setChecked] = useState(true);
  return (
    <label className="flex items-center gap-3 text-sm">
      <Checkbox checked={checked} onCheckedChange={setChecked} />
      Include newsletter
    </label>
  );
}

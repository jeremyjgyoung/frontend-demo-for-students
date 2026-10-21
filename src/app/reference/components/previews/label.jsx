"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// A local preview using the real component already in your template.
export function LabelPreview() {
  return (
    <div className="w-full space-y-2">
      <Label htmlFor="gallery-label">A label linked to an input</Label>
      <Input id="gallery-label" placeholder="Click the label to focus me" />
    </div>
  );
}

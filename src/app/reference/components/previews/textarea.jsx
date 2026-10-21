"use client";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// A local preview using the real component already in your template.
export function TextareaPreview() {
  return (
    <div className="w-full space-y-2">
      <Label htmlFor="gallery-notes">Project notes</Label>
      <Textarea
        id="gallery-notes"
        placeholder="What would you like to build?"
      />
    </div>
  );
}

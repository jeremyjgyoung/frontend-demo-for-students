"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// A local preview using the real component already in your template.
export function InputPreview() {
  return (
    <div className="w-full space-y-2">
      <Label htmlFor="gallery-name">Name</Label>
      <Input id="gallery-name" placeholder="Your name" />
    </div>
  );
}

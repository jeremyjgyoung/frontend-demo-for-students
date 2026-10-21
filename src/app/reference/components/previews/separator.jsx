"use client";
import { Separator } from "@/components/ui/separator";

// A local preview using the real component already in your template.
export function SeparatorPreview() {
  return (
    <div className="w-full space-y-3 text-sm">
      <p>Project details</p>
      <Separator />
      <p className="text-muted-foreground">Related information</p>
      <div className="flex h-5 items-center gap-3">
        <span>Help</span>
        <Separator orientation="vertical" />
        <span>Contact</span>
      </div>
    </div>
  );
}

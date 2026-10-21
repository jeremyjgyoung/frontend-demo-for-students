"use client";
import { Marker, MarkerContent } from "@/components/ui/marker";

// A local preview using the real component already in your template.
export function MarkerPreview() {
  return (
    <div className="w-full space-y-4">
      <Marker variant="separator">
        <MarkerContent>Today</MarkerContent>
      </Marker>
      <p className="text-center text-sm text-muted-foreground">
        New messages start here.
      </p>
    </div>
  );
}

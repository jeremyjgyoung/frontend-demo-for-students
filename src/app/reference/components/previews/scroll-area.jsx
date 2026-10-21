"use client";
import { ScrollArea } from "@/components/ui/scroll-area";

// A local preview using the real component already in your template.
export function ScrollAreaPreview() {
  return (
    <ScrollArea className="h-40 w-full rounded-lg border">
      <div
        tabIndex={0}
        role="region"
        aria-label="Scrollable club notices"
        className="space-y-3 p-4 text-sm"
      >
        {[
          "Meet at the library.",
          "Bring water.",
          "Wear comfortable shoes.",
          "Check the weather.",
          "Bring a coat.",
          "Stay with the group.",
          "Return before 17:00.",
        ].map(function notice(text) {
          return <p key={text}>{text}</p>;
        })}
      </div>
    </ScrollArea>
  );
}

"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

// A local preview using the real component already in your template.
export function HoverCardPreview() {
  return (
    <div className="space-y-3">
      <HoverCard>
        <HoverCardTrigger
          render={
            <a href="/components" className="underline underline-offset-4" />
          }
        >
          Walking club profile
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="font-semibold">Walking club</p>
          <p className="mt-2 text-sm">
            Short local walks. Everyone is welcome.
          </p>
        </HoverCardContent>
      </HoverCard>
      <p className="text-xs text-muted-foreground">
        Hover over or focus the profile link.
      </p>
    </div>
  );
}

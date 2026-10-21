"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// A local preview using the real component already in your template.
export function TooltipPreview() {
  return (
    <div className="space-y-3">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          Hover or focus me
        </TooltipTrigger>
        <TooltipContent>A short hint about this control.</TooltipContent>
      </Tooltip>
      <p className="text-xs text-muted-foreground">
        Use the mouse or the Tab key.
      </p>
    </div>
  );
}

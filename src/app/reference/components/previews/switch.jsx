"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

// A local preview using the real component already in your template.
export function SwitchPreview() {
  const [enabled, setEnabled] = useState(true);
  return (
    <div className="space-y-3">
      <label className="flex items-center gap-3 text-sm">
        <Switch checked={enabled} onCheckedChange={setEnabled} />
        Quiet mode
      </label>
      <p role="status" className="text-xs text-muted-foreground">
        {enabled ? "Quiet mode is on." : "Quiet mode is off."}
      </p>
    </div>
  );
}

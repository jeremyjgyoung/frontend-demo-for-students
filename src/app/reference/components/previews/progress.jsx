"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

// A local preview using the real component already in your template.
export function ProgressPreview() {
  const [progress, setProgress] = useState(40);
  return (
    <div className="w-full space-y-4">
      <Progress value={progress} aria-label="Upload progress" />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm">{progress}% complete</span>
        <Button
          size="sm"
          variant="outline"
          onClick={function advance() {
            setProgress(progress === 100 ? 0 : Math.min(100, progress + 20));
          }}
        >
          {progress === 100 ? "Reset" : "Advance"}
        </Button>
      </div>
    </div>
  );
}

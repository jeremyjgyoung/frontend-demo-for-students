"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

// A local preview using the real component already in your template.
export function ButtonGroupPreview() {
  const [view, setView] = useState("Week");
  return (
    <div className="space-y-3">
      <ButtonGroup aria-label="Calendar view">
        {["Day", "Week", "Month"].map(function option(label) {
          return (
            <Button
              key={label}
              variant={view === label ? "default" : "outline"}
              aria-pressed={view === label}
              onClick={function chooseView() {
                setView(label);
              }}
            >
              {label}
            </Button>
          );
        })}
      </ButtonGroup>
      <p className="text-xs text-muted-foreground">{view} view selected</p>
    </div>
  );
}

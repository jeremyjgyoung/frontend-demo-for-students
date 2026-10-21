"use client";
import { useState } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

// A local preview using the real component already in your template.
export function ContextMenuPreview() {
  const [message, setMessage] = useState("Right-click or long-press the box.");
  return (
    <div className="space-y-3">
      <ContextMenu>
        <ContextMenuTrigger>
          <div
            tabIndex={0}
            className="rounded-lg border-2 border-dashed p-5 text-center text-sm"
          >
            Right-click here
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem
            onClick={function save() {
              setMessage("Saved from the context menu.");
            }}
          >
            Save
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <p role="status" className="text-xs text-muted-foreground">
        {message}
      </p>
    </div>
  );
}

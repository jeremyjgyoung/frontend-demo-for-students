"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// A local preview using the real component already in your template.
export function DropdownMenuPreview() {
  const [message, setMessage] = useState("Open the menu to try an action.");
  return (
    <div className="space-y-3">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>
          More actions
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={function save() {
              setMessage("Activity saved.");
            }}
          >
            Save activity
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={function share() {
              setMessage("Share selected. This demo sends nothing.");
            }}
          >
            Share
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <p role="status" className="text-xs text-muted-foreground">
        {message}
      </p>
    </div>
  );
}

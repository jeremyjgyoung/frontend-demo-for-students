"use client";
import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

// A local preview using the real component already in your template.
export function CommandPreview() {
  const [message, setMessage] = useState("Choose or search for an action.");
  return (
    <div className="w-full space-y-3">
      <Command className="rounded-lg border">
        <CommandInput placeholder="Find an action" />
        <CommandList className="max-h-28">
          <CommandEmpty>No action found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={function save() {
                setMessage("Project saved.");
              }}
            >
              Save project
            </CommandItem>
            <CommandItem
              onSelect={function open() {
                setMessage("Open selected.");
              }}
            >
              Open project
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      <p role="status" className="text-xs text-muted-foreground">
        {message}
      </p>
    </div>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

// A local preview using the real component already in your template.
export function PopoverPreview() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Meeting place
      </PopoverTrigger>
      <PopoverContent>
        <PopoverTitle>School library</PopoverTitle>
        <PopoverDescription>Use the main entrance at 15:30.</PopoverDescription>
      </PopoverContent>
    </Popover>
  );
}

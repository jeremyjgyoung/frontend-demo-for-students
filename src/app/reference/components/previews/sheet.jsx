"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// A local preview using the real component already in your template.
export function SheetPreview() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Open side panel
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Packing list</SheetTitle>
          <SheetDescription>What to bring on the walk.</SheetDescription>
        </SheetHeader>
        <ul className="list-disc space-y-3 px-8">
          <li>Water</li>
          <li>A coat</li>
          <li>Comfortable shoes</li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

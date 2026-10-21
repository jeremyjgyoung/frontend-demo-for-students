"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
} from "@/components/ui/popover";
export function LessonDemo() {
  const [saved, setSaved] = useState(false);
  function saveActivity() {
    setSaved(true);
  }
  function clearActivity() {
    setSaved(false);
  }
  return (
    <section className="space-y-5 rounded-xl border p-6">
      <h2 className="text-2xl font-semibold">
        One activity, different kinds of overlay
      </h2>
      <div className="flex flex-wrap gap-3">
        <Dialog>
          <DialogTrigger render={<Button />}>Activity details</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Friday walk</DialogTitle>
              <DialogDescription>
                An easy walk. Meet at the school library at 15:30.
              </DialogDescription>
            </DialogHeader>
            <p>Bring water and a coat. We return before 17:00.</p>
          </DialogContent>
        </Dialog>
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            Packing list
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>What to bring</SheetTitle>
              <SheetDescription>
                A few useful things for the walk.
              </SheetDescription>
            </SheetHeader>
            <ul className="list-disc space-y-2 px-8">
              <li>Water</li>
              <li>A coat</li>
              <li>Comfortable shoes</li>
            </ul>
          </SheetContent>
        </Sheet>
        <Popover>
          <PopoverTrigger render={<Button variant="outline" />}>
            Meeting place
          </PopoverTrigger>
          <PopoverContent>
            <PopoverTitle>School library</PopoverTitle>
            <PopoverDescription>
              Use the main entrance at 15:30.
            </PopoverDescription>
          </PopoverContent>
        </Popover>
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" />}>
            More actions
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={saveActivity}>
              Save activity
            </DropdownMenuItem>
            <DropdownMenuItem onClick={clearActivity}>
              Clear saved activity
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p role="status">
        {saved
          ? "Activity saved in this browser preview."
          : "No activity saved."}
      </p>
    </section>
  );
}

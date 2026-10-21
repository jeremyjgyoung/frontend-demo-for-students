"use client";
import { useState } from "react";
import Link from "next/link";
import { Info } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
export function LessonDemo() {
  const [saved, setSaved] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  function toggleSaved() {
    setSaved(!saved);
  }
  function toggleDetails() {
    setShowDetails(!showDetails);
  }
  return (
    <section
      aria-label="Keyboard practice area"
      className="space-y-6 rounded-xl border p-6"
    >
      <h2 className="text-2xl font-semibold">Try one task with a keyboard</h2>
      <p>
        Find each control by its visible focus outline. Save the walk, read the
        meeting details, and open the packing list.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={toggleSaved} aria-pressed={saved}>
          {saved ? "Remove saved activity" : "Save activity"}
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label="Show meeting details"
          aria-expanded={showDetails}
          aria-controls="keyboard-details"
          onClick={toggleDetails}
        >
          <Info aria-hidden="true" />
        </Button>
        <Dialog>
          <DialogTrigger render={<Button variant="outline" />}>
            Open packing list
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Packing list</DialogTitle>
              <DialogDescription>
                Bring these for the Friday walk.
              </DialogDescription>
            </DialogHeader>
            <ul className="list-disc space-y-2 pl-5">
              <li>Water</li>
              <li>A coat</li>
              <li>Comfortable shoes</li>
            </ul>
            <DialogClose render={<Button />}>Done</DialogClose>
          </DialogContent>
        </Dialog>
      </div>
      <p role="status">
        {saved
          ? "The walk is saved in this preview."
          : "The walk is not saved."}
      </p>
      <p id="keyboard-details" hidden={!showDetails}>
        Meet at the school library at 15:30. Return before 17:00.
      </p>
      <Link
        href="/accessibility/screen-readers"
        className={buttonVariants({ variant: "link" })}
      >
        Read the invitation lesson
      </Link>
      <p className="text-sm leading-6 text-muted-foreground">
        Enter activates a link. Enter or Space activates a button. Escape closes
        this dialog. Do not remove focus outlines just because you prefer a
        cleaner look.
      </p>
    </section>
  );
}

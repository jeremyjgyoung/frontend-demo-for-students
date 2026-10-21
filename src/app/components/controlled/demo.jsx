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
  DialogClose,
} from "@/components/ui/dialog";
export function LessonDemo() {
  const [open, setOpen] = useState(false);
  const [applied, setApplied] = useState("calm");
  const [draft, setDraft] = useState("calm");
  function changeOpen(value) {
    setOpen(value);
    // Start a new edit from the currently applied choice.
    if (value) {
      setDraft(applied);
    }
  }
  function applyChoice() {
    setApplied(draft);
    setOpen(false);
  }
  return (
    <div className="space-y-5">
      <article
        className={
          applied === "calm"
            ? "space-y-4 rounded-xl bg-sky-50 p-6 text-sky-950"
            : "space-y-4 rounded-xl bg-violet-100 p-6 text-violet-950"
        }
      >
        <h2 className="text-2xl font-semibold">Adventure Club</h2>
        <p role="status">Applied style: {applied}</p>
      </article>
      <Dialog open={open} onOpenChange={changeOpen}>
        <DialogTrigger render={<Button />}>
          Edit the preview style
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Choose a preview style</DialogTitle>
            <DialogDescription>
              The preview changes only when you choose Apply.
            </DialogDescription>
          </DialogHeader>
          <label className="space-y-2">
            <span>Style</span>
            <select
              value={draft}
              className="block w-full rounded border bg-background p-2"
              onChange={function changeDraft(event) {
                setDraft(event.target.value);
              }}
            >
              <option value="calm">calm</option>
              <option value="bold">bold</option>
            </select>
          </label>
          <div className="flex flex-wrap gap-3">
            <Button onClick={applyChoice}>Apply style</Button>
            <DialogClose render={<Button variant="outline" />}>
              Cancel
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      <p className="text-sm text-muted-foreground">
        Try Cancel or Escape. An unfinished choice should not change the card.
      </p>
    </div>
  );
}

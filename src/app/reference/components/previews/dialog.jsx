"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// A local preview using the real component already in your template.
export function DialogPreview() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Open dialog
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Friday walk</DialogTitle>
          <DialogDescription>Meet at the library at 15:30.</DialogDescription>
        </DialogHeader>
        <p>Bring water and a coat.</p>
      </DialogContent>
    </Dialog>
  );
}

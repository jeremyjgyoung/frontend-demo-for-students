"use client";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

// A local preview using the real component already in your template.
export function AlertDialogPreview() {
  const [message, setMessage] = useState("No real files will be removed.");
  return (
    <div className="space-y-3">
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="outline" />}>
          Try confirmation
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove this practice item?</AlertDialogTitle>
            <AlertDialogDescription>
              This only changes the message in this preview.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={function confirm() {
                setMessage("Practice item removed.");
              }}
            >
              Remove item
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <p role="status" className="text-xs text-muted-foreground">
        {message}
      </p>
    </div>
  );
}

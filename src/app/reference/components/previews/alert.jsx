"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// A local preview using the real component already in your template.
export function AlertPreview() {
  return (
    <Alert>
      <AlertTitle>Ready to go</AlertTitle>
      <AlertDescription>
        Your project is saved in this preview.
      </AlertDescription>
    </Alert>
  );
}

"use client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

// A local preview using the real component already in your template.
export function SonnerPreview() {
  function notify() {
    toast.success("Project saved", {
      description: "This is a Sonner notification.",
    });
  }
  return (
    <div className="space-y-3">
      <Button variant="outline" onClick={notify}>
        Show Sonner notification
      </Button>
      <p className="text-xs text-muted-foreground">
        Appears at the edge of the screen.
      </p>
    </div>
  );
}

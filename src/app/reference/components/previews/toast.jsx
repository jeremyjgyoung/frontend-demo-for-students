"use client";
import {
  Toaster as BaseToaster,
  toast as baseToast,
} from "@/components/ui/toast";
import { Button } from "@/components/ui/button";

// A local preview using the real component already in your template.
export function ToastPreview() {
  function notify() {
    baseToast.add({
      title: "Project saved",
      description: "This is a Base UI toast.",
      type: "success",
    });
  }
  return (
    <BaseToaster>
      <div className="space-y-3">
        <Button variant="outline" onClick={notify}>
          Show Base UI toast
        </Button>
        <p className="text-xs text-muted-foreground">
          A second notification option.
        </p>
      </div>
    </BaseToaster>
  );
}

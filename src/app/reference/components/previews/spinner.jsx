"use client";
import { Spinner } from "@/components/ui/spinner";

// A local preview using the real component already in your template.
export function SpinnerPreview() {
  return (
    <div role="status" className="flex items-center gap-3 text-sm">
      <Spinner aria-hidden="true" className="size-6" />
      Loading your project…
    </div>
  );
}

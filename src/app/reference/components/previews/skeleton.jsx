"use client";
import { Skeleton } from "@/components/ui/skeleton";

// A local preview using the real component already in your template.
export function SkeletonPreview() {
  return (
    <div
      role="img"
      aria-label="Placeholder for content that is loading"
      className="w-full space-y-3"
    >
      <div className="flex gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-16 w-full" />
    </div>
  );
}

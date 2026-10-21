"use client";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

// A local preview using the real component already in your template.
export function EmptyPreview() {
  return (
    <Empty className="border">
      <EmptyHeader>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>Start with a small idea.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}

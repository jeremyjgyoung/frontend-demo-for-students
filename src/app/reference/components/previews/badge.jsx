"use client";
import { Badge } from "@/components/ui/badge";

// A local preview using the real component already in your template.
export function BadgePreview() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>New</Badge>
      <Badge variant="secondary">Outdoors</Badge>
      <Badge variant="outline">Draft</Badge>
      <Badge variant="destructive">Urgent</Badge>
    </div>
  );
}

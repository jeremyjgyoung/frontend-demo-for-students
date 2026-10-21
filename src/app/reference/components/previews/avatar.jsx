"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// A local preview using the real component already in your template.
export function AvatarPreview() {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src="/landscape.svg" alt="" />
        <AvatarFallback>AC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <span className="text-sm">Image or initials</span>
    </div>
  );
}

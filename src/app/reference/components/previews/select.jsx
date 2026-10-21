"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// A local preview using the real component already in your template.
export function SelectPreview() {
  return (
    <Select
      defaultValue="art"
      items={[
        { value: "art", label: "Art" },
        { value: "walking", label: "Walking" },
      ]}
    >
      <SelectTrigger aria-label="Choose a club" className="w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="art">Art</SelectItem>
        <SelectItem value="walking">Walking</SelectItem>
      </SelectContent>
    </Select>
  );
}

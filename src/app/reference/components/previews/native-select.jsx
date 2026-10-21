"use client";
import { Label } from "@/components/ui/label";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

// A local preview using the real component already in your template.
export function NativeSelectPreview() {
  return (
    <div className="w-full space-y-2">
      <Label htmlFor="gallery-native-day">Meeting day</Label>
      <NativeSelect id="gallery-native-day" defaultValue="friday">
        <NativeSelectOption value="wednesday">Wednesday</NativeSelectOption>
        <NativeSelectOption value="friday">Friday</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}

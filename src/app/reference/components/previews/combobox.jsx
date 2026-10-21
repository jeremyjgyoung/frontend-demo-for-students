"use client";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

// A local preview using the real component already in your template.
export function ComboboxPreview() {
  return (
    <Combobox items={["Art", "Music", "Walking"]}>
      <ComboboxInput
        aria-label="Search for a club"
        placeholder="Search for a club"
      />
      <ComboboxContent>
        <ComboboxEmpty>No club found.</ComboboxEmpty>
        <ComboboxList>
          {function clubItem(club) {
            return (
              <ComboboxItem key={club} value={club}>
                {club}
              </ComboboxItem>
            );
          }}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

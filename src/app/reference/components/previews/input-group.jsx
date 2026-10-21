"use client";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

// A local preview using the real component already in your template.
export function InputGroupPreview() {
  return (
    <InputGroup>
      <InputGroupInput
        aria-label="Your website"
        placeholder="my-club.example"
      />
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}

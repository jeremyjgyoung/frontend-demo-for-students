"use client";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

// A local preview using the real component already in your template.
export function FieldPreview() {
  return (
    <Field>
      <FieldLabel htmlFor="gallery-club">Club name</FieldLabel>
      <Input
        id="gallery-club"
        aria-describedby="gallery-club-help"
        placeholder="Walking club"
      />
      <FieldDescription id="gallery-club-help">
        Use a short, clear name.
      </FieldDescription>
    </Field>
  );
}

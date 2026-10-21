"use client";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentTitle,
} from "@/components/ui/attachment";

// A local preview using the real component already in your template.
export function AttachmentPreview() {
  return (
    <Attachment state="done">
      <AttachmentContent>
        <AttachmentTitle>Trip notes.pdf</AttachmentTitle>
        <AttachmentDescription>PDF document · 240 KB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  );
}

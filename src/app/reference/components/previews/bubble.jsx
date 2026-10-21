"use client";
import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble";

// A local preview using the real component already in your template.
export function BubblePreview() {
  return (
    <BubbleGroup>
      <Bubble>
        <BubbleContent>Is the walk still on?</BubbleContent>
      </Bubble>
      <Bubble variant="secondary" align="end">
        <BubbleContent>Yes. Meet at the library.</BubbleContent>
      </Bubble>
    </BubbleGroup>
  );
}

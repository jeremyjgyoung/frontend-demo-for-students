"use client";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import {
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@/components/ui/message";

// A local preview using the real component already in your template.
export function MessagePreview() {
  return (
    <Message>
      <MessageContent>
        <MessageHeader>Walking club</MessageHeader>
        <Bubble variant="secondary">
          <BubbleContent>The walk starts at 15:30.</BubbleContent>
        </Bubble>
        <MessageFooter>Today · 14:20</MessageFooter>
      </MessageContent>
    </Message>
  );
}

"use client";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller";

// A local preview using the real component already in your template.
export function MessageScrollerPreview() {
  return (
    <MessageScrollerProvider>
      <MessageScroller className="h-40 w-full rounded-lg border">
        <MessageScrollerViewport aria-label="Sample chat messages">
          <MessageScrollerContent className="gap-3 p-3">
            {[
              "Welcome to the club.",
              "Meet at the library.",
              "Bring a water bottle.",
              "The walk starts at 15:30.",
              "See you on Friday!",
            ].map(function message(text, index) {
              return (
                <MessageScrollerItem key={text} messageId={String(index)}>
                  <Bubble variant="secondary">
                    <BubbleContent>{text}</BubbleContent>
                  </Bubble>
                </MessageScrollerItem>
              );
            })}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton direction="end" />
      </MessageScroller>
    </MessageScrollerProvider>
  );
}

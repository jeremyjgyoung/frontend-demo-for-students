"use client";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
export function LessonDemo() {
  const notices = [
    "Meet at the school library.",
    "Bring a coat.",
    "Fill your water bottle.",
    "Wear comfortable shoes.",
    "Tell the leader before leaving.",
    "Stay with the group.",
    "Check the weather.",
    "Return before 17:00.",
  ];
  return (
    <section className="space-y-6 rounded-xl border p-6">
      <h2 className="text-2xl font-semibold">Keep details easy to find</h2>
      <Accordion>
        <AccordionItem value="packing">
          <AccordionTrigger>What should I bring?</AccordionTrigger>
          <AccordionContent>
            Bring water, a coat, and comfortable shoes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="time">
          <AccordionTrigger>When do we return?</AccordionTrigger>
          <AccordionContent>Before 17:00 on Friday.</AccordionContent>
        </AccordionItem>
      </Accordion>
      <Collapsible>
        <CollapsibleTrigger render={<Button variant="outline" />}>
          Extra route note
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4">
          The route is mostly flat. Ask the leader about access needs before
          joining.
        </CollapsibleContent>
      </Collapsible>
      <div className="space-y-3">
        <h3 className="font-semibold">Club notices</h3>
        <ScrollArea className="h-40 rounded-xl border">
          <div
            tabIndex={0}
            role="region"
            aria-label="Club notices"
            className="space-y-4 p-4"
          >
            {notices.map(function showNotice(notice) {
              return <p key={notice}>{notice}</p>;
            })}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}

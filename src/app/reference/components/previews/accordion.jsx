"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// A local preview using the real component already in your template.
export function AccordionPreview() {
  return (
    <Accordion className="w-full" defaultValue={["packing"]}>
      <AccordionItem value="packing">
        <AccordionTrigger>What should I bring?</AccordionTrigger>
        <AccordionContent>
          Water, a coat, and comfortable shoes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="time">
        <AccordionTrigger>When do we return?</AccordionTrigger>
        <AccordionContent>Before 17:00 on Friday.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

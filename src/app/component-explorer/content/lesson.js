export const lesson = {
  topic: "component-explorer",
  slug: "content",
  title: "Content, layout, and media",
  summary: "Reveal extra details and keep content inside useful containers.",
  steps: [
    "Open What should I bring? with the accordion trigger.",
    "Toggle the extra route note.",
    "Scroll the small notice area without scrolling the whole page.",
  ],
  explanations: [
    {
      title: "1. Reveal details when useful",
      text: "Accordion groups related expandable sections. Collapsible shows or hides one section. Keep essential information visible when hiding it would make the task confusing.",
      code: '<Accordion>\n  <AccordionItem value="packing">\n    <AccordionTrigger>What should I bring?</AccordionTrigger>\n    <AccordionContent>Water and a coat.</AccordionContent>\n  </AccordionItem>\n</Accordion>',
    },
    {
      title: "2. Give a scroll area a size",
      text: "A scroll area only scrolls when its content is larger than its height. Give keyboard users a focusable region and a useful name. Do not trap the entire page inside a tiny panel.",
      code: '<ScrollArea className="h-40 rounded-xl border">\n  <div tabIndex={0} role="region" aria-label="Club notices">Notices</div>\n</ScrollArea>',
    },
    {
      title: "3. Choose a container for the content",
      text: "Aspect Ratio reserves image space. Resizable lets users adjust panels. Carousel shows a sequence. Item arranges a row of content. Message parts suit conversation interfaces. Use them only when the task benefits.",
      code: "<Collapsible>\n  <CollapsibleTrigger render={<Button />}>Extra route note</CollapsibleTrigger>\n  <CollapsibleContent>The route is mostly flat.</CollapsibleContent>\n</Collapsible>",
    },
  ],
};

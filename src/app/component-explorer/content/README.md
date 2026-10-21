# Content, layout, and media

Reveal extra details and keep content inside useful containers.

## Try it

1. Open What should I bring? with the accordion trigger.
2. Toggle the extra route note.
3. Scroll the small notice area without scrolling the whole page.

## How it works

### 1. Reveal details when useful

Accordion groups related expandable sections. Collapsible shows or hides one section. Keep essential information visible when hiding it would make the task confusing.

```jsx
<Accordion>
  <AccordionItem value="packing">
    <AccordionTrigger>What should I bring?</AccordionTrigger>
    <AccordionContent>Water and a coat.</AccordionContent>
  </AccordionItem>
</Accordion>
```

### 2. Give a scroll area a size

A scroll area only scrolls when its content is larger than its height. Give keyboard users a focusable region and a useful name. Do not trap the entire page inside a tiny panel.

```jsx
<ScrollArea className="h-40 rounded-xl border">
  <div tabIndex={0} role="region" aria-label="Club notices">
    Notices
  </div>
</ScrollArea>
```

### 3. Choose a container for the content

Aspect Ratio reserves image space. Resizable lets users adjust panels. Carousel shows a sequence. Item arranges a row of content. Message parts suit conversation interfaces. Use them only when the task benefits.

```jsx
<Collapsible>
  <CollapsibleTrigger render={<Button />}>Extra route note</CollapsibleTrigger>
  <CollapsibleContent>The route is mostly flat.</CollapsibleContent>
</Collapsible>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

export const lesson = {
  topic: "brand",
  slug: "spacing-shape",
  title: "Apply spacing and shape",
  summary:
    "Turn your style guide into Tailwind spacing, widths, corners, borders, and shadows.",
  steps: [
    "Compare compact and spacious versions.",
    "Change the corners. Notice that the button and card follow the radius token.",
    "Compare a border alone with a border and shadow.",
  ],
  explanations: [
    {
      title: "1. Separate page space from component space",
      text: "A page container controls the whole content area. Card padding controls space inside a card. gap or space-y controls the space between items.",
      code: '<section className="mx-auto max-w-2xl space-y-6 p-6">\n  <article className="space-y-4 p-6">Card content</article>\n</section>',
    },
    {
      title: "2. Repeat a small spacing scale",
      text: "Use a few useful spacing choices. This example compares p-3 with p-6 and space-y-2 with space-y-4. Choose values for a reason, not a different number for every gap.",
      code: 'className={spacious\n  ? "space-y-4 p-6"\n  : "space-y-2 p-3"}',
    },
    {
      title: "3. Share corners through a token",
      text: "The existing theme derives rounded-lg and other radius sizes from --radius. Change the shared value for a consistent family of shapes. A fixed rounded-full class has a different, intentional purpose.",
      code: '// Save in :root in globals.css:\n--radius: 1rem;\n\n// A local preview can override it:\nstyle={{ "--radius": round ? "1rem" : "0.125rem" }}',
    },
    {
      title: "4. Use depth to explain a surface",
      text: "A shadow can suggest a raised surface. A border can separate content without elevation. Test both before combining them.",
      code: '<article className="rounded-lg border bg-card p-6 shadow-md">\n  Card content\n</article>',
    },
  ],
};

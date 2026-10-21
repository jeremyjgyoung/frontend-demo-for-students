export const lesson = {
  topic: "design",
  slug: "type-spacing",
  title: "Typography and spacing",
  summary: "Adjust line length, line height, and space between related items.",
  steps: [
    "Read both versions at a narrow and wide width.",
    "Compare the paragraph spacing and title.",
  ],
  explanations: [
    {
      title: "1. Limit line length",
      text: "max-w-prose limits a text block using a reading-oriented width. The text still fits a narrower screen.",
      code: '<article className="max-w-prose">',
    },
    {
      title: "2. Keep a repeatable type scale",
      text: "Use a small set of sizes for titles, body text, and labels. leading controls the space between lines; space-y controls space between blocks.",
      code: '<article className="space-y-5 text-base leading-8">\n  <h2 className="text-2xl font-semibold">Make room</h2>\n  <p>Body text belongs here.</p>\n</article>',
    },
  ],
};

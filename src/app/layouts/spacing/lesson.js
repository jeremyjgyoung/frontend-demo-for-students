export const lesson = {
  topic: "layouts",
  slug: "spacing",
  title: "Page width and spacing",
  summary:
    "Use a maximum width and a small spacing scale to make a page easier to read.",
  steps: [
    "Compare the full width with the readable width.",
    "Change the gap. Watch how the group feels.",
  ],
  explanations: [
    {
      title: "1. Center a container",
      text: "mx-auto shares the spare horizontal space on both sides. max-w-xl prevents a text block from becoming too wide.",
      code: '<article className="mx-auto max-w-xl rounded-xl border p-6">',
    },
    {
      title: "2. Separate padding from gap",
      text: "Padding adds space inside a box. Gap adds space between the children of flex or grid. Here, the slider changes the grid gap.",
      code: 'style={{ display: "grid", gap: gap }}',
    },
    {
      title: "3. Use a small scale",
      text: "Choose a few repeatable values. For example, gap-2, gap-4, and gap-6 make small, medium, and large groups.",
      code: '<div className="grid gap-4">\u2026</div>',
    },
  ],
};

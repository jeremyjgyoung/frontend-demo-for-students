export const lesson = {
  topic: "design",
  slug: "hierarchy",
  title: "Hierarchy and grouping",
  summary:
    "Use emphasis and spacing to show what matters and what belongs together.",
  steps: ["Compare both versions.", "Say what you notice first and why."],
  explanations: [
    {
      title: "1. Give elements different jobs",
      text: "When every line has the same weight, the reader must work out the order. Make the main title stronger and supporting text quieter. Keep semantic heading levels correct.",
      code: '<h2 className="text-3xl font-semibold tracking-tight">\n  A walk beside the water\n</h2>',
    },
    {
      title: "2. Use space to form groups",
      text: "Keep related details near each other. A larger gap can separate the details from the action. Do not add a border to every item.",
      code: '<div className="mt-6 border-t pt-5">\n  <Button>Join the walk</Button>\n</div>',
    },
  ],
};

export const lesson = {
  topic: "brand",
  slug: "style-guide",
  title: "Create a small style guide",
  summary: "Document the choices people should repeat across a site.",
  steps: [
    "Find a rule for color, type, spacing, and actions.",
    "Describe a new card that would fit this guide.",
  ],
  explanations: [
    {
      title: "1. Document decisions, not just swatches",
      text: "A guide explains what each choice is for. Include real examples of text, buttons, and content. Keep the guide small enough to maintain.",
      code: "// Primary: main action\n// Quiet surface: supporting content\n// Positive feedback: words plus a status color",
    },
    {
      title: "2. Give useful examples",
      text: "A label such as Join the walk explains the action better than Submit. Record these language choices alongside visual choices.",
      code: '<Button>Join the walk</Button>\n<Button variant="outline">View details</Button>',
    },
  ],
};

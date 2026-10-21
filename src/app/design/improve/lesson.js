export const lesson = {
  topic: "design",
  slug: "improve",
  title: "Improve a crowded interface",
  summary: "Improve a card by changing one design decision at a time.",
  steps: [
    "Turn all improvements off.",
    "Enable one change at a time. Explain its effect.",
  ],
  explanations: [
    {
      title: "1. Change one variable",
      text: "Compare the same content. If the words change as well as the design, it is harder to tell what helped.",
      code: "const [spacing, setSpacing] = useState(true);\nconst [hierarchy, setHierarchy] = useState(true);",
    },
    {
      title: "2. Explain the reason",
      text: "More decoration does not always create more clarity. Identify the main message, support it with useful spacing, and keep one clear action.",
      code: 'className={hierarchy\n  ? "text-3xl font-semibold"\n  : "text-xl font-bold"}',
    },
  ],
};

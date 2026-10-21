export const lesson = {
  topic: "design",
  slug: "surfaces",
  title: "Color, surfaces, and depth",
  summary: "Compare ways to separate content without decorating every edge.",
  steps: [
    "Compare the three surfaces.",
    "Check whether the content remains clear in dark mode.",
  ],
  explanations: [
    {
      title: "1. Give color a role",
      text: "Choose colors for backgrounds, text, actions, and feedback. A status needs words or another cue as well as color.",
      code: '<span className="bg-emerald-100 text-emerald-950">\n  Spaces available\n</span>',
    },
    {
      title: "2. Choose one clear separator",
      text: "A background change, border, or shadow can separate a card. Compare them before combining them. Explicit colors in this demo are intentional samples, not global theme changes.",
      code: 'const styles = {\n  border: "border-2 border-slate-300",\n  background: "bg-blue-50 text-blue-950",\n  shadow: "border border-slate-200 bg-white text-slate-900 shadow-lg",\n};',
    },
  ],
};

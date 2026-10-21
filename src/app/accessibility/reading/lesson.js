export const lesson = {
  topic: "accessibility",
  slug: "reading",
  title: "Make content easier to read and use",
  summary: "Compare contrast, enlarge text, and respect reduced motion.",
  steps: [
    "Compare the strong and weak text colors. The rest of the lesson stays readable.",
    "Enlarge the preview text. Also try 200% browser zoom and a narrow window.",
    "Move the dot, then choose Reduce motion in preview and try again. Your device preference is respected too.",
  ],
  explanations: [
    {
      title: "1. Make text easy to distinguish",
      text: "Contrast is the difference between foreground and background. WCAG\u2019s minimum for ordinary text is 4.5:1, with exceptions such as large text. The weak-color sample is a comparison, not a recommended style. Check real color pairs with a contrast tool.",
      code: '// Clear normal text on white:\n<p className="bg-white text-slate-900">Meet at 15:30.</p>\n// Compare a weak pair, then improve it:\n<p className="bg-white text-slate-400">Meet at 15:30.</p>',
    },
    {
      title: "2. Let content grow",
      text: "People may enlarge text or zoom the page. Avoid fixed heights around text. Let controls wrap and use responsive widths. This preview enlarges its own text; browser zoom is a separate check of the complete page.",
      code: '<article className="max-w-prose space-y-4 p-6">\n  <h2 className="text-2xl font-semibold">Friday walk</h2>\n  <p className="leading-relaxed">Meet at the library.</p>\n</article>',
    },
    {
      title: "3. Do not rely on color alone",
      text: "The practice card says Activity open as well as using a colored border. A person should not need to distinguish one color from another to understand a status or error.",
      code: "<p>Activity open: places are available.</p>",
    },
    {
      title: "4. Respect motion preferences",
      text: "Some people find moving interfaces uncomfortable. Use a device\u2019s prefers-reduced-motion setting. In Tailwind, motion-reduce:transition-none removes a transition. The preview checkbox is an extra local comparison; the device setting still wins.",
      code: '<div className="transition-transform motion-reduce:transition-none" />\n\n/* Equivalent rule in a CSS Module: */\n@media (prefers-reduced-motion: reduce) {\n  .dot { transition: none; }\n}',
    },
  ],
};

export const lesson = {
  topic: "brand",
  slug: "typography",
  title: "Set fonts and text styles",
  summary:
    "Choose a heading font, a body font, and a small set of readable text styles.",
  steps: [
    "Compare serif and sans-serif headings.",
    "Adjust the heading size and body line height.",
    "Find where the heading overrides the inherited body font.",
  ],
  explanations: [
    {
      title: "1. Define the shared font choices",
      text: "The project maps --font-sans and --font-heading in its Tailwind theme. Body text can inherit font-sans. A heading can choose font-heading explicitly.",
      code: '@theme inline {\n  --font-sans: Arial, Helvetica, sans-serif;\n  --font-heading: Georgia, serif;\n}\n\n// JSX:\n<h2 className="font-heading text-3xl font-semibold">Club news</h2>',
    },
    {
      title: "2. Understand inheritance",
      text: "A font on a parent normally applies to its text children. An element with its own font choice overrides that inherited value. The preview changes the heading without changing the paragraph.",
      code: '<article className="font-sans">\n  <h2 className="font-serif">A distinct heading</h2>\n  <p>The body keeps the sans-serif font.</p>\n</article>',
    },
    {
      title: "3. Load a font file when needed",
      text: "Next.js can load a font with next/font/local. Supply a real font file you are licensed to use. The path is relative to the file importing it. Add its variable class to the body and map the variable in globals.css. The system-font preview does not require a download.",
      code: '// src/app/layout.jsx, after adding src/app/fonts/club.woff2:\nimport localFont from "next/font/local";\nconst clubFont = localFont({\n  src: "./fonts/club.woff2",\n  variable: "--font-club",\n});\n// Apply className={clubFont.variable} to body.\n\n// In globals.css, inside @theme inline:\n// --font-sans: var(--font-club), Arial, sans-serif;',
    },
    {
      title: "4. Keep the scale small",
      text: "Pick a few sizes and repeat them. text-3xl changes size, font-semibold changes weight, and leading-7 changes line spacing. Test long titles and narrow screens.",
      code: '<h2 className="text-3xl leading-tight font-semibold">A title</h2>\n<p className="max-w-prose text-base leading-7">Body text.</p>',
    },
  ],
};

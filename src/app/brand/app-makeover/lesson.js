export const lesson = {
  topic: "brand",
  slug: "app-makeover",
  title: "Apply a style across your app",
  summary:
    "Use a short checklist to turn a style guide into a consistent page.",
  steps: [
    "Compare the plain and styled page.",
    "Name three changes and explain what each one helps.",
    "Use the checklist on your own project.",
  ],
  explanations: [
    {
      title: "1. Apply the shared rules first",
      text: "Start with globals.css. Set color pairs, fonts, and radius values there. Then use the semantic Tailwind utilities in your pages and shared components.",
      code: "// Shared: globals.css\n// Page arrangement: the page JSX\n// Repeated controls: components/ui",
    },
    {
      title: "2. Check the whole interface",
      text: "A home page can look finished while dialogs, empty states, or phone navigation still use old choices. Check the same controls in different states.",
      code: "// Default → hover → focus → selected → disabled\n// Wide screen → narrow screen\n// Light surface → dark surface",
    },
    {
      title: "3. Finish the identity",
      text: "Change the visible name and logo in navigation. Set the real browser title in server metadata and replace app/icon.svg. Use the same image and icon direction throughout the page.",
      code: '// src/app/layout.jsx\nexport const metadata = { title: "Adventure Club" };\n// Replace src/app/icon.svg with your own icon.',
    },
    {
      title: "4. Record what you applied",
      text: "Update the style guide after checking real examples. Keep a reason for the main choices. The guide and the app should describe the same design.",
      code: "// Decision → code change → visible result → check",
    },
  ],
};

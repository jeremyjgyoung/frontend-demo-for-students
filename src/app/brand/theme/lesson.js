export const lesson = {
  topic: "brand",
  slug: "theme",
  title: "Apply your color palette",
  summary:
    "Give colors jobs, then apply them to a small app with Tailwind and shadcn.",
  steps: [
    "Change primary. Find two elements that update together.",
    "Change the page background and card surface separately.",
    "Compare the dark surface, then find the real token definitions in Code.",
  ],
  explanations: [
    {
      title: "1. Name a color by its job",
      text: "Use roles such as primary, background, card, and border. A foreground is the text or icon color placed on that background. These names help the design stay consistent.",
      code: "--primary: #1d4ed8;\n--primary-foreground: #ffffff;\n--card: #ffffff;\n--card-foreground: #0f172a;",
    },
    {
      title: "2. Connect the variable to Tailwind",
      text: "The existing @theme inline block maps the CSS variables to Tailwind utilities. bg-primary reads the primary variable. Do not replace this Tailwind 4 setup with an old Tailwind configuration example.",
      code: "@theme inline {\n  --color-primary: var(--primary);\n  --color-primary-foreground: var(--primary-foreground);\n}",
    },
    {
      title: "3. Use the role in a component",
      text: "The shared Button source already uses primary and primary-foreground. A custom badge can use the same utilities. A fixed bg-blue-700 class would keep that fixed blue when primary changes.",
      code: '<Button>Join the walk</Button>\n<span className="bg-primary text-primary-foreground">Open</span>',
    },
    {
      title: "4. Save the real app theme",
      text: "The picker changes variables only inside this preview. Copy chosen values into :root for the default theme and .dark for dark mode. Keep readable color pairs in both.",
      code: "// src/app/globals.css\n:root { --primary: #1d4ed8; }\n.dark { --primary: #93c5fd; }",
    },
  ],
};

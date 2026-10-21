export const lesson = {
  topic: "brand",
  slug: "style-scope",
  title: "Know where styles belong",
  summary:
    "Choose whether a style should affect one element, a shared component, or the whole app.",
  steps: [
    "Compare a change to one button with a change to both buttons.",
    "Choose the whole app. Notice that the card surface also changes.",
    "Find the file you would edit for each scope.",
  ],
  explanations: [
    {
      title: "1. Change one instance",
      text: "Use className when only this instance needs a change. A class on one Button does not rewrite the shared component.",
      code: '<Button className="rounded-full">Join the club</Button>',
    },
    {
      title: "2. Change a shared rule",
      text: "The Button source lives in src/components/ui/button.tsx. Its variants contain the shared class choices. Edit a default or add a named variant when the appearance should be reused. The preview repeats classes so you can compare the scope without changing the real site.",
      code: "// src/components/ui/button.tsx\n// Shared button rules and named variants live here.",
    },
    {
      title: "3. Change a theme value",
      text: "A CSS variable is a named value. Elements that use it can update together. The app reads shared values from globals.css. A fixed bg-violet-700 class does not follow the primary variable.",
      code: "// src/app/globals.css\n:root {\n  --primary: #7c3aed;\n  --primary-foreground: #ffffff;\n}",
    },
  ],
};

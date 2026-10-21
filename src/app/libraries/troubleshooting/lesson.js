export const lesson = {
  topic: "libraries",
  slug: "troubleshooting",
  title: "Fix common library problems",
  summary: "Check one cause at a time before changing the whole example.",
  steps: [
    "Choose each symptom.",
    "Find the related setup in the first-map Code tab.",
  ],
  explanations: [
    {
      title: "1. Read before reinstalling",
      text: "Check the first error message and the network panel. A missing stylesheet, height, or external tile request is not fixed by changing React state.",
      code: "// Check: imports \u2192 stylesheet \u2192 container \u2192 worker \u2192 network \u2192 versions",
    },
    {
      title: "2. Load browser-only code in the browser",
      text: "Map code uses browser APIs. The client wrapper uses dynamic with ssr: false. Keep metadata in the server page.",
      code: 'const BrowserMap = dynamic(function loadMap() {\n  return import("./demo").then(function getMap(module) {\n    return module.LessonDemo;\n  });\n}, { ssr: false });',
    },
  ],
};

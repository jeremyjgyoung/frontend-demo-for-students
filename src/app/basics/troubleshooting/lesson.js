export const lesson = {
  topic: "basics",
  slug: "troubleshooting",
  title: "Fix one error at a time",
  summary:
    "Use the error message to find one cause. Make a small fix, then check again.",
  steps: [
    "Choose an example problem. Compare the message, likely cause, and corrected code.",
    "Find the file path and line number in a real error before editing.",
    "Check the preview after one change. Use the terminal for install or build messages.",
  ],
  explanations: [
    {
      title: "1. Read the first useful message",
      text: "An error message usually names a file and a location. Start there. Later messages may be caused by the first problem. The examples below describe common messages; the exact wording can vary.",
      code: "// Read: the file, the line, and what failed.\n// Change one thing, save, and check again.",
    },
    {
      title: "2. Match the import to the export",
      text: "Default imports use no braces. Named imports use braces. Check the actual source file instead of changing names at random. Next.js pages need a default component export.",
      code: '// Default page export:\nimport ClubPage from "./example/page";\n// Named reusable component:\nimport { ClubNote } from "./club-note";',
    },
    {
      title: "3. Check paths and client features",
      text: 'Module not found often means a wrong path, letter case, or missing package. An import starting with ./ refers to a local file. A package name refers to an installed package. If state or click handlers need client features, put "use client" before imports in the interactive file.',
      code: '"use client";\nimport { useState } from "react";\nimport { Button } from "@/components/ui/button";',
    },
    {
      title: "4. Separate saving, running, and building",
      text: "Saving updates your source file. pnpm dev serves a preview. pnpm build checks a production build. Use the printed address if the port changed. Stop an unwanted terminal server with Ctrl+C. Restart a stuck dev server after checking its message; reinstalling everything is not the first step.",
      code: "// Before asking for help, keep:\n// 1. The exact error text.\n// 2. The file and line.\n// 3. What you changed.\n// 4. What you expected to happen.",
    },
  ],
};

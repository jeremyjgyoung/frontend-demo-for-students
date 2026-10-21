export const lesson = {
  topic: "basics",
  slug: "use-client",
  title: 'When to use "use client"',
  summary:
    "Keep the page on the server. Add browser interaction in a small Client Component.",
  steps: [
    "Click Add one. React updates the count without opening a new page.",
    "Reset the count. Find the named event handlers in Code.",
    'Compare page.jsx with demo.jsx. Only the interactive file starts with "use client".',
  ],
  explanations: [
    {
      title: "1. Start with the server",
      text: "Pages and layouts are Server Components by default. They can render headings and import a small interactive component. This page keeps its metadata on the server.",
      code: 'import { LessonDemo } from "./demo";\nexport const metadata = { title: "Counter lesson" };\nexport default function Page() {\n  return <LessonDemo />;\n}',
    },
    {
      title: "2. Mark the interactive file",
      text: 'Put "use client" at the top, before imports. This makes the file a Client Component entry point. Use it for state, effects, and event handlers such as onClick.',
      code: '"use client";\nimport { useState } from "react";\nimport { Button } from "@/components/ui/button";',
    },
    {
      title: "3. Connect state to an event",
      text: "count stores a number. Clicking the button calls addOne. setCount asks React to show the new value. The named function makes the action easy to find.",
      code: "const [count, setCount] = useState(0);\nfunction addOne() {\n  setCount(count + 1);\n}\n<Button onClick={addOne}>Add one</Button>",
    },
    {
      title: "4. Keep the boundary small",
      text: "Components imported by a Client Component join its client code. You do not need the directive in every file. Client Components can still receive initial HTML from the server. Read browser-only values such as window inside an event handler or effect. Keep secrets and page metadata on the server.",
      code: '// page.jsx: server page and metadata\n// demo.jsx: "use client", state, and click handlers',
    },
  ],
};

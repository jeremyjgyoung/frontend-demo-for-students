"use client";
import { useState } from "react";
export function LessonDemo() {
  const [problem, setProblem] = useState("export");
  const examples = {
    export: {
      message: "A page needs a default React component export.",
      cause: "The page used a named export instead of a default export.",
      code: "export default function Page() {\n  return <h1>Our club</h1>;\n}",
    },
    import: {
      message: "The imported component is missing or undefined.",
      cause:
        "The import used braces for a default export, or omitted them for a named export.",
      code: 'import ClubPage from "./example/page";\nimport { ClubNote } from "./club-note";',
    },
    path: {
      message: "Module not found.",
      cause:
        "Check the file path and letter case. @/ points to src/. For a package, check package.json and the install step.",
      code: 'import { Button } from "@/components/ui/button";\n// File: src/components/ui/button.tsx',
    },
    client: {
      message: "This component needs a client feature such as useState.",
      cause:
        'The interactive file needs "use client" at the top, before imports.',
      code: '"use client";\nimport { useState } from "react";',
    },
    jsx: {
      message: "Unexpected token or missing closing tag.",
      cause:
        "Check the highlighted JSX and the lines just before it. Match opening and closing tags.",
      code: "return (\n  <section>\n    <h1>Our club</h1>\n  </section>\n);",
    },
  };
  const example = examples[problem];
  return (
    <section className="min-w-0 space-y-5 rounded-xl border p-6">
      <h2 className="text-2xl font-semibold">Practice reading a problem</h2>
      <label className="block space-y-2">
        <span>Example problem</span>
        <select
          className="block w-full rounded border bg-background p-2"
          value={problem}
          onChange={function changeProblem(event) {
            setProblem(event.target.value);
          }}
        >
          <option value="export">Page export</option>
          <option value="import">Import and export mismatch</option>
          <option value="path">Module path</option>
          <option value="client">Client feature</option>
          <option value="jsx">JSX syntax</option>
        </select>
      </label>
      <div role="status" className="space-y-3 rounded-xl bg-muted p-5">
        <p className="font-semibold">{example.message}</p>
        <p className="leading-7">{example.cause}</p>
      </div>
      <h3 className="font-semibold">A corrected example</h3>
      <pre
        tabIndex={0}
        className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
      >
        <code>{example.code}</code>
      </pre>
      <p className="text-sm leading-6 text-muted-foreground">
        These are example messages. This page is working; it does not create
        real errors in your project.
      </p>
    </section>
  );
}

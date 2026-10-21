"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TrailNote } from "./trail-note";
import { PathCard } from "./examples/path-card";

export function LessonDemo() {
  const [selected, setSelected] = useState("same");
  const [message, setMessage] = useState("");
  // Fixed examples let students trace paths without building a path resolver.
  const examples = [
    {
      id: "same",
      label: "./ \u2014 same folder",
      from: "src/app/nextjs/file-paths/demo.jsx",
      code: 'import { TrailNote } from "./trail-note";',
      target: "src/app/nextjs/file-paths/trail-note.jsx",
      meaning:
        "Start in the folder containing the importing file. Look for trail-note there. This component import leaves off the .jsx extension.",
    },
    {
      id: "child",
      label: "./examples/ \u2014 a subfolder",
      from: "src/app/nextjs/file-paths/demo.jsx",
      code: 'import { PathCard } from "./examples/path-card";',
      target: "src/app/nextjs/file-paths/examples/path-card.jsx",
      meaning:
        "Start in the same folder, enter examples, then find path-card.jsx.",
    },
    {
      id: "parent",
      label: "../ \u2014 one folder up",
      from: "src/app/nextjs/file-paths/examples/path-card.jsx",
      code: 'import { TrailNote } from "../trail-note";',
      target: "src/app/nextjs/file-paths/trail-note.jsx",
      meaning:
        "Start in examples, go up one folder to file-paths, then find trail-note.jsx. Each extra ../ goes up one more folder.",
    },
    {
      id: "alias",
      label: "@/ \u2014 the configured src shortcut",
      from: "src/app/nextjs/file-paths/demo.jsx",
      code: 'import { Button } from "@/components/ui/button";',
      target: "src/components/ui/button.tsx",
      meaning:
        "In this project, @/ means src/. Start there instead of counting folders from the importing file. This shortcut is configured in tsconfig.json; it is not built-in JavaScript syntax.",
    },
    {
      id: "package",
      label: "react \u2014 an installed package",
      from: "src/app/nextjs/file-paths/demo.jsx",
      code: 'import { useState } from "react";',
      target: "Installed package: react",
      meaning:
        "react is a package name, not a relative project path. pnpm installs the package. The import uses the package\u2019s public entry point.",
    },
    {
      id: "scope",
      label: "@base-ui/react \u2014 a scoped package",
      from: "src/components/ui/button.tsx",
      code: 'import { Button as ButtonPrimitive } from "@base-ui/react/button";',
      target: "Installed package: @base-ui/react, button entry",
      meaning:
        "Here @base-ui is the package scope, react is the package name, and /button selects its entry point. There is no @/ prefix. This is different from the project\u2019s src shortcut.",
    },
    {
      id: "route",
      label: "/nextjs/pages \u2014 a browser route",
      from: "src/app/nextjs/file-paths/demo.jsx",
      code: '<Link href="/nextjs/pages">Open pages lesson</Link>',
      target: "Browser URL: /nextjs/pages",
      meaning:
        "The leading / starts at this site\u2019s root. Next.js serves this URL from src/app/nextjs/pages/page.jsx. An href is a URL, not a source import. Do not put @/app or page.jsx in it.",
    },
    {
      id: "asset",
      label: "/landscape.svg \u2014 a public asset URL",
      from: "src/app/nextjs/file-paths/demo.jsx",
      code: '<Image src="/landscape.svg" alt="Illustrated mountains and a sun"\n  width={320} height={180} />',
      target: "Source file: public/landscape.svg",
      meaning:
        "The browser requests this file from the site root. Keep the .svg extension in its URL, but leave out public. The @/ import shortcut does not apply to this src URL.",
    },
  ];
  const example = examples.find(function findExample(item) {
    return item.id === selected;
  });
  function showAliasMessage() {
    setMessage(
      "The Button imported through @/ works. Its file is src/components/ui/button.tsx.",
    );
  }
  return (
    <div className="space-y-6">
      <section className="min-w-0 space-y-5 rounded-xl border p-6">
        <h2 className="text-2xl font-semibold">Trace one path at a time</h2>
        <p>
          A path tells a tool where to find something. First ask: is this an
          import for your code, or a URL for the browser?
        </p>
        <label className="block space-y-2">
          <span>Choose a path example</span>
          <select
            value={selected}
            onChange={function chooseExample(event) {
              setSelected(event.target.value);
            }}
            className="block w-full rounded border bg-background p-2"
          >
            {examples.map(function showOption(item) {
              return (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </label>
        <div className="space-y-4 rounded-xl bg-muted/40 p-5" role="status">
          <div>
            <h3 className="text-sm font-semibold">Written in this file</h3>
            <p className="mt-1 font-mono text-sm break-all">{example.from}</p>
          </div>
          <pre
            tabIndex={0}
            className="overflow-auto rounded-xl bg-slate-950 p-4 text-sm leading-7 text-slate-100"
          >
            <code>{example.code}</code>
          </pre>
          <div>
            <h3 className="text-sm font-semibold">Where it leads</h3>
            <p
              data-testid="path-target"
              className="mt-1 font-mono text-sm break-all"
            >
              {example.target}
            </p>
          </div>
          <p className="leading-7">{example.meaning}</p>
        </div>
        <p className="text-sm leading-6 text-muted-foreground">
          The selector compares existing examples. It does not rewrite the
          imports. Open Code to see the imports that make this demo work.
        </p>
      </section>
      <section
        className="space-y-4 rounded-xl border p-6"
        aria-labelledby="import-braces-title"
      >
        <h2 id="import-braces-title" className="text-2xl font-semibold">
          When do imports need braces?
        </h2>
        <p className="leading-7">
          Check the export in the source file. A named export uses braces in its
          import. A default export uses no braces. This rule is the same for ./,
          ../, @/, and package imports.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              '// Named export: use braces and the exported name.\nimport { TrailNote } from "./trail-note";\n\n// Default export: no braces.\nimport Link from "next/link";\n\n// A default import can use a different local name.\nimport NextLink from "next/link";'
            }
          </code>
        </pre>
        <p className="text-sm leading-7 text-muted-foreground">
          A file can have several named exports and one default export. You can
          rename a named import with as, such as{" "}
          {'import { TrailNote as Note } from "./trail-note";'}. Open
          Explanation to see both export and import code.
        </p>
      </section>
      <section className="space-y-5 rounded-xl border p-6">
        <h2 className="text-2xl font-semibold">These imports really work</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-3 rounded-xl bg-muted/40 p-5">
            <h3 className="font-semibold">Same-folder import</h3>
            <code className="text-sm">./trail-note</code>
            <TrailNote />
          </div>
          <PathCard />
        </div>
        <Button onClick={showAliasMessage}>Try alias import</Button>
        <p role="status" className="text-sm leading-6">
          {message}
        </p>
      </section>
      <section className="space-y-4 rounded-xl border p-6">
        <h2 className="text-2xl font-semibold">
          Browser URLs use a different root
        </h2>
        <figure className="max-w-sm space-y-2">
          <Image
            src="/landscape.svg"
            alt="Illustrated mountains and a sun"
            width={320}
            height={180}
            className="h-auto w-full rounded-xl"
          />
          <figcaption className="text-sm">
            File: public/landscape.svg. Browser URL: /landscape.svg.
          </figcaption>
        </figure>
        <Link
          href="/nextjs/pages"
          className="inline-block underline underline-offset-4"
        >
          Open pages lesson
        </Link>
      </section>
    </div>
  );
}

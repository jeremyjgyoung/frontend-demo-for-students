import Link from "next/link";
export const metadata = { title: "Pages and navigation" };
export default function Page() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl space-y-8 px-5 py-10">
      <Link className="text-sm underline" href="/reference">
        All reference pages
      </Link>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Pages and navigation</h1>
        <p className="leading-7 text-muted-foreground">
          Small examples for page folders, links, active navigation, titles, and
          icons.
        </p>
      </header>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Create a page</h2>
        <p className="leading-7 text-muted-foreground">
          A folder inside src/app becomes a URL when it contains page.jsx. Pages
          and layouts use default exports because Next.js requires them.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              "// src/app/about/page.jsx\nexport default function Page() {\n  return <h1>About our club</h1>;\n}"
            }
          </code>
        </pre>
      </section>
      <section className="min-w-0 space-y-4 rounded-xl border p-6">
        <h2 className="text-xl font-semibold">
          When do I need <code>{'"use client"'}</code>?
        </h2>
        <p className="max-w-3xl leading-7 text-muted-foreground">
          Pages and layouts are Server Components by default. Add{" "}
          <code>{'"use client";'}</code> at the top of an interactive component
          file, before the imports. This lets it use state such as{" "}
          <code>useState</code>, effects such as <code>useEffect</code>, and
          event handlers such as <code>onClick</code> in the browser.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>{`"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Counter() {
  const [count, setCount] = useState(0);

  function addOne() {
    setCount(count + 1);
  }

  return <Button onClick={addOne}>Count: {count}</Button>;
}`}</code>
        </pre>
        <p className="max-w-3xl leading-7 text-muted-foreground">
          Keep the page as a Server Component and import this counter into it.
          You do not need the directive in every file: components imported by a
          Client Component join its client code. Client Components can still
          receive an initial HTML preview from the server. Use browser-only
          values such as <code>window</code> inside an event handler or effect.
          Keep page <code>metadata</code> in a Server Component.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Make a button-style link</h2>
        <p className="leading-7 text-muted-foreground">
          Use a link for navigation. Apply buttonVariants to the link rather
          than nesting a button inside it.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              'import Link from "next/link";\nimport { buttonVariants } from "@/components/ui/button";\n\n<Link href="/images" className={buttonVariants({ variant: "outline" })}>\n  Explore images\n</Link>'
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Highlight a section</h2>
        <p className="leading-7 text-muted-foreground">
          Read the path in a Client Component. Test Home with an exact match.
          Include a slash when testing child routes.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              'const pathname = usePathname();\nconst active = pathname === "/images"\n  || pathname.startsWith("/images/");'
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Set the title and favicon</h2>
        <p className="leading-7 text-muted-foreground">
          Export metadata from a server page. Replace src/app/icon.svg to change
          the browser icon. The heading inside the page is separate from the tab
          title.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              'export const metadata = { title: "Image examples" };\n// Default metadata: src/app/layout.jsx\n// Site icon: src/app/icon.svg'
            }
          </code>
        </pre>
      </section>
    </main>
  );
}

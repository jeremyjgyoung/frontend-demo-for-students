import Link from "next/link";
export const metadata = { title: "Before publishing" };
export default function Page() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl space-y-8 px-5 py-10">
      <Link className="text-sm underline" href="/reference">
        All reference pages
      </Link>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Before publishing</h1>
        <p className="leading-7 text-muted-foreground">
          A short check for usefulness, accessibility, and loading.
        </p>
      </header>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Use the page</h2>
        <p className="leading-7 text-muted-foreground">
          Try real tasks with a keyboard. Check visible focus, names, labels,
          contrast, zoom, and small screens. Respect reduced motion.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              "// Tab \u2192 Enter or Space \u2192 Escape\n// Try 200% zoom and a narrow screen."
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Check images and loading</h2>
        <p className="leading-7 text-muted-foreground">
          Reserve image space. Use appropriate sizes. Keep heavy optional
          features out of pages that do not need them.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              '<Image src="/landscape.svg" alt="Mountains"\n  width={960} height={540} className="h-auto w-full" />'
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Check the page identity</h2>
        <p className="leading-7 text-muted-foreground">
          Give pages useful titles and descriptions. Check the icon, headings,
          links, and unknown-page response. A title is useful for browser tabs
          as well as search.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              'export const metadata = {\n  title: "Adventure Club",\n  description: "Find a school activity and see when to join.",\n};'
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Measure, then improve</h2>
        <p className="leading-7 text-muted-foreground">
          Run Lighthouse and inspect actual network requests. An automated score
          does not prove that the site is accessible. Fix one useful problem and
          test again.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>{"// Observe \u2192 change one thing \u2192 check again"}</code>
        </pre>
      </section>
    </main>
  );
}

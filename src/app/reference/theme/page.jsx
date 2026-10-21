import Link from "next/link";
export const metadata = { title: "Theme and style guide" };
export default function Page() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl space-y-8 px-5 py-10">
      <Link className="text-sm underline" href="/reference">
        All reference pages
      </Link>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Theme and style guide</h1>
        <p className="leading-7 text-muted-foreground">
          Record a small set of shared choices and show them in use.
        </p>
      </header>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Theme tokens</h2>
        <p className="leading-7 text-muted-foreground">
          The root variables define values. Tailwind maps them to utilities. Use
          semantic names such as primary or border rather than treating every
          color as a separate rule.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              "@theme inline {\n  --color-primary: var(--primary);\n}\n:root { --primary: #1d4ed8; }"
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dark mode</h2>
        <p className="leading-7 text-muted-foreground">
          Define readable foreground and background pairs. Test the whole
          interface instead of only inverting the background.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {".dark {\n  --background: #0f172a;\n  --foreground: #f8fafc;\n}"}
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">A small guide</h2>
        <p className="leading-7 text-muted-foreground">
          Include the reason for each choice. Show actual text and controls as
          examples.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              "// 1. Brand words and audience\n// 2. Type sizes and line spacing\n// 3. Color roles and contrast\n// 4. Spacing and corners\n// 5. Component examples\n// 6. Image direction and writing style"
            }
          </code>
        </pre>
      </section>
    </main>
  );
}

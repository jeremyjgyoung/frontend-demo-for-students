import Link from "next/link";
export const metadata = { title: "Design and brand vocabulary" };
export default function Page() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl space-y-8 px-5 py-10">
      <Link className="text-sm underline" href="/reference">
        All reference pages
      </Link>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Design and brand vocabulary</h1>
        <p className="leading-7 text-muted-foreground">
          Describe what you see and explain why it helps.
        </p>
      </header>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Hierarchy and contrast</h2>
        <p className="leading-7 text-muted-foreground">
          Hierarchy is the order in which information draws attention. Contrast
          is a visible difference in color, size, weight, or shape. Use both to
          support the task.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              "// Main title: strong emphasis\n// Supporting details: quieter emphasis\n// Main action: easy to find"
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Alignment and proximity</h2>
        <p className="leading-7 text-muted-foreground">
          Alignment gives elements a shared edge or line. Proximity means
          related things sit near each other. Both can explain groups without
          extra borders.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {'<div className="space-y-2">Title and related details</div>'}
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Editorial, playful, calm, and technical
        </h2>
        <p className="leading-7 text-muted-foreground">
          These are starting words, not strict rules. Editorial might use strong
          type and simple rules. Playful might use lively shapes. Calm might use
          generous space. Technical might use precise alignment and data labels.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              "// Pick three words.\n// Translate each word into visible decisions.\n// Check that those decisions still support the user task."
            }
          </code>
        </pre>
      </section>
    </main>
  );
}

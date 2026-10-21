import Link from "next/link";
export const metadata = { title: "Changing styles" };
export default function Page() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl space-y-8 px-5 py-10">
      <Link className="text-sm underline" href="/reference">
        All reference pages
      </Link>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Changing styles</h1>
        <p className="leading-7 text-muted-foreground">
          Use state for the choice, then render the matching appearance.
        </p>
      </header>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Conditional classes</h2>
        <p className="leading-7 text-muted-foreground">
          Keep full class names in the source so Tailwind can discover them.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              'className={selected\n  ? "border-blue-600 bg-blue-50 text-blue-950"\n  : "border-border bg-background text-foreground"}'
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Numeric styles</h2>
        <p className="leading-7 text-muted-foreground">
          Use an inline value when a control can produce many exact numbers.
          React style property names use camelCase.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              'const [radius, setRadius] = useState(16);\n<div style={{ borderRadius: radius + "px" }}>Card</div>'
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Component variants</h2>
        <p className="leading-7 text-muted-foreground">
          Use a component variant when the appearance is part of its shared API.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {'<Button variant="outline" size="sm">View details</Button>'}
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Avoid partial class names</h2>
        <p className="leading-7 text-muted-foreground">
          Do not construct only part of a utility class. Write the complete
          class strings and select between them.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              'const colors = {\n  blue: "bg-blue-700 text-white",\n  green: "bg-emerald-700 text-white",\n};\n<div className={colors[color]}>Status</div>'
            }
          </code>
        </pre>
      </section>
    </main>
  );
}

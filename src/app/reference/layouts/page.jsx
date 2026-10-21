import Link from "next/link";
export const metadata = { title: "Layout recipes" };
export default function Page() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl space-y-8 px-5 py-10">
      <Link className="text-sm underline" href="/reference">
        All reference pages
      </Link>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Layout recipes</h1>
        <p className="leading-7 text-muted-foreground">
          Keep a few small layout patterns nearby.
        </p>
      </header>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Centered content</h2>
        <p className="leading-7 text-muted-foreground">
          The width can shrink on a phone. Padding keeps the content away from
          the screen edges.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {'<div className="mx-auto max-w-5xl px-5 py-8">Content</div>'}
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Responsive grid</h2>
        <p className="leading-7 text-muted-foreground">
          Start with one column. Add more columns when there is room.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              '<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">\n  <article>First card</article>\n  <article>Second card</article>\n  <article>Third card</article>\n</div>'
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sidebar and content</h2>
        <p className="leading-7 text-muted-foreground">
          min-w-0 lets the main content shrink inside the grid. Wide code or
          tables should scroll inside their own container.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              '<div className="grid gap-6 md:grid-cols-[14rem_1fr]">\n  <aside>Section navigation</aside>\n  <main className="min-w-0">Page content</main>\n</div>'
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Wrapping actions</h2>
        <p className="leading-7 text-muted-foreground">
          Do not force every action to fit on one line.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              '<div className="flex flex-wrap gap-3">\n  <Button>Join</Button>\n  <Button variant="outline">View details</Button>\n</div>'
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Split hero</h2>
        <p className="leading-7 text-muted-foreground">
          Use one column first. Add a second column for the words and visual
          when there is room.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              '<section className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">\n  <div>Heading, description, and link</div>\n  <div>Visual</div>\n</section>'
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Article and sticky contents</h2>
        <p className="leading-7 text-muted-foreground">
          Keep the article readable. Only make a short supporting column sticky
          when it can fit on screen.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              '<div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_11rem]">\n  <article className="min-w-0 max-w-prose leading-7">Article</article>\n  <aside className="self-start md:sticky md:top-6">Contents</aside>\n</div>'
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Full-height page and footer</h2>
        <p className="leading-7 text-muted-foreground">
          Use a minimum height so longer content can grow. flex-1 gives the
          middle area spare space.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              '<div className="flex min-h-dvh flex-col">\n  <header>Header</header>\n  <main className="flex-1">Page content</main>\n  <footer>Footer</footer>\n</div>'
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Container-based previews</h2>
        <p className="leading-7 text-muted-foreground">
          @container checks the space inside a box. @2xl: adds columns at 36rem
          of container width. md: checks the browser width instead.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              '<div className="@container">\n  <div className="grid gap-4 @2xl:grid-cols-2">\n    <article>First</article>\n    <article>Second</article>\n  </div>\n</div>'
            }
          </code>
        </pre>
      </section>
      <Link href="/layouts/patterns" className="inline-block underline">
        Explore the working layout examples
      </Link>
    </main>
  );
}

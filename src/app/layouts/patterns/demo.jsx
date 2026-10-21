import Link from "next/link";

// These small diagrams show the structure. The linked demos contain full examples.
export function LessonDemo() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border bg-muted/30 p-5">
        <h2 className="text-xl font-semibold">
          Start with what the page must do
        </h2>
        <p className="mt-3 max-w-prose leading-7">
          A layout is the arrangement of the parts on a page. Choose a pattern
          that makes the main task easy to find. You can combine patterns on one
          page.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <article className="flex flex-col overflow-hidden rounded-xl border">
          <div
            aria-hidden="true"
            className="grid h-32 grid-cols-2 gap-3 border-b bg-violet-50 p-5"
          >
            <div className="space-y-2">
              <div className="h-3 w-3/4 rounded bg-violet-400" />
              <div className="h-2 rounded bg-violet-200" />
              <div className="h-2 w-2/3 rounded bg-violet-200" />
              <div className="mt-4 h-5 w-14 rounded bg-violet-500" />
            </div>
            <div className="rounded bg-amber-200" />
          </div>
          <div className="flex flex-1 flex-col items-start gap-3 p-5">
            <h2 className="text-lg font-semibold">Split hero</h2>
            <p className="flex-1 text-sm leading-6 text-muted-foreground">
              Introduce a product, club, or event. Give the main message and
              visual their own columns.
            </p>
            <Link
              href="/layouts/landing"
              className="rounded text-sm font-semibold underline underline-offset-4"
            >
              Try split hero
            </Link>
          </div>
        </article>
        <article className="flex flex-col overflow-hidden rounded-xl border">
          <div
            aria-hidden="true"
            className="grid h-32 grid-cols-3 gap-2 border-b bg-violet-50 p-5"
          >
            <div className="rounded border border-violet-300 bg-white p-2">
              <div className="h-6 w-6 rounded bg-violet-200" />
              <div className="mt-3 h-2 rounded bg-violet-300" />
            </div>
            <div className="rounded border border-violet-300 bg-white p-2">
              <div className="h-6 w-6 rounded bg-violet-200" />
              <div className="mt-3 h-2 rounded bg-violet-300" />
            </div>
            <div className="rounded border border-violet-300 bg-white p-2">
              <div className="h-6 w-6 rounded bg-violet-200" />
              <div className="mt-3 h-2 rounded bg-violet-300" />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-3 p-5">
            <h2 className="text-lg font-semibold">Feature or card grid</h2>
            <p className="flex-1 text-sm leading-6 text-muted-foreground">
              Show related choices, benefits, or projects. Use equal columns and
              repeat a clear card structure.
            </p>
            <Link
              href="/layouts/landing"
              className="rounded text-sm font-semibold underline underline-offset-4"
            >
              Try feature or card grid
            </Link>
          </div>
        </article>
        <article className="flex flex-col overflow-hidden rounded-xl border">
          <div
            aria-hidden="true"
            className="grid h-32 grid-cols-[3rem_1fr] gap-3 border-b bg-violet-50 p-5"
          >
            <div className="space-y-2 rounded bg-violet-200 p-2">
              <div className="h-2 rounded bg-violet-500" />
              <div className="h-2 rounded bg-violet-400" />
              <div className="h-2 rounded bg-violet-400" />
            </div>
            <div className="rounded bg-white p-3">
              <div className="h-3 w-2/3 rounded bg-violet-300" />
              <div className="mt-4 h-7 rounded bg-slate-100" />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-3 p-5">
            <h2 className="text-lg font-semibold">Sidebar and content</h2>
            <p className="flex-1 text-sm leading-6 text-muted-foreground">
              Keep navigation beside a work area. Stack the sidebar above the
              content when space is limited.
            </p>
            <Link
              href="/layouts/dashboard"
              className="rounded text-sm font-semibold underline underline-offset-4"
            >
              Try sidebar and content
            </Link>
          </div>
        </article>
        <article className="flex flex-col overflow-hidden rounded-xl border">
          <div
            aria-hidden="true"
            className="flex h-32 flex-col gap-3 border-b bg-violet-50 p-5"
          >
            <div className="grid grid-cols-3 gap-2">
              <div className="h-8 rounded bg-violet-200" />
              <div className="h-8 rounded bg-violet-300" />
              <div className="h-8 rounded bg-violet-200" />
            </div>
            <div className="flex-1 space-y-2 rounded bg-white p-2">
              <div className="h-2 rounded bg-slate-200" />
              <div className="h-2 rounded bg-slate-200" />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-3 p-5">
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <p className="flex-1 text-sm leading-6 text-muted-foreground">
              Put summary values above a detailed work list. Group information
              that helps a person make a decision.
            </p>
            <Link
              href="/layouts/dashboard"
              className="rounded text-sm font-semibold underline underline-offset-4"
            >
              Try dashboard
            </Link>
          </div>
        </article>
        <article className="flex flex-col overflow-hidden rounded-xl border">
          <div
            aria-hidden="true"
            className="grid h-32 grid-cols-[1fr_3rem] gap-4 border-b bg-violet-50 p-5"
          >
            <div className="space-y-2 rounded bg-white p-2">
              <div className="h-3 w-3/4 rounded bg-violet-400" />
              <div className="h-2 rounded bg-slate-200" />
              <div className="h-2 rounded bg-slate-200" />
              <div className="h-2 w-2/3 rounded bg-slate-200" />
            </div>
            <div className="space-y-2 rounded bg-violet-200 p-2">
              <div className="h-2 rounded bg-violet-400" />
              <div className="h-2 rounded bg-violet-400" />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-3 p-5">
            <h2 className="text-lg font-semibold">Article and contents</h2>
            <p className="flex-1 text-sm leading-6 text-muted-foreground">
              Use a narrow reading column for a guide or news story. Add
              supporting links beside the text.
            </p>
            <Link
              href="/layouts/articles"
              className="rounded text-sm font-semibold underline underline-offset-4"
            >
              Try article and contents
            </Link>
          </div>
        </article>
        <article className="flex flex-col overflow-hidden rounded-xl border">
          <div
            aria-hidden="true"
            className="grid h-32 grid-cols-[4rem_1fr] gap-2 border-b bg-violet-50 p-5"
          >
            <div className="space-y-2 rounded bg-white p-2">
              <div className="h-4 rounded bg-violet-500" />
              <div className="h-4 rounded bg-violet-200" />
              <div className="h-4 rounded bg-violet-200" />
            </div>
            <div className="rounded bg-white p-3">
              <div className="h-3 w-2/3 rounded bg-violet-400" />
              <div className="mt-3 h-2 rounded bg-slate-200" />
              <div className="mt-2 h-2 rounded bg-slate-200" />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-3 p-5">
            <h2 className="text-lg font-semibold">List and detail</h2>
            <p className="flex-1 text-sm leading-6 text-muted-foreground">
              Let a person select an item and inspect it in the next panel.
              Useful for messages, files, or projects.
            </p>
            <Link
              href="/layouts/app-shell"
              className="rounded text-sm font-semibold underline underline-offset-4"
            >
              Try list and detail
            </Link>
          </div>
        </article>
        <article className="flex flex-col overflow-hidden rounded-xl border">
          <div
            aria-hidden="true"
            className="flex h-32 flex-col gap-2 border-b bg-violet-50 p-5"
          >
            <div className="h-4 rounded bg-violet-400" />
            <div className="flex-1 rounded bg-white" />
            <div className="h-3 rounded bg-violet-200" />
          </div>
          <div className="flex flex-1 flex-col items-start gap-3 p-5">
            <h2 className="text-lg font-semibold">Header, content, footer</h2>
            <p className="flex-1 text-sm leading-6 text-muted-foreground">
              Give the middle area spare space. Keep the footer after the
              content, even on a short page.
            </p>
            <Link
              href="/layouts/app-shell"
              className="rounded text-sm font-semibold underline underline-offset-4"
            >
              Try header, content, footer
            </Link>
          </div>
        </article>
        <article className="flex flex-col overflow-hidden rounded-xl border">
          <div
            aria-hidden="true"
            className="flex h-32 justify-center border-b bg-violet-50 p-5"
          >
            <div className="w-2/3 space-y-2 rounded bg-white p-3">
              <div className="h-3 rounded bg-violet-400" />
              <div className="h-2 rounded bg-slate-200" />
              <div className="h-2 rounded bg-slate-200" />
              <div className="h-2 w-3/4 rounded bg-slate-200" />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-3 p-5">
            <h2 className="text-lg font-semibold">Centered reading column</h2>
            <p className="flex-1 text-sm leading-6 text-muted-foreground">
              Use one limited-width column for a simple announcement or article.
              Not every page needs a sidebar.
            </p>
            <Link
              href="/layouts/spacing"
              className="rounded text-sm font-semibold underline underline-offset-4"
            >
              Try centered reading column
            </Link>
          </div>
        </article>
      </div>
      <p className="text-sm leading-6 text-muted-foreground">
        The diagrams show the wide view. Open a demo and use its Narrow control
        to see how the parts stack. These examples use local sample content.
      </p>
    </div>
  );
}

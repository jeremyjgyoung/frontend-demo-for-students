import Link from "next/link";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
import { lesson } from "./lesson";
export const metadata = { title: "Why pages use default exports" };
export default async function Layout({ children }) {
  const sources = await demoSources(
    "app/basics/page-exports/demo.jsx",
    "app/basics/page-exports/page.jsx",
    "app/basics/page-exports/example/page.jsx",
    "app/basics/page-exports/club-note.jsx",
    "app/basics/page-exports/layout.jsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <section
        aria-label="Page export example"
        className="overflow-hidden rounded-2xl border"
      >
        <header className="flex flex-wrap items-center justify-between gap-4 border-b bg-muted/30 p-5">
          <p className="font-semibold">One page component, two entry points</p>
          <nav
            aria-label="Export example views"
            className="flex flex-wrap gap-4 text-sm"
          >
            <Link
              href="/basics/page-exports"
              scroll={false}
              className="underline underline-offset-4"
            >
              Imported view
            </Link>
            <Link
              href="/basics/page-exports/example"
              scroll={false}
              className="underline underline-offset-4"
            >
              Route view
            </Link>
          </nav>
        </header>
        <div className="p-5">{children}</div>
      </section>
    </LessonFrame>
  );
}

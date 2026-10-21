import Link from "next/link";
import { Compass } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function LessonDemo({ children }) {
  return (
    <section
      aria-label="Adventure Club example app"
      className="overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-muted/50 px-5 py-3 text-xs text-muted-foreground">
        <span className="font-medium tracking-wider uppercase">
          Example app
        </span>
        <span>Three real Next.js pages</span>
      </div>
      <header className="flex flex-wrap items-center justify-between gap-5 border-b px-5 py-5 sm:px-7">
        <Link
          href="/nextjs/pages"
          scroll={false}
          className="flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <Compass
            className="size-6 text-blue-700 dark:text-blue-300"
            aria-hidden="true"
          />
          Adventure Club
        </Link>
        <nav
          aria-label="Club pages"
          className="flex flex-wrap items-center gap-4 text-sm"
        >
          <Link
            href="/nextjs/pages"
            scroll={false}
            className="underline-offset-4 hover:underline"
          >
            Home
          </Link>
          <Link
            href="/nextjs/pages/about"
            scroll={false}
            className="underline-offset-4 hover:underline"
          >
            About this club
          </Link>
          {/* Style the anchor itself. It keeps normal link behavior. */}
          <Link
            href="/nextjs/pages/contact"
            scroll={false}
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            Contact the club
          </Link>
        </nav>
      </header>
      {/* Next.js changes this content. The app header and lesson tabs stay in place. */}
      <div className="min-h-80 p-5 sm:p-7">{children}</div>
      <footer className="flex flex-wrap items-center justify-between gap-3 border-t bg-muted/30 px-5 py-4 text-xs text-muted-foreground sm:px-7">
        <p>Adventure Club · An example school club</p>
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          Next.js documentation (new tab)
        </a>
      </footer>
    </section>
  );
}

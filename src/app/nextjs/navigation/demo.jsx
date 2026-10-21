"use client";
import { useState } from "react";
import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LessonDemo({ children }) {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen(!open);
  }
  function closeMenu() {
    setOpen(false);
  }

  return (
    <section
      aria-label="Responsive club example app"
      className="overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm"
    >
      <div className="flex flex-wrap justify-between gap-2 border-b bg-muted/50 px-5 py-3 text-xs text-muted-foreground">
        <span className="font-medium tracking-wider uppercase">
          Example app
        </span>
        <span>Try a narrow screen</span>
      </div>
      <header className="flex flex-wrap items-center justify-between gap-4 border-b p-5 sm:px-7">
        <Link
          href="/nextjs/navigation"
          scroll={false}
          onClick={closeMenu}
          className="flex items-center gap-2.5 font-semibold"
        >
          <Compass
            aria-hidden="true"
            className="size-6 text-blue-700 dark:text-blue-300"
          />
          Adventure Club
        </Link>
        <Button
          variant="outline"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="club-links"
          onClick={toggleMenu}
        >
          Menu
        </Button>
        {/* One set of real links serves both layouts. A click closes the small-screen menu. */}
        <nav
          id="club-links"
          aria-label="Club navigation"
          className={
            open
              ? "flex w-full flex-col gap-2 md:w-auto md:flex-row"
              : "hidden w-full gap-2 md:flex md:w-auto"
          }
        >
          <Link
            href="/nextjs/navigation"
            scroll={false}
            onClick={closeMenu}
            className="rounded-md px-3 py-2 text-sm hover:bg-muted"
          >
            Home
          </Link>
          <Link
            href="/nextjs/navigation/about"
            scroll={false}
            onClick={closeMenu}
            className="rounded-md px-3 py-2 text-sm hover:bg-muted"
          >
            About
          </Link>
          <Link
            href="/nextjs/navigation/contact"
            scroll={false}
            onClick={closeMenu}
            className="rounded-md px-3 py-2 text-sm hover:bg-muted"
          >
            Contact
          </Link>
        </nav>
      </header>
      <div className="min-h-72 p-5 sm:p-7">{children}</div>
      <footer className="border-t bg-muted/30 px-5 py-4 text-xs text-muted-foreground sm:px-7">
        Adventure Club · One shared header for all three pages
      </footer>
    </section>
  );
}

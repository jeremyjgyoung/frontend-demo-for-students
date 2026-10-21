"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PanelsTopLeft } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { topics } from "@/app/_lib/catalog";
export function DemoNavbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-[96rem] px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 py-3">
          <Link
            href="/"
            className="flex items-center gap-3 font-semibold tracking-tight"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-blue-700 text-white">
              <PanelsTopLeft className="size-5" aria-hidden="true" />
            </span>
            Front End Demos
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/reference/components"
              aria-current={
                pathname === "/reference/components" ? "page" : undefined
              }
              className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-200 dark:hover:bg-blue-900"
            >
              Component Reference
            </Link>
            <ThemeToggle />
          </div>
        </div>
        <nav
          aria-label="Demo topics"
          className="flex gap-1 overflow-x-auto pb-3"
        >
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={
              pathname === "/"
                ? "rounded-md bg-muted px-3 py-2 text-sm font-semibold whitespace-nowrap"
                : "rounded-md px-3 py-2 text-sm whitespace-nowrap hover:bg-muted"
            }
          >
            All demos
          </Link>
          {topics.map(function renderTopic(topic) {
            const active =
              pathname === topic.href || pathname.startsWith(topic.href + "/");
            return (
              <Link
                key={topic.id}
                href={topic.href}
                aria-current={pathname === topic.href ? "page" : undefined}
                className={
                  active
                    ? "rounded-md bg-muted px-3 py-2 text-sm font-semibold whitespace-nowrap"
                    : "rounded-md px-3 py-2 text-sm whitespace-nowrap text-muted-foreground hover:bg-muted hover:text-foreground"
                }
              >
                {topic.nav}
              </Link>
            );
          })}
          <Link
            href="/reference"
            className={
              pathname.startsWith("/reference")
                ? "rounded-md bg-muted px-3 py-2 text-sm font-semibold"
                : "rounded-md px-3 py-2 text-sm hover:bg-muted"
            }
          >
            Reference
          </Link>
        </nav>
      </div>
    </header>
  );
}

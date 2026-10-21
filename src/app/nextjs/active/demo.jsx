"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass } from "lucide-react";

export function LessonDemo({ children }) {
  const pathname = usePathname();
  const links = [
    { href: "/nextjs/active", title: "Home" },
    { href: "/nextjs/active/activities", title: "Activities" },
    { href: "/nextjs/active/saved", title: "Saved" },
  ];
  const inActivities =
    pathname === "/nextjs/active/activities" ||
    pathname.startsWith("/nextjs/active/activities/");
  const onWalk = pathname === "/nextjs/active/activities/walk";
  const onSaved = pathname === "/nextjs/active/saved";

  return (
    <section
      aria-label="Active links example app"
      className="overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm"
    >
      <div className="flex flex-wrap justify-between gap-2 border-b bg-muted/50 px-5 py-3 text-xs text-muted-foreground">
        <span className="font-medium tracking-wider uppercase">
          Example app
        </span>
        <span>Real routes and active links</span>
      </div>
      <header className="flex flex-wrap items-center justify-between gap-4 border-b p-5 sm:px-7">
        <Link
          href="/nextjs/active"
          scroll={false}
          className="flex items-center gap-2.5 font-semibold"
        >
          <Compass
            aria-hidden="true"
            className="size-6 text-blue-700 dark:text-blue-300"
          />
          Adventure Club
        </Link>
        <nav aria-label="Active link example" className="flex flex-wrap gap-1">
          {links.map(function renderLink(link) {
            // Home needs an exact match. Other sections also match their child pages.
            const active =
              link.href === "/nextjs/active"
                ? pathname === link.href
                : pathname === link.href ||
                  pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                scroll={false}
                aria-current={pathname === link.href ? "page" : undefined}
                className={
                  active
                    ? "rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white"
                    : "rounded-md px-3 py-2 text-sm hover:bg-muted"
                }
              >
                {link.title}
              </Link>
            );
          })}
        </nav>
      </header>
      <div className="space-y-6 p-5 sm:p-7">
        <nav aria-label="Club breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <li>
              {pathname === "/nextjs/active" ? (
                <span aria-current="page">Home</span>
              ) : (
                <Link
                  href="/nextjs/active"
                  scroll={false}
                  className="underline underline-offset-4"
                >
                  Home
                </Link>
              )}
            </li>
            {inActivities && (
              <>
                <li aria-hidden="true">/</li>
                <li>
                  {onWalk ? (
                    <Link
                      href="/nextjs/active/activities"
                      scroll={false}
                      className="underline underline-offset-4"
                    >
                      Activities
                    </Link>
                  ) : (
                    <span aria-current="page">Activities</span>
                  )}
                </li>
              </>
            )}
            {onWalk && (
              <>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Trail walk</li>
              </>
            )}
            {onSaved && (
              <>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Saved</li>
              </>
            )}
          </ol>
        </nav>
        <div className="min-h-60">{children}</div>
      </div>
      <footer className="border-t bg-muted/30 px-5 py-4 text-xs text-muted-foreground sm:px-7">
        <span className="font-medium">Current path:</span>{" "}
        <code className="break-all">{pathname}</code>
      </footer>
    </section>
  );
}

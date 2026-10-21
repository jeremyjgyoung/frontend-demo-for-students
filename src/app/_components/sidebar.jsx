"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function LessonSidebar({ topic }) {
  const pathname = usePathname();
  const links = (
    <nav aria-label={topic.title + " lessons"} className="space-y-1">
      {topic.items.map(function renderLesson(item) {
        // Child practice pages still belong to this lesson.
        const active =
          pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            className={
              active
                ? "block rounded-md bg-muted px-3 py-2 text-sm leading-6 font-semibold"
                : "block rounded-md px-3 py-2 text-sm leading-6 text-muted-foreground hover:bg-muted hover:text-foreground"
            }
          >
            {item.title}
          </Link>
        );
      })}
      <Link
        href="/reference"
        className="mt-4 block rounded-md px-3 py-2 text-sm underline"
      >
        Open reference
      </Link>
    </nav>
  );
  return (
    <aside className="min-w-0">
      <div className="sticky top-36 hidden space-y-4 lg:block">
        <p className="px-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Explore
        </p>
        {links}
      </div>
      <details className="rounded-xl border p-4 lg:hidden">
        <summary className="cursor-pointer font-semibold">
          Explore {topic.nav}
        </summary>
        <div className="mt-3">{links}</div>
      </details>
    </aside>
  );
}

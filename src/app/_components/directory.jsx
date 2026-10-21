import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function LessonCards({ items }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {items.map(function renderCard(item, index) {
        return (
          <Link
            key={item.href}
            href={item.href}
            className="group flex min-h-48 flex-col rounded-xl border bg-card p-6 transition-colors hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
              Demo {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
              {item.summary}
            </p>
            <span className="mt-5 flex items-center gap-2 text-sm font-medium">
              Try the example{" "}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
export function TopicSection({ topic }) {
  return (
    <section id={topic.id} className="scroll-mt-36 space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            {topic.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
            {topic.summary}
          </p>
        </div>
        <Link
          href={topic.href}
          className="text-sm underline underline-offset-4"
        >
          Explore {topic.nav}
        </Link>
      </div>
      <LessonCards items={topic.items} />
    </section>
  );
}

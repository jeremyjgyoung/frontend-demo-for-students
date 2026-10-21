import Link from "next/link";
import { topics } from "./_lib/catalog";
import { TopicSection } from "./_components/directory";
import { buttonVariants } from "@/components/ui/button";
export default function Page() {
  return (
    <main
      id="main-content"
      className="mx-auto max-w-7xl space-y-16 px-5 py-10 sm:px-8 sm:py-16"
    >
      <header className="max-w-3xl space-y-5">
        <p className="text-xs font-semibold tracking-widest text-blue-700 uppercase dark:text-blue-300">
          Design it. Build it. Explain it.
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Small examples.
          <br />
          Useful front end skills.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
          Build interfaces that look clear and work well. Try short lessons in
          design, Next.js, Tailwind, components, and interaction. Read the
          explanation, then follow the real code.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/basics" className={buttonVariants()}>
            Start with Basics
          </Link>
          <Link
            href="/reference"
            className={buttonVariants({ variant: "outline" })}
          >
            Open reference
          </Link>
          <Link
            href="/reference/components"
            className={buttonVariants({ variant: "outline" })}
          >
            Browse shadcn components
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          Local sample data. Helpful comments. No database account needed.
        </p>
      </header>
      <nav aria-label="Jump to a topic" className="flex flex-wrap gap-2">
        {topics.map(function topicJump(topic) {
          return (
            <a
              key={topic.id}
              href={"#" + topic.id}
              className="rounded-full border px-4 py-2 text-sm hover:bg-muted"
            >
              {topic.nav}
            </a>
          );
        })}
      </nav>
      {topics.map(function renderTopic(topic) {
        return <TopicSection key={topic.id} topic={topic} />;
      })}
    </main>
  );
}

import { topics } from "@/app/_lib/catalog";
import { LessonCards } from "@/app/_components/directory";
export const metadata = { title: "Basics" };
export default function Page() {
  const topic = topics.find(function findTopic(item) {
    return item.id === "basics";
  });
  return (
    <div className="space-y-8">
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Start here
        </p>
        <h1 className="text-3xl font-semibold">Basics</h1>
        <p className="leading-7 text-muted-foreground">{topic.summary}</p>
        <p className="leading-7">
          You do not need to understand the whole project. Get one page working,
          then choose the next lesson when you need it. These are project setup
          and Next.js conventions; you can use the HTML, React, and JavaScript
          you already know.
        </p>
      </header>
      <LessonCards items={topic.items} />
    </div>
  );
}

import { topics } from "@/app/_lib/catalog";
import { LessonCards } from "@/app/_components/directory";
export const metadata = { title: "Complex interfaces" };
export default function Page() {
  const topic = topics.find(function findTopic(item) {
    return item.id === "complex";
  });
  return (
    <div className="space-y-8">
      <header className="max-w-2xl space-y-3">
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Choose an example
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">{topic.title}</h1>
        <p className="leading-7 text-muted-foreground">
          {topic.summary} Try a demo, read the explanation, then inspect its
          code.
        </p>
      </header>
      <LessonCards items={topic.items} />
    </div>
  );
}

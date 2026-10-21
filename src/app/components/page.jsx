import Link from "next/link";
import { topics } from "@/app/_lib/catalog";
import { LessonCards } from "@/app/_components/directory";
export const metadata = { title: "shadcn/ui and Base UI" };
export default function Page() {
  const topic = topics.find(function findTopic(item) {
    return item.id === "components";
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
      <Link
        href="/reference/components"
        className="block rounded-2xl border border-blue-200 bg-blue-50 p-6 text-blue-950 hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-100 dark:hover:bg-blue-900"
      >
        <h2 className="text-xl font-semibold">See every shadcn component</h2>
        <p className="mt-2 leading-7">
          Browse live previews by category, including forms, navigation, and
          dialogs. Open the Component Reference →
        </p>
      </Link>
      <LessonCards items={topic.items} />
    </div>
  );
}

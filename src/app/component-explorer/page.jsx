import Link from "next/link";
import { topics } from "@/app/_lib/catalog";
import { LessonCards } from "@/app/_components/directory";
export const metadata = { title: "Explore shadcn components" };
export default function Page() {
  const topic = topics.find(function findTopic(item) {
    return item.id === "component-explorer";
  });
  return (
    <div className="space-y-8">
      <header className="max-w-3xl space-y-3">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Choose by purpose
        </p>
        <h1 className="text-3xl font-semibold">{topic.title}</h1>
        <p className="leading-7 text-muted-foreground">
          {topic.summary} Each category has a working example, a short
          explanation, and its real code.
        </p>
        <p className="leading-7 text-muted-foreground">
          All components are already included in your template. Import the parts
          you need and add them to your JSX. The examples teach common uses. The
          component links open a usage snippet and the installed source. shadcn
          supplies editable component files. Many interactive parts use Base UI;
          some use other libraries.
        </p>
      </header>
      <Link
        href="/reference/components"
        className="block rounded-2xl border bg-muted/30 p-6 hover:bg-muted"
      >
        <h2 className="text-xl font-semibold">
          See every component at a glance →
        </h2>
        <p className="mt-2 text-sm leading-6">
          Open the visual reference for live previews grouped by category.
        </p>
      </Link>
      <LessonCards items={topic.items} />
    </div>
  );
}

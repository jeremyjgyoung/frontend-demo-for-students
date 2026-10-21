import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Design loading and missing pages" };
export default async function Page() {
  // Read the real files. The Code tab stays in sync when you edit this lesson.
  const sources = await demoSources(
    "app/nextjs/feedback/demo.jsx",
    "app/nextjs/feedback/page.jsx",
    "app/not-found.jsx",
    "app/nextjs/feedback/slow/loading.jsx",
    "app/nextjs/feedback/slow/page.jsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Choose the right component" };
export default async function Page() {
  // Read the real files. The Code tab stays in sync when you edit this lesson.
  const sources = await demoSources(
    "app/components/choices/demo.jsx",
    "app/components/choices/page.jsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Improve a crowded interface" };
export default async function Page() {
  // Read the real files. The Code tab stays in sync when you edit this lesson.
  const sources = await demoSources(
    "app/design/improve/demo.jsx",
    "app/design/improve/page.jsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Text over images" };
export default async function Page() {
  // Read the real files. The Code tab stays in sync when you edit this lesson.
  const sources = await demoSources(
    "app/images/overlays/demo.jsx",
    "app/images/overlays/page.jsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

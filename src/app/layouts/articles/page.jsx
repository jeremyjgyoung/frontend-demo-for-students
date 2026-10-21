import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Build an article with a sidebar" };
export default async function Page() {
  // Read these files so the Code tab shows the example students can edit.
  const sources = await demoSources(
    "app/layouts/articles/demo.jsx",
    "app/layouts/articles/page.jsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

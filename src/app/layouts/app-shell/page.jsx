import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Build a full-height app screen" };
export default async function Page() {
  // Read these files so the Code tab shows the example students can edit.
  const sources = await demoSources(
    "app/layouts/app-shell/demo.jsx",
    "app/layouts/app-shell/page.jsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

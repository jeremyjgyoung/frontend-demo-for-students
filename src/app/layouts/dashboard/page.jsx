import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Build a sidebar and dashboard" };
export default async function Page() {
  // Read these files so the Code tab shows the example students can edit.
  const sources = await demoSources(
    "app/layouts/dashboard/demo.jsx",
    "app/layouts/dashboard/page.jsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

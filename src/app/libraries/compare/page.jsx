import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Compare libraries for a task" };
export default async function Page() {
  const sources = await demoSources(
    "app/libraries/compare/demo.jsx",
    "app/libraries/compare/page.jsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

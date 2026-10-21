import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";

export const metadata = { title: "Measure, change, and check again" };
export default async function Page() {
  const sources = await demoSources(
    "app/performance/measure/demo.jsx",
    "app/performance/measure/page.jsx",
  );

  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

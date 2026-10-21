import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";

export const metadata = { title: "Load optional features when needed" };
export default async function Page() {
  const sources = await demoSources(
    "app/performance/lazy-loading/demo.jsx",
    "app/performance/lazy-loading/page.jsx",
    "app/performance/lazy-loading/activity-chart.jsx",
    "components/ui/chart.tsx",
  );

  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Pass props and handle events" };
export default async function Page() {
  const sources = await demoSources(
    "app/components/props/demo.jsx",
    "app/components/props/page.jsx",
    "app/components/props/activity-card.jsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

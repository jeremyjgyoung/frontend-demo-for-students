import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Build a component from parts" };
export default async function Page() {
  const sources = await demoSources(
    "app/components/composition/demo.jsx",
    "app/components/composition/page.jsx",
    "components/ui/card.tsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

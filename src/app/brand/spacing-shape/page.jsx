import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Apply spacing and shape" };
export default async function Page() {
  const sources = await demoSources(
    "app/brand/spacing-shape/demo.jsx",
    "app/brand/spacing-shape/page.jsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

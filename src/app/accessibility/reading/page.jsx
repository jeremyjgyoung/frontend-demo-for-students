import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";

export const metadata = { title: "Make content easier to read and use" };
export default async function Page() {
  const sources = await demoSources(
    "app/accessibility/reading/demo.jsx",
    "app/accessibility/reading/page.jsx",
    "app/accessibility/reading/motion.module.css",
    "components/ui/button.tsx",
  );

  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

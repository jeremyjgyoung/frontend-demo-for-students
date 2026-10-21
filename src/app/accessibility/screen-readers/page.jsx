import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";

export const metadata = { title: "Make content work with screen readers" };
export default async function Page() {
  const sources = await demoSources(
    "app/accessibility/screen-readers/demo.jsx",
    "app/accessibility/screen-readers/page.jsx",
    "app/accessibility/screen-readers/alt-text-demo.jsx",
    "components/ui/label.tsx",
    "components/ui/input.tsx",
  );

  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

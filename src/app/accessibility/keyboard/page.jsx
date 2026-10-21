import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";

export const metadata = { title: "Use the page without a mouse" };
export default async function Page() {
  const sources = await demoSources(
    "app/accessibility/keyboard/demo.jsx",
    "app/accessibility/keyboard/page.jsx",
    "components/ui/button.tsx",
    "components/ui/dialog.tsx",
  );

  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

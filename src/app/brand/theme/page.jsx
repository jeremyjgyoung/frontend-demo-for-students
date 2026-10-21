import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Apply your color palette" };
export default async function Page() {
  const sources = await demoSources(
    "app/brand/theme/demo.jsx",
    "app/brand/theme/page.jsx",
    "app/globals.css",
    "components/ui/button.tsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

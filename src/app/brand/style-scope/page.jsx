import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Know where styles belong" };
export default async function Page() {
  const sources = await demoSources(
    "app/brand/style-scope/demo.jsx",
    "app/brand/style-scope/page.jsx",
    "components/ui/button.tsx",
    "app/globals.css",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

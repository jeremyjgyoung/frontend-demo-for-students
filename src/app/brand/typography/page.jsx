import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Set fonts and text styles" };
export default async function Page() {
  const sources = await demoSources(
    "app/brand/typography/demo.jsx",
    "app/brand/typography/page.jsx",
    "app/globals.css",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

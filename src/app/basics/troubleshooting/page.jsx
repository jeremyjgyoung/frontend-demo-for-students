import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Fix one error at a time" };
export default async function Page() {
  const sources = await demoSources(
    "app/basics/troubleshooting/demo.jsx",
    "app/basics/troubleshooting/page.jsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

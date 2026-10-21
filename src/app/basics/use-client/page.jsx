import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";

export const metadata = { title: 'When to use "use client"' };
export default async function Page() {
  const sources = await demoSources(
    "app/basics/use-client/demo.jsx",
    "app/basics/use-client/page.jsx",
    "components/ui/button.tsx",
  );

  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

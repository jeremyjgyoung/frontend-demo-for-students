import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Understand file paths and @" };
export default async function Page() {
  const sources = await demoSources(
    "app/nextjs/file-paths/demo.jsx",
    "app/nextjs/file-paths/trail-note.jsx",
    "app/nextjs/file-paths/examples/path-card.jsx",
    "app/nextjs/file-paths/page.jsx",
    "components/ui/button.tsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

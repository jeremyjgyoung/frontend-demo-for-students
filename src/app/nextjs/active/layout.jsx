import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";

export default async function Layout({ children }) {
  const sources = await demoSources(
    "app/nextjs/active/demo.jsx",
    "app/nextjs/active/layout.jsx",
    "app/nextjs/active/page.jsx",
    "app/nextjs/active/activities/page.jsx",
    "app/nextjs/active/activities/walk/page.jsx",
    "app/nextjs/active/saved/page.jsx",
  );
  // Keep the lesson and app shell around each real child page.
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo>{children}</LessonDemo>
    </LessonFrame>
  );
}

import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";

export default async function Layout({ children }) {
  const sources = await demoSources(
    "app/nextjs/navigation/demo.jsx",
    "app/nextjs/navigation/layout.jsx",
    "app/nextjs/navigation/page.jsx",
    "app/nextjs/navigation/about/page.jsx",
    "app/nextjs/navigation/contact/page.jsx",
  );
  // Keep the lesson and app shell around each real child page.
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo>{children}</LessonDemo>
    </LessonFrame>
  );
}

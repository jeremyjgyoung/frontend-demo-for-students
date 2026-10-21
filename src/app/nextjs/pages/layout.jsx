import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";

export default async function Layout({ children }) {
  const sources = await demoSources(
    "app/nextjs/pages/demo.jsx",
    "app/nextjs/pages/layout.jsx",
    "app/nextjs/pages/page.jsx",
    "app/nextjs/pages/about/page.jsx",
    "app/nextjs/pages/contact/page.jsx",
  );
  // All three pages use this layout. Only children changes when a club link opens.
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo>{children}</LessonDemo>
    </LessonFrame>
  );
}

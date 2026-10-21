import { MapPreview } from "./map-preview";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Show places and popups" };
export default async function Page() {
  // Read the real files. The Code tab stays in sync when you edit this lesson.
  const sources = await demoSources(
    "app/libraries/places/demo.jsx",
    "app/libraries/places/page.jsx",
    "app/libraries/places/map-preview.jsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <MapPreview />
    </LessonFrame>
  );
}

import { MapPreview } from "./map-preview";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Render your first map" };
export default async function Page() {
  // Read the real files. The Code tab stays in sync when you edit this lesson.
  const sources = await demoSources(
    "app/libraries/first-map/demo.jsx",
    "app/libraries/first-map/page.jsx",
    "app/libraries/first-map/map-preview.jsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <MapPreview />
    </LessonFrame>
  );
}

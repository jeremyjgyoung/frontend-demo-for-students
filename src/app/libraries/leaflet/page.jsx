import { MapPreview } from "./map-preview";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Render a map with Leaflet" };
export default async function Page() {
  const sources = await demoSources(
    "app/libraries/leaflet/demo.jsx",
    "app/libraries/leaflet/page.jsx",
    "app/libraries/leaflet/map-preview.jsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <MapPreview />
    </LessonFrame>
  );
}

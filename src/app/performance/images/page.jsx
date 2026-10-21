import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
import { stat } from "node:fs/promises";
import path from "node:path";
export const metadata = { title: "Make images load well" };
export default async function Page() {
  const sources = await demoSources(
    "app/performance/images/demo.jsx",
    "app/performance/images/page.jsx",
  );
  const [png, webp, svg] = await Promise.all([
    stat(path.join(process.cwd(), "public/performance/trail-2400.png")),
    stat(path.join(process.cwd(), "public/performance/trail-960.webp")),
    stat(path.join(process.cwd(), "public/landscape.svg")),
  ]);
  const sourceSizes = { png: png.size, webp: webp.size, svg: svg.size };
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo sourceSizes={sourceSizes} />
    </LessonFrame>
  );
}

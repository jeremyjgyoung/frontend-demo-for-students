import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
export const metadata = { title: "Customize shadcn components consistently" };
export default async function Page() {
  const sources = await demoSources(
    "app/brand/customize-components/demo.jsx",
    "app/brand/customize-components/page.jsx",
    "components/ui/button.tsx",
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
    </LessonFrame>
  );
}

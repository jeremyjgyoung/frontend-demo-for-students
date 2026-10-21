import { LessonDemo } from "./demo";
import { lesson } from "./lesson";
import { LessonFrame } from "@/app/_components/lesson-frame";
import { demoSources } from "@/app/_lib/source";
import Link from "next/link";
import { components } from "@/app/reference/components/catalog";
import { componentCategories } from "../catalog";
export const metadata = { title: "Inputs and choices" };
export default async function Page() {
  const sources = await demoSources(
    "app/component-explorer/inputs/demo.jsx",
    "app/component-explorer/inputs/page.jsx",
    "components/ui/input.tsx",
    "components/ui/textarea.tsx",
    "components/ui/label.tsx",
    "components/ui/checkbox.tsx",
    "components/ui/switch.tsx",
    "components/ui/radio-group.tsx",
    "components/ui/native-select.tsx",
    "components/ui/slider.tsx",
  );
  const category = componentCategories.find(function findCategory(item) {
    return item.id === "inputs";
  });
  const categoryComponents = category.components.map(
    function findComponent(id) {
      return components.find(function matchComponent(item) {
        return item.id === id;
      });
    },
  );
  return (
    <LessonFrame lesson={lesson} sources={sources}>
      <LessonDemo />
      <section className="mt-8 space-y-4" aria-labelledby="category-components">
        <h2 id="category-components" className="text-xl font-semibold">
          All components in this category
        </h2>
        <p className="text-sm leading-6 text-muted-foreground">
          The live example above uses a few common choices. Open any component
          below for a usage snippet and its real source file.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {categoryComponents.map(function showComponent(component) {
            return (
              <li key={component.id}>
                <Link
                  className="block h-full rounded-xl border p-4 hover:bg-muted"
                  href={
                    "/reference/components?component=" +
                    component.id +
                    "#selected-component"
                  }
                >
                  <h3 className="font-semibold">{component.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {component.description}
                  </p>
                  <span className="mt-3 inline-block text-sm underline">
                    View snippet and source
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </LessonFrame>
  );
}

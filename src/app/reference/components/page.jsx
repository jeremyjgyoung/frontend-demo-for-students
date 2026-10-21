import { components } from "./catalog";
import { componentCategories } from "@/app/component-explorer/catalog";
import { demoSources } from "@/app/_lib/source";
import { ComponentGallery } from "./gallery";
export const metadata = { title: "shadcn Component Reference" };

export default async function Page({ searchParams }) {
  const query = await searchParams;
  const groups = componentCategories.map(function category(group) {
    return {
      id: group.id,
      title: group.id === "inputs" ? "Forms and inputs" : group.title,
      summary: group.summary,
      items: group.components.map(function findComponent(id) {
        return components.find(function match(component) {
          return component.id === id;
        });
      }),
    };
  });
  // These paths come from the fixed component list, never from a visitor's input.
  const files = await demoSources(
    ...components.map(function previewPath(component) {
      return "app/reference/components/previews/" + component.id + ".jsx";
    }),
  );
  const sources = Object.fromEntries(
    components.map(function sourcePair(component, index) {
      return [component.id, files[index]];
    }),
  );
  return (
    <main
      id="main-content"
      className="mx-auto max-w-7xl space-y-6 px-5 py-6 sm:px-8 sm:py-8"
    >
      <header id="component-reference-top" className="scroll-mt-44 space-y-3">
        <p className="text-xs font-semibold tracking-widest text-blue-700 uppercase dark:text-blue-300">
          Look. Try. Use.
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          shadcn Component Reference
        </h1>
        <p className="max-w-2xl leading-7 text-muted-foreground">
          Browse live previews by category. Every component is already in your
          template.
        </p>
      </header>
      <ComponentGallery
        groups={groups}
        sources={sources}
        initialComponent={
          typeof query.component === "string" ? query.component : undefined
        }
      />
    </main>
  );
}

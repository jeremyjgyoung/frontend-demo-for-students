"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SourceCode } from "@/app/_components/lesson-frame";
import { previewComponents } from "./preview-components";

export function ComponentGallery({ groups, sources, initialComponent }) {
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const visibleGroups = groups
    .map(function filterGroup(group) {
      return {
        ...group,
        items: group.items.filter(function matches(component) {
          return (
            component.title +
            " " +
            component.description +
            " " +
            group.title
          )
            .toLowerCase()
            .includes(term);
        }),
      };
    })
    .filter(function hasItems(group) {
      return group.items.length > 0;
    });

  return (
    <div className="space-y-10">
      <div className="space-y-4 rounded-2xl border bg-muted/30 p-4">
        <label className="block max-w-lg space-y-2">
          <span className="sr-only">Find a component</span>
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 z-10 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="search"
              value={search}
              onChange={function searchComponents(event) {
                setSearch(event.target.value);
              }}
              placeholder="Try button, dialog, or forms"
              className="pl-9"
            />
          </div>
        </label>
        <nav aria-label="Component categories" className="flex flex-wrap gap-2">
          {groups.map(function categoryLink(group) {
            return (
              <a
                key={group.id}
                href={"#category-" + group.id}
                onClick={function showCategory() {
                  setSearch("");
                }}
                className="rounded-full border bg-background px-3 py-1.5 text-sm font-medium hover:bg-muted"
              >
                {group.title}
              </a>
            );
          })}
        </nav>
      </div>
      {visibleGroups.length === 0 && (
        <p role="status" className="rounded-xl border p-6">
          No components match “{search}”. Try another name or clear the search.
        </p>
      )}
      {visibleGroups.map(function categorySection(group) {
        return (
          <section
            key={group.id}
            id={"category-" + group.id}
            aria-labelledby={"heading-" + group.id}
            className="scroll-mt-44 space-y-5"
          >
            <header className="space-y-2">
              <h2
                id={"heading-" + group.id}
                className="text-2xl font-semibold tracking-tight"
              >
                {group.title}
              </h2>
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                {group.summary}
              </p>
            </header>
            <div className="grid items-start gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {group.items.map(function componentCard(component) {
                const Preview = previewComponents[component.id];
                return (
                  <article
                    key={component.id}
                    id={"component-" + component.id}
                    aria-labelledby={"name-" + component.id}
                    className="min-w-0 scroll-mt-44 rounded-2xl border bg-background shadow-sm"
                  >
                    {initialComponent === component.id && (
                      <span
                        id="selected-component"
                        className="block scroll-mt-44"
                      />
                    )}
                    <header className="space-y-1.5 px-5 pt-5">
                      <h3
                        id={"name-" + component.id}
                        className="text-base font-semibold"
                      >
                        {component.title}
                      </h3>
                      <p className="min-h-10 text-sm leading-5 text-muted-foreground">
                        {component.description}
                      </p>
                    </header>
                    <div
                      className="flex min-h-40 min-w-0 items-center p-5"
                      data-component-preview={component.id}
                    >
                      <div className="w-full min-w-0">
                        <Preview />
                      </div>
                    </div>
                    <details
                      open={
                        initialComponent === component.id ? true : undefined
                      }
                      className="min-w-0 border-t"
                    >
                      <summary className="cursor-pointer px-5 py-3 text-sm font-medium hover:bg-muted/50">
                        Code · import and use
                      </summary>
                      <div className="min-w-0 space-y-3 p-3">
                        <p className="px-2 text-xs leading-5 text-muted-foreground">
                          This is the complete code for the preview above. Its
                          state and actions stay in your browser.
                        </p>
                        <SourceCode source={sources[component.id]} />
                      </div>
                    </details>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
      <a
        href="#component-reference-top"
        className="inline-block text-sm underline underline-offset-4"
      >
        Back to categories
      </a>
    </div>
  );
}

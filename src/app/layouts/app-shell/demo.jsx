"use client";
import { useState } from "react";

export function LessonDemo() {
  const [width, setWidth] = useState("wide");
  const [selected, setSelected] = useState("garden");
  const [showNotes, setShowNotes] = useState(false);
  const projects = [
    {
      id: "garden",
      title: "School garden",
      description:
        "Create a page that helps students find the next garden session.",
      next: "Sketch the events section.",
    },
    {
      id: "radio",
      title: "Lunch radio",
      description: "Build a simple home for student playlists and show times.",
      next: "Plan the programme list.",
    },
    {
      id: "swap",
      title: "Book swap",
      description: "Help readers discover books they can exchange at school.",
      next: "Design a book card.",
    },
  ];
  const project = projects.find(function findProject(item) {
    return item.id === selected;
  });
  return (
    <div className="space-y-5">
      <label className="flex flex-wrap items-center gap-3 text-sm font-medium">
        Preview width
        <select
          value={width}
          onChange={function changeWidth(event) {
            setWidth(event.target.value);
          }}
          className="rounded-lg border bg-background px-3 py-2"
        >
          <option value="wide">Wide</option>
          <option value="narrow">Narrow</option>
        </select>
      </label>
      <p className="text-sm leading-6 text-muted-foreground">
        Narrow limits this example to 24rem. Wide uses the available space. The
        page itself stays the same size.
      </p>
      {/* Container queries respond to this preview box, not the whole browser. */}
      <div
        className={
          width === "narrow"
            ? "@container mx-auto w-full max-w-sm"
            : "@container w-full"
        }
      >
        <div className="flex min-h-[32rem] flex-col overflow-hidden rounded-2xl border bg-background">
          <header className="flex flex-wrap items-center justify-between gap-3 border-b bg-muted/40 px-5 py-4">
            <p className="font-bold">Project notebook</p>
            <span className="text-xs text-muted-foreground">
              Local sample projects
            </span>
          </header>
          <div className="grid flex-1 @2xl:grid-cols-[13rem_minmax(0,1fr)]">
            <aside className="border-b p-4 @2xl:border-r @2xl:border-b-0">
              <h2 className="mb-3 text-sm font-semibold">Choose a project</h2>
              <div className="flex flex-col gap-2">
                {projects.map(function renderProject(item) {
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={selected === item.id}
                      onClick={function selectProject() {
                        setSelected(item.id);
                      }}
                      className={
                        selected === item.id
                          ? "rounded-lg bg-primary px-3 py-3 text-left text-sm text-primary-foreground"
                          : "rounded-lg border px-3 py-3 text-left text-sm"
                      }
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>
            </aside>
            <section
              aria-labelledby="project-detail-title"
              className="min-w-0 space-y-5 p-6"
            >
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Project details
              </p>
              <h2 id="project-detail-title" className="text-2xl font-bold">
                {project.title}
              </h2>
              <p className="max-w-prose leading-7">{project.description}</p>
              <div className="rounded-xl bg-muted/50 p-4">
                <h3 className="font-semibold">Next step</h3>
                <p className="mt-2 text-sm leading-6">{project.next}</p>
              </div>
              <label className="flex items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={showNotes}
                  onChange={function toggleNotes(event) {
                    setShowNotes(event.target.checked);
                  }}
                />
                Extra notes
              </label>
              {showNotes && (
                <div className="max-w-prose space-y-4 leading-7">
                  <p>
                    Check the page with real text before you choose a height. A
                    project title may take two lines. A useful description may
                    need several paragraphs.
                  </p>
                  <p>
                    Ask someone to use the page without help. Write down the
                    first part that feels unclear. Make that part simpler and
                    test it again.
                  </p>
                  <p>
                    The footer follows the content. It does not cover the last
                    paragraph, even when this panel gets taller.
                  </p>
                </div>
              )}
            </section>
          </div>
          <footer className="border-t bg-muted/30 px-5 py-4 text-sm text-muted-foreground">
            Viewing: {project.title} · Changes reset on reload
          </footer>
        </div>
      </div>
    </div>
  );
}

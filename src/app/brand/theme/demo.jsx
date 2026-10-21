"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export function LessonDemo() {
  const [primary, setPrimary] = useState("#1d4ed8");
  const [background, setBackground] = useState("#f8fafc");
  const [card, setCard] = useState("#ffffff");
  const [dark, setDark] = useState(false);
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-5">
        <label className="flex items-center gap-2">
          Primary
          <input
            type="color"
            value={primary}
            onChange={function changePrimary(event) {
              setPrimary(event.target.value);
            }}
          />
        </label>
        <label className="flex items-center gap-2">
          Page background
          <input
            type="color"
            value={background}
            onChange={function changeBackground(event) {
              setBackground(event.target.value);
            }}
          />
        </label>
        <label className="flex items-center gap-2">
          Card surface
          <input
            type="color"
            value={card}
            onChange={function changeCard(event) {
              setCard(event.target.value);
            }}
          />
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={dark}
            onChange={function changeMode(event) {
              setDark(event.target.checked);
            }}
          />
          Dark surface
        </label>
      </div>
      {/* Define both sides of a color pair. A background needs a readable foreground. */}
      <section
        className="overflow-hidden rounded-xl border bg-background text-foreground"
        style={{
          "--primary": primary,
          "--primary-foreground": "#ffffff",
          "--background": dark ? "#0f172a" : background,
          "--foreground": dark ? "#f8fafc" : "#0f172a",
          "--card": dark ? "#1e293b" : card,
          "--card-foreground": dark ? "#f8fafc" : "#0f172a",
          "--muted": dark ? "#334155" : "#e2e8f0",
          "--muted-foreground": dark ? "#cbd5e1" : "#475569",
          "--border": dark ? "#475569" : "#cbd5e1",
        }}
      >
        <header className="flex flex-wrap items-center justify-between gap-3 border-b p-5">
          <h2 className="font-semibold">Adventure Club</h2>
          <span className="rounded bg-primary px-3 py-1 text-xs text-primary-foreground">
            Open to everyone
          </span>
        </header>
        <div className="space-y-5 p-5">
          <article className="space-y-4 rounded-lg border bg-card p-5 text-card-foreground">
            <h3 className="text-xl font-semibold">Friday walk</h3>
            <p className="text-muted-foreground">
              A short route and time to talk.
            </p>
            <label className="block space-y-2">
              <span className="text-sm">Your name</span>
              <Input placeholder="A practice input" />
            </label>
            <Button>Join the walk</Button>
          </article>
          <p className="text-sm text-muted-foreground">
            The badge and button share primary. The card and page use separate
            surface values.
          </p>
        </div>
      </section>
      <p className="text-sm leading-6 text-muted-foreground">
        This is a local preview. To save the design, edit :root and .dark in
        globals.css. Check contrast after changing a color; the picker cannot
        guarantee readable pairs.
      </p>
    </div>
  );
}

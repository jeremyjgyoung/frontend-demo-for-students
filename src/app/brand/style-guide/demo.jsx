"use client";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  return (
    <article className="space-y-8 rounded-xl border p-6">
      <header>
        <p className="text-sm text-muted-foreground">
          Adventure Club · style guide
        </p>
        <h2 className="mt-2 text-3xl font-semibold">
          Clear, welcoming, outdoors
        </h2>
      </header>
      <section className="space-y-3">
        <h3 className="text-xl font-semibold">Color roles</h3>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded bg-blue-700 p-4 text-white">
            Primary action
          </div>
          <div className="rounded bg-slate-100 p-4 text-slate-950">
            Quiet surface
          </div>
          <div className="rounded bg-emerald-100 p-4 text-emerald-950">
            Positive feedback
          </div>
        </div>
      </section>
      <section className="space-y-3">
        <h3 className="text-xl font-semibold">Type and spacing</h3>
        <p className="text-2xl font-semibold">A short, direct title</p>
        <p className="max-w-prose leading-7">
          Body text uses a readable width and comfortable line spacing. Use 8,
          16, and 24 pixels as a small spacing scale.
        </p>
      </section>
      <section className="space-y-3">
        <h3 className="text-xl font-semibold">Actions and language</h3>
        <div className="flex flex-wrap gap-3">
          <Button>Join the walk</Button>
          <Button variant="outline">View details</Button>
        </div>
        <p>Use a clear verb. Say what happens next. Keep instructions short.</p>
      </section>
    </article>
  );
}

"use client";
import { useState } from "react";

export function LessonDemo() {
  const [width, setWidth] = useState("wide");
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
        <div className="overflow-hidden rounded-2xl border bg-background">
          <header className="flex flex-wrap items-center justify-between gap-4 border-b px-6 py-4">
            <p className="font-bold">MAKE / CLUB</p>
            <a
              className="text-sm underline underline-offset-4"
              href="#landing-plan"
            >
              Our plan
            </a>
          </header>
          <section
            aria-labelledby="landing-hero-title"
            className="grid items-center gap-8 bg-amber-50 p-6 text-slate-950 @2xl:grid-cols-[1.2fr_1fr] @2xl:p-10"
          >
            <div className="space-y-5">
              <p className="text-xs font-bold tracking-widest uppercase">
                A club for curious people
              </p>
              <h2
                id="landing-hero-title"
                className="max-w-md text-4xl font-bold tracking-tight"
              >
                Make room for your next idea.
              </h2>
              <p className="max-w-md leading-7">
                Build something small. Learn with friends. Leave with something
                you made.
              </p>
              <a
                href="#landing-plan"
                className="inline-block rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white"
              >
                See the plan
              </a>
            </div>
            {/* This visual uses HTML. It does not need an image download. */}
            <div className="grid aspect-square place-items-center rounded-2xl border-2 border-slate-950 bg-violet-200 p-6">
              <div className="rotate-[-6deg] border-2 border-slate-950 bg-white p-6 text-center shadow-[6px_6px_0_#0f172a]">
                <p className="text-5xl font-black" aria-hidden="true">
                  Aa +
                </p>
                <p className="mt-4 font-bold">Small ideas. Real projects.</p>
              </div>
            </div>
          </section>
          <section
            id="landing-plan"
            aria-labelledby="landing-plan-title"
            className="scroll-mt-8 space-y-5 p-6 @2xl:p-10"
          >
            <h2 id="landing-plan-title" className="text-2xl font-bold">
              An easy way to start
            </h2>
            <div className="grid gap-4 @2xl:grid-cols-3">
              <article className="rounded-xl border p-5">
                <p className="text-sm text-muted-foreground">01 / Explore</p>
                <h3 className="mt-3 font-bold">Pick an idea</h3>
                <p className="mt-2 text-sm leading-6">
                  Choose a small problem you care about.
                </p>
              </article>
              <article className="rounded-xl border p-5">
                <p className="text-sm text-muted-foreground">02 / Make</p>
                <h3 className="mt-3 font-bold">Build together</h3>
                <p className="mt-2 text-sm leading-6">
                  Try a first version with your team.
                </p>
              </article>
              <article className="rounded-xl border p-5">
                <p className="text-sm text-muted-foreground">03 / Share</p>
                <h3 className="mt-3 font-bold">Share your work</h3>
                <p className="mt-2 text-sm leading-6">
                  Show what works. Choose what to improve.
                </p>
              </article>
            </div>
          </section>
          <footer className="border-t px-6 py-4 text-sm text-muted-foreground">
            Make Club · A sample landing page
          </footer>
        </div>
      </div>
    </div>
  );
}

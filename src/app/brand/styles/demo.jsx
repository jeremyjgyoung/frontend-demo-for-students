"use client";
import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function LessonDemo() {
  const [selected, setSelected] = useState("calm");
  // Keep the words and their complete Tailwind classes together.
  // All three versions describe the same club walk.
  const directions = {
    calm: {
      name: "Calm and welcoming",
      words: "Calm, clear, welcoming",
      sample: "A little fresh air. A good place to start.",
      eyebrow: "The Weekend Club · Find your pace",
      heading: "A little fresh air. A good place to start.",
      body: "Join a gentle walk with friendly people. Take your time, enjoy the view, and ask questions along the way. New walkers are welcome.",
      action: "Find an easy walk",
      panel: "rounded-2xl border border-sky-200 bg-sky-50 text-sky-950",
      headingClass: "font-sans font-semibold tracking-tight",
      actionClass:
        "rounded-xl bg-sky-900 text-white hover:bg-sky-800 focus-visible:ring-sky-700",
      typography: "Simple sans-serif text and a steady heading size.",
      color: "Pale blue surfaces with dark blue text and a clear action.",
      shape: "Soft corners and generous space.",
      tone: "Short, reassuring sentences. The words explain what a new walker can expect.",
    },
    playful: {
      name: "Playful and bold",
      words: "Playful, bold, friendly",
      sample: "Your weekend called. It wants an adventure.",
      eyebrow: "The Weekend Club · Let’s go outside!",
      heading: "Your weekend called. It wants an adventure.",
      body: "Grab your trainers and bring your curiosity. Our easy 2 km walk has fresh air, friendly faces, and plenty of time to stop and look around. First walk? You’re in.",
      action: "Pick your next adventure",
      panel:
        "rounded-none border-4 border-black bg-yellow-300 text-black shadow-[7px_7px_0_0_#000]",
      headingClass: "font-sans font-black tracking-tight uppercase",
      actionClass:
        "rounded-none border-4 border-black bg-violet-700 text-white shadow-[4px_4px_0_0_#000] transition-none hover:translate-x-px hover:translate-y-px hover:bg-violet-800 hover:shadow-[3px_3px_0_0_#000] focus-visible:ring-violet-700",
      typography:
        "Heavy, uppercase sans-serif headings with lively, direct wording.",
      color: "Bright yellow with black outlines and a violet action.",
      shape: "Square corners, thick black borders, and hard offset shadows.",
      tone: "Conversational phrases add energy. The description still explains that the walk is easy.",
    },
    editorial: {
      name: "Editorial and thoughtful",
      words: "Thoughtful, grounded, curious",
      sample: "Make room for a different kind of Saturday.",
      eyebrow: "The Weekend Club · Field notes / 01",
      heading: "Make room for a different kind of Saturday.",
      body: "Step away from the usual routine. This gentle 2 km walk offers time to notice the landscape and share a conversation. No walking experience is needed.",
      action: "Browse the weekend walks",
      panel:
        "rounded-none border-y-2 border-stone-800 bg-stone-50 text-stone-950",
      headingClass: "font-serif font-medium tracking-normal",
      actionClass:
        "rounded-none bg-stone-900 text-white hover:bg-stone-700 focus-visible:ring-stone-700",
      typography: "Serif headings with sans-serif body text.",
      color: "Warm neutral surfaces and dark text.",
      shape: "Straight edges and simple horizontal rules.",
      tone: "Measured, descriptive sentences invite the reader to slow down and notice details.",
    },
  };
  const brand = directions[selected];

  return (
    <div className="space-y-8">
      <section className="space-y-4" aria-labelledby="brand-directions-title">
        <h2 id="brand-directions-title" className="text-2xl font-semibold">
          Compare three directions
        </h2>
        <p className="leading-7">
          A brand is the impression people get from your site. Copy means the
          words in the interface: headings, descriptions, and button labels.
          Choose a direction to see both the design and the copy change.
        </p>
        <div className="grid gap-4 xl:grid-cols-3">
          {Object.entries(directions).map(function showDirection([
            id,
            direction,
          ]) {
            return (
              <button
                key={id}
                type="button"
                aria-pressed={selected === id}
                aria-label={"Show " + direction.name}
                onClick={function chooseDirection() {
                  setSelected(id);
                }}
                className={
                  direction.panel +
                  " flex min-w-0 cursor-pointer flex-col items-start gap-3 p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                }
              >
                <span className="text-sm font-semibold">{direction.name}</span>
                <span
                  className={direction.headingClass + " text-xl leading-snug"}
                >
                  {direction.sample}
                </span>
                <span className="mt-auto pt-2 text-xs font-semibold">
                  {selected === id
                    ? "Selected direction"
                    : "Show this direction"}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="brand-preview-title">
        <h2 id="brand-preview-title" className="text-2xl font-semibold">
          The same club, a different voice
        </h2>
        <p className="text-sm leading-7 text-muted-foreground">
          The activity facts stay the same: Saturday, 10am, 2 km, free, and
          suitable for beginners. The words and design create a different feel.
        </p>
        <article
          aria-label={brand.name + " club page"}
          className={brand.panel + " space-y-6 p-6 font-sans sm:p-10"}
        >
          <p className="text-xs font-semibold tracking-widest uppercase">
            {brand.eyebrow}
          </p>
          <h3
            className={
              brand.headingClass +
              " max-w-2xl text-3xl leading-tight sm:text-5xl"
            }
          >
            {brand.heading}
          </h3>
          <p className="max-w-prose text-base leading-8 sm:text-lg">
            {brand.body}
          </p>
          <ul
            aria-label="Walk details"
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold"
          >
            <li>Saturday</li>
            <li>10am</li>
            <li>2 km</li>
            <li>Free</li>
          </ul>
          <Link
            href="/logic/filter"
            className={buttonVariants({
              className:
                brand.actionClass +
                " h-auto min-h-11 max-w-full px-5 py-3 text-center whitespace-normal",
            })}
          >
            {brand.action}
          </Link>
        </article>
        <p className="text-sm leading-7 text-muted-foreground">
          All three action links open the activity filtering demo. The label
          changes with the voice; the task stays the same.
        </p>
      </section>

      <section
        aria-label="Selected brand choices"
        aria-live="polite"
        className="space-y-5 rounded-xl border p-6"
      >
        <h2 className="text-xl font-semibold">Why this feels different</h2>
        <p className="font-semibold">{brand.words}</p>
        <dl className="grid gap-5 sm:grid-cols-2">
          <div>
            <dt className="font-semibold">Typography</dt>
            <dd className="mt-2 leading-7">{brand.typography}</dd>
          </div>
          <div>
            <dt className="font-semibold">Color</dt>
            <dd className="mt-2 leading-7">{brand.color}</dd>
          </div>
          <div>
            <dt className="font-semibold">Shape and space</dt>
            <dd className="mt-2 leading-7">{brand.shape}</dd>
          </div>
          <div>
            <dt className="font-semibold">Voice and copy</dt>
            <dd className="mt-2 leading-7">{brand.tone}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
export function LessonDemo() {
  const [fit, setFit] = useState("cover");
  return (
    <div className="space-y-5">
      <label className="flex items-center gap-3">
        Fit inside the square
        <select
          value={fit}
          className="rounded border bg-background p-2"
          onChange={function changeFit(event) {
            setFit(event.target.value);
          }}
        >
          <option value="cover">Cover: crop to fill</option>
          <option value="contain">Contain: show it all</option>
        </select>
      </label>
      <div className="grid gap-6 sm:grid-cols-2">
        <figure>
          <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-200">
            <Image
              src="/landscape.svg"
              alt="Illustrated mountains and a sun"
              fill
              sizes="(max-width: 640px) 100vw, 40vw"
              className={fit === "cover" ? "object-cover" : "object-contain"}
            />
          </div>
          <figcaption className="mt-2 text-sm">Fixed square: {fit}</figcaption>
        </figure>
        <figure>
          <Image
            src="/landscape.svg"
            alt="The complete mountain illustration"
            width={960}
            height={540}
            className="h-auto w-full rounded-xl"
          />
          <figcaption className="mt-2 text-sm">
            Natural proportions: no crop
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

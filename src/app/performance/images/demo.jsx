"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export function LessonDemo({ sourceSizes }) {
  const [format, setFormat] = useState("webp");
  const source =
    format === "png"
      ? "/performance/trail-2400.png"
      : format === "svg"
        ? "/landscape.svg"
        : "/performance/trail-960.webp";
  return (
    <section className="min-w-0 space-y-6 rounded-xl border p-6">
      <h2 className="text-2xl font-semibold">
        Same illustration, different files
      </h2>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          aria-pressed={format === "png"}
          onClick={function showPng() {
            setFormat("png");
          }}
        >
          PNG export
        </Button>
        <Button
          variant="outline"
          aria-pressed={format === "webp"}
          onClick={function showWebp() {
            setFormat("webp");
          }}
        >
          Smaller WebP
        </Button>
        <Button
          variant="outline"
          aria-pressed={format === "svg"}
          onClick={function showSvg() {
            setFormat("svg");
          }}
        >
          Original SVG
        </Button>
      </div>
      <dl className="grid gap-4 sm:grid-cols-3">
        <div>
          <dt>PNG, 2400 × 1350</dt>
          <dd className="font-semibold">
            {sourceSizes.png.toLocaleString("en-US")} bytes
          </dd>
        </div>
        <div>
          <dt>WebP, 960 × 540</dt>
          <dd className="font-semibold">
            {sourceSizes.webp.toLocaleString("en-US")} bytes
          </dd>
        </div>
        <div>
          <dt>SVG vector</dt>
          <dd className="font-semibold">
            {sourceSizes.svg.toLocaleString("en-US")} bytes
          </dd>
        </div>
      </dl>
      <figure className="max-w-3xl space-y-3">
        <Image
          src={source}
          alt="Illustrated mountains, grass, and a sun"
          width={format === "png" ? 2400 : 960}
          height={format === "png" ? 1350 : 540}
          sizes="(max-width: 768px) 100vw, 768px"
          unoptimized={format !== "webp"}
          className="h-auto w-full rounded-xl"
        />
        <figcaption role="status" className="text-sm">
          Showing {format.toUpperCase()}. Source: {source}
        </figcaption>
      </figure>
      <p className="leading-7">
        The SVG is a good choice for this flat illustration. The raster exports
        let you compare dimensions and file formats. Choose based on your actual
        image.
      </p>
      <p className="text-sm leading-6 text-muted-foreground">
        The source byte counts are exact file sizes, not download times. The PNG
        bypasses Next.js optimization as a baseline. The WebP uses normal Image
        optimization; inspect Network for the delivered response.
      </p>
    </section>
  );
}

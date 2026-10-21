"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export function LessonDemo() {
  const [overlay, setOverlay] = useState(true);
  return (
    <div className="space-y-4">
      <Button
        variant="outline"
        aria-pressed={overlay}
        onClick={function toggleOverlay() {
          setOverlay(!overlay);
        }}
      >
        Toggle dark overlay
      </Button>
      <div className="relative isolate min-h-72 overflow-hidden rounded-xl">
        <Image
          src="/landscape.svg"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 70vw"
          className="-z-20 object-cover"
        />
        {overlay && <div className="absolute inset-0 -z-10 bg-black/65" />}
        <div className="max-w-lg p-8 text-white">
          <h2 className="text-4xl font-bold">Take the scenic route</h2>
          <p className="mt-4 text-lg">
            An overlay separates the words from the image behind them.
          </p>
        </div>
      </div>
    </div>
  );
}

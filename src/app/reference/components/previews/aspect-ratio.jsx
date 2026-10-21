"use client";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// A local preview using the real component already in your template.
export function AspectRatioPreview() {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="/landscape.svg"
          alt="Mountains and a yellow sun"
          fill
          unoptimized
          className="object-cover"
        />
      </AspectRatio>
    </div>
  );
}

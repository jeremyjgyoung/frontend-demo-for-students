"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// A local preview using the real component already in your template.
export function CarouselPreview() {
  return (
    <Carousel className="mx-10 w-[calc(100%-5rem)]">
      <CarouselContent>
        {["Explore", "Make", "Share"].map(function slide(title, index) {
          return (
            <CarouselItem key={title}>
              <div className="grid h-28 place-items-center rounded-xl bg-muted">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">0{index + 1}</p>
                  <p className="mt-2 text-lg font-semibold">{title}</p>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

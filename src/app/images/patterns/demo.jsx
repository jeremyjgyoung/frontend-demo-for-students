"use client";
import Image from "next/image";
export function LessonDemo() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <article className="overflow-hidden rounded-xl border">
          <div className="relative aspect-video">
            <Image
              src="/landscape.svg"
              alt="Mountains near the club campsite"
              fill
              sizes="(max-width: 640px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-3 p-5">
            <h2 className="text-xl font-semibold">Weekend walking club</h2>
            <p>Meet outdoors and learn a new route.</p>
          </div>
        </article>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Image
              src="/landscape.svg"
              alt=""
              width={64}
              height={64}
              className="size-16 rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold">Adventure Club</h2>
              <p className="text-sm text-muted-foreground">
                The adjacent name identifies this decorative avatar.
              </p>
            </div>
          </div>
          <figure>
            <Image
              src="/landscape.svg"
              alt="A mountain illustration with a yellow sun"
              width={960}
              height={540}
              className="h-auto w-full rounded-xl"
            />
            <figcaption className="mt-2 text-sm text-muted-foreground">
              A local illustration. No external image service is needed.
            </figcaption>
          </figure>
        </div>
      </div>
      <section className="space-y-5" aria-labelledby="image-widths-title">
        <h2 id="image-widths-title" className="text-2xl font-semibold">
          Choose the container width
        </h2>
        <p className="leading-7">
          Each image fills its own container. The shaded area shows the
          available width in this lesson. Resize the browser to compare the
          examples.
        </p>
        <div className="space-y-7 rounded-xl border bg-muted/40 p-4 sm:p-6">
          {/* w-full fills the lesson area, which is narrower than the screen. */}
          <figure className="w-full" data-testid="image-width-full">
            <Image
              src="/landscape.svg"
              alt=""
              width={960}
              height={540}
              className="h-auto w-full rounded-lg"
            />
            <figcaption className="mt-2 text-sm leading-6">
              <strong>Full available width:</strong> w-full fills this parent
              container.
            </figcaption>
          </figure>
          <figure
            className="mx-auto w-full max-w-lg"
            data-testid="image-width-capped"
          >
            <Image
              src="/landscape.svg"
              alt=""
              width={960}
              height={540}
              className="h-auto w-full rounded-lg"
            />
            <figcaption className="mt-2 text-sm leading-6">
              <strong>Centered and capped:</strong> max-w-lg limits the
              container to 32rem. mx-auto centers it.
            </figcaption>
          </figure>
          <figure className="w-full md:w-1/2" data-testid="image-width-half">
            <Image
              src="/landscape.svg"
              alt=""
              width={960}
              height={540}
              className="h-auto w-full rounded-lg"
            />
            <figcaption className="mt-2 text-sm leading-6">
              <strong>Responsive half width:</strong> full width first, then
              half of the parent from the md breakpoint (768px).
            </figcaption>
          </figure>
        </div>
        <p className="rounded-xl border p-5 text-sm leading-7">
          <strong>Want an edge-to-edge hero?</strong> Put its container outside
          your centered max-w content wrapper. Then w-full can fill the page.
          Here, the lesson sidebar and padding remain in place. w-screen means
          100vw, the viewport width; putting it inside this narrow lesson column
          can cause horizontal scrolling. See Explanation for the page
          structure.
        </p>
      </section>
    </div>
  );
}

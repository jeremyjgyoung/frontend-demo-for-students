import Link from "next/link";
export const metadata = { title: "Image recipes" };
export default function Page() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl space-y-8 px-5 py-10">
      <Link className="text-sm underline" href="/reference">
        All reference pages
      </Link>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Image recipes</h1>
        <p className="leading-7 text-muted-foreground">
          Choose a wrapper based on the purpose of the image.
        </p>
      </header>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Get an image URL from the LMS</h2>
        <p className="leading-7 text-muted-foreground">
          Find the cloud icon in the bottom-right corner of the LMS. Click it
          and upload your image. Copy the URL you get and use it as src in the
          Next.js Image component. Keep unoptimized on Image so it loads the
          original file directly.
        </p>
        <Link href="/images/hosting" className="inline-block underline">
          See the upload steps and Next.js Image example
        </Link>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Natural proportions</h2>
        <p className="leading-7 text-muted-foreground">
          Use the source dimensions to establish a ratio. A local SVG is used in
          these lessons so the demos do not depend on a photo service.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              '<Image src="/landscape.svg" alt="Mountains and a sun"\n  width={960} height={540} className="h-auto w-full" />'
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Cropped card image</h2>
        <p className="leading-7 text-muted-foreground">
          A fill image needs a positioned container with height. sizes describes
          the expected display width.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              '<div className="relative aspect-video overflow-hidden rounded-xl">\n  <Image src="/landscape.svg" alt="Mountains" fill\n    sizes="(max-width: 640px) 100vw, 40vw"\n    className="object-cover" />\n</div>'
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Avatar</h2>
        <p className="leading-7 text-muted-foreground">
          Use empty alternative text only when nearby text already gives the
          identity and the image adds no needed information.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              '<Image src="/landscape.svg" alt="" width={64} height={64}\n  className="size-16 rounded-full object-cover" />'
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Caption</h2>
        <p className="leading-7 text-muted-foreground">
          A caption gives visible context. It is not a reason to omit necessary
          alternative text.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              '<figure>\n  <Image src="/landscape.svg" alt="Mountains and a sun"\n    width={960} height={540} />\n  <figcaption>A local mountain illustration.</figcaption>\n</figure>'
            }
          </code>
        </pre>
      </section>
    </main>
  );
}

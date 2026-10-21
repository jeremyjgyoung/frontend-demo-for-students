import Link from "next/link";
export const metadata = { title: "Libraries and pnpm" };
export default function Page() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl space-y-8 px-5 py-10">
      <Link className="text-sm underline" href="/reference">
        All reference pages
      </Link>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Libraries and pnpm</h1>
        <p className="leading-7 text-muted-foreground">
          Install packages deliberately and keep the setup reproducible.
        </p>
      </header>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Install a dependency</h2>
        <p className="leading-7 text-muted-foreground">
          Run this from the folder that contains package.json. It installs the
          React wrapper and map renderer.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>{"pnpm add react-map-gl maplibre-gl"}</code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Use the lockfile</h2>
        <p className="leading-7 text-muted-foreground">
          Commit or share the lockfile with the project. A frozen install fails
          if the manifest and lockfile disagree.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>{"pnpm install --frozen-lockfile\npnpm dev"}</code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Know the map setup</h2>
        <p className="leading-7 text-muted-foreground">
          MapLibre 6 needs a worker URL. The dev and build commands copy the
          worker from the installed package into public. The map wrapper loads
          browser-only code. Do not copy a Vite-specific worker import into
          Next.js.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              'import * as maplibregl from "maplibre-gl";\nimport "maplibre-gl/dist/maplibre-gl.css";\nmaplibregl.setWorkerUrl("/maplibre-worker.mjs");'
            }
          </code>
        </pre>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Use official documentation</h2>
        <p className="leading-7 text-muted-foreground">
          Read the documentation for your installed version. Keep attribution
          visible and check a map provider separately from the library.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              "// React wrapper: https://visgl.github.io/react-map-gl/\n// Renderer: https://maplibre.org/\n// Map styles and tiles: https://openfreemap.org/"
            }
          </code>
        </pre>
      </section>
    </main>
  );
}

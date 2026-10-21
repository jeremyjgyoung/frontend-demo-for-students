"use client";
import { useState } from "react";

export function LessonDemo() {
  const [problem, setProblem] = useState("height");
  const fixes = {
    height: "Give the map container a real height, such as 380px.",
    css: "Import maplibre-gl/dist/maplibre-gl.css once for the map.",
    worker:
      "Run pnpm dev or pnpm build. These commands copy the matching worker to public.",
    browser: "Load the map through the browser-only map-preview.jsx wrapper.",
    versions:
      "Check package.json and peer dependencies. Install with the supplied lockfile.",
    network:
      "Check the network panel. Tiles need internet access; the library is not the tile provider.",
  };
  return (
    <div className="space-y-5 rounded-xl border p-6">
      <label className="block space-y-2">
        <span>What went wrong?</span>
        <select
          value={problem}
          className="block max-w-full rounded border bg-background p-2"
          onChange={function changeProblem(event) {
            setProblem(event.target.value);
          }}
        >
          <option value="height">The map area is blank</option>
          <option value="css">Controls look unstyled</option>
          <option value="worker">The worker could not load</option>
          <option value="browser">window is not defined</option>
          <option value="versions">Packages are incompatible</option>
          <option value="network">Map tiles do not load</option>
        </select>
      </label>
      <p role="status" className="rounded bg-muted p-5">
        {fixes[problem]}
      </p>
      <p>Read the first error. Change one thing. Reload and check again.</p>
    </div>
  );
}

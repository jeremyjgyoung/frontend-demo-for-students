import { copyFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
// Resolve the worker shipped with our installed MapLibre. The package is ESM-only.
const workerFile = fileURLToPath(
  import.meta.resolve("maplibre-gl/dist/maplibre-gl-worker.mjs"),
);
mkdirSync("public", { recursive: true });
copyFileSync(workerFile, "public/maplibre-worker.mjs");

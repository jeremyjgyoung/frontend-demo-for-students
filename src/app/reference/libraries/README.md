# Libraries and pnpm

Install packages deliberately and keep the setup reproducible.

## Install a dependency

Run this from the folder that contains package.json. It installs the React wrapper and map renderer.

```jsx
pnpm add react-map-gl maplibre-gl
```

## Use the lockfile

Commit or share the lockfile with the project. A frozen install fails if the manifest and lockfile disagree.

```jsx
pnpm install --frozen-lockfile
pnpm dev
```

## Know the map setup

MapLibre 6 needs a worker URL. The dev and build commands copy the worker from the installed package into public. The map wrapper loads browser-only code. Do not copy a Vite-specific worker import into Next.js.

```jsx
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
maplibregl.setWorkerUrl("/maplibre-worker.mjs");
```

## Use official documentation

Read the documentation for your installed version. Keep attribution visible and check a map provider separately from the library.

```jsx
// React wrapper: https://visgl.github.io/react-map-gl/
// Renderer: https://maplibre.org/
// Map styles and tiles: https://openfreemap.org/
```

export const lesson = {
  topic: "libraries",
  slug: "packages",
  title: "Find and install a library",
  summary: "Choose a package for a real need, then understand what pnpm adds.",
  steps: [
    "Use the checklist to evaluate the map packages.",
    "Find the two packages in package.json.",
    "Find their exact installed versions in the lockfile.",
  ],
  explanations: [
    {
      title: "1. Separate the package and the service",
      text: "MapLibre draws the map. react-map-gl provides React components. OpenFreeMap supplies map data and styles. Installing a renderer does not download the whole world.",
      code: "// Install in the project terminal:\n// pnpm add react-map-gl maplibre-gl",
    },
    {
      title: "2. Understand the files",
      text: "package.json lists the dependencies you request. pnpm-lock.yaml records the resolved versions. Keep the lockfile so classmates install the same dependency tree.",
      code: "// Reproduce the recorded installation:\n// pnpm install --frozen-lockfile",
    },
    {
      title: "3. Follow the documentation in small steps",
      text: "First render one map. Then add one marker. Add interaction after the small version works. Check peer dependencies rather than bypassing compatibility errors.",
      code: "// Find \u2192 evaluate \u2192 install \u2192 import \u2192 configure \u2192 render",
    },
  ],
};

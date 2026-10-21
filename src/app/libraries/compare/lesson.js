export const lesson = {
  topic: "libraries",
  slug: "compare",
  title: "Compare libraries for a task",
  summary:
    "Use a small map project to compare libraries, React wrappers, and tile services.",
  steps: [
    "Choose a project task. Read the suggested starting point and what to test.",
    "Compare Leaflet and MapLibre in the table. Neither is the best choice for every project.",
    "Open each working example. Test one marker, one popup, and the classroom device before adding more features.",
  ],
  explanations: [
    {
      title: "1. Describe the task before choosing",
      text: "Write a short list of things the project needs. For a map, that might mean showing a few places, opening a popup, and working on school devices. Evaluate those needs before choosing a package.",
      code: "// Need: a map, three places, a popup, and a readable list.\n// Test: device support, setup, keyboard use, and resizing.",
    },
    {
      title: "2. Compare the same concerns",
      text: "Leaflet is a practical option for conventional 2D maps with raster tiles and markers. MapLibre is useful for vector-map styling, rotation, and pitch. Try a working example on the actual devices. These are different tools, not a ranking based on an invented score.",
      code: '// Leaflet + React Leaflet:\nimport { MapContainer, TileLayer, Marker } from "react-leaflet";\n\n// MapLibre + react-map-gl:\nimport { Map } from "react-map-gl/maplibre";',
    },
    {
      title: "3. Separate the renderer, wrapper, and service",
      text: "The renderer draws the map. A React wrapper gives it React components. A tile service supplies the map imagery or vector data. Leaflet is paired with React Leaflet here; MapLibre is paired with react-map-gl. Their tile providers are a separate choice.",
      code: "// Leaflet \u2192 React Leaflet \u2192 OpenStreetMap raster tiles\n// MapLibre \u2192 react-map-gl \u2192 OpenFreeMap styles and tiles",
    },
    {
      title: "4. Check compatibility and setup",
      text: "Read the official documentation and peer dependencies for the version you install. This project uses Leaflet 1.9.4 and React Leaflet 5.0.0 with React 19. Both map demos load browser-only code in Next.js and include their required CSS.",
      code: "// Ask before installing:\n// Does it support our React version?\n// Does it need browser-only loading or extra CSS?\n// Which tile service, attribution, or account does it need?",
    },
    {
      title: "5. Build a small comparison before committing",
      text: "Install only what you need for the prototype. Keep a readable list beside the map. Compare setup effort and behavior, including tabs and small screens. A tile service or network failure does not automatically mean the renderer is broken. The two demos use different tile services, so they are not a controlled speed benchmark.",
      code: "// Build the smallest useful prototype.\n// Test the same tasks with both options.\n// Choose based on your project\u2019s needs and what you observed.",
    },
  ],
};

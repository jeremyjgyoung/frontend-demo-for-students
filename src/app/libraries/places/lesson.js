export const lesson = {
  topic: "libraries",
  slug: "places",
  title: "Show places and popups",
  summary:
    "Use a real map with local sample places. Learn one small step at a time.",
  steps: [
    "Wait for the map to load, then use its zoom controls.",
    "Choose a place and read its details.",
  ],
  explanations: [
    {
      title: "1. Give the map a starting view",
      text: "Longitude identifies east or west. Latitude identifies north or south. The component uses named properties. Array coordinates in MapLibre use longitude first, then latitude.",
      code: "initialViewState={{ longitude: -123.12, latitude: 49.287, zoom: 11 }}",
    },
    {
      title: "2. Supply the style and space",
      text: "The style URL points to the map design and tile sources. A real height makes the map visible. The map needs network access and WebGL. The app serves its matching worker file locally.",
      code: '<Map mapLib={maplibregl}\n  style={{ width: "100%", height: 380 }}\n  mapStyle="https://tiles.openfreemap.org/styles/liberty" />',
    },
    {
      title: "3. Use local place objects",
      text: "Each place has a stable ID and named coordinates. map creates a marker for each object. A named click handler stores the selected object. Keep a text list for people who do not use the visual map.",
      code: "onClick={function choosePlace(event) {\n  event.stopPropagation();\n  setSelected(place);\n}}",
    },
    {
      title: "Browser-only setup",
      text: "The map needs browser features. map-preview.jsx loads it only in the browser. A worker runs map calculations separately from the page. The dev and build scripts prepare the matching worker file. You do not need to write a worker yourself.",
      code: 'const BrowserMap = dynamic(function loadMap() {\n  return import("./demo").then(function getMap(module) {\n    return module.LessonDemo;\n  });\n}, { ssr: false });',
    },
  ],
};

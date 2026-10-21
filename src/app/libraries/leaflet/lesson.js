export const lesson = {
  topic: "libraries",
  slug: "leaflet",
  title: "Render a map with Leaflet",
  summary:
    "Use React Leaflet to show a real map, three markers, and popups in Next.js.",
  steps: [
    "Zoom and drag the map. Open a marker to read its popup.",
    "Read the same places in the list below the map. The list remains useful if map tiles fail.",
    "Switch to Explanation and back to Preview. Resize the window and check the map.",
    "Inspect demo.jsx and map-preview.jsx. Find the CSS, marker assets, coordinate order, and browser-only loader.",
  ],
  explanations: [
    {
      title: "1. Install the renderer and React wrapper",
      text: "Leaflet draws the map. React Leaflet supplies React components for it. The stable pair installed here is Leaflet 1.9.4 and React Leaflet 5.0.0, compatible with the project\u2019s React 19. These packages are already included in this download. For a separate project, run this from its package.json folder.",
      code: "pnpm add leaflet@1.9.4 react-leaflet@5.0.0",
    },
    {
      title: "2. Load browser-only code in Next.js",
      text: "Leaflet expects a browser environment. map-preview.jsx uses next/dynamic with ssr: false to load the map there. Keep this loader in a Client Component. The server page can still provide metadata and the lesson frame.",
      code: 'const BrowserMap = dynamic(\n  function loadMap() {\n    return import("./demo").then(function getMap(module) {\n      return module.LessonDemo;\n    });\n  },\n  { ssr: false },\n);',
    },
    {
      title: "3. Add CSS, a height, and a tile service",
      text: "The stylesheet positions the controls and tiles. A map needs a visible height. Leaflet does not include world imagery: TileLayer requests raster tiles from OpenStreetMap. Keep the attribution visible and read the provider\u2019s usage policy. No account or API key is needed for this small example.",
      code: 'import "leaflet/dist/leaflet.css";\n\n<MapContainer center={[49.287, -123.12]} zoom={12}\n  scrollWheelZoom={false} style={{ height: 380, width: "100%" }}>\n  <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"\n    attribution=\'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors\' />\n</MapContainer>',
    },
    {
      title: "4. Set marker image URLs explicitly",
      text: "The default marker images need correct URLs after bundling. Import Leaflet\u2019s image files and pass their .src URLs into icon. Keep the icon size and anchor values together. This avoids guessing an image directory or changing Leaflet\u2019s global defaults.",
      code: 'import { icon } from "leaflet";\nimport markerImage from "leaflet/dist/images/marker-icon.png";\n\nconst placeIcon = icon({\n  iconUrl: markerImage.src,\n  iconSize: [25, 41],\n  iconAnchor: [12, 41],\n});',
    },
    {
      title: "5. Read the coordinate order",
      text: "Leaflet position arrays use latitude first, then longitude. Each marker has a popup and a useful name. The ordinary HTML list gives people another way to read the same place information.",
      code: "<Marker position={[place.latitude, place.longitude]}\n  icon={placeIcon} alt={place.name} title={place.name}>\n  <Popup><h3>{place.name}</h3><p>{place.description}</p></Popup>\n</Marker>",
    },
    {
      title: "6. Recheck the container after a size change",
      text: "A map measures its container. Hiding it in a tab or changing the window can change that size. The small ResizeMap component calls invalidateSize when the visible container changes. It is beside the map code so you can read the reason and cleanup.",
      code: "const map = useMap();\n// A ResizeObserver watches map.getContainer().\n// When the container is visible:\nmap.invalidateSize({ pan: false });\n// The effect disconnects its observer on cleanup.",
    },
  ],
};

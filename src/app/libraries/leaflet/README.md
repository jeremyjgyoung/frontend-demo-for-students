# Render a map with Leaflet

Use React Leaflet to show a real map, three markers, and popups in Next.js.

## Try it

1. Zoom and drag the map. Open a marker to read its popup.
2. Read the same places in the list below the map. The list remains useful if map tiles fail.
3. Switch to Explanation and back to Preview. Resize the window and check the map.
4. Inspect demo.jsx and map-preview.jsx. Find the CSS, marker assets, coordinate order, and browser-only loader.

## How it works

### 1. Install the renderer and React wrapper

Leaflet draws the map. React Leaflet supplies React components for it. The stable pair installed here is Leaflet 1.9.4 and React Leaflet 5.0.0, compatible with the project’s React 19. These packages are already included in this download. For a separate project, run this from its package.json folder.

```bash
pnpm add leaflet@1.9.4 react-leaflet@5.0.0
```

### 2. Load browser-only code in Next.js

Leaflet expects a browser environment. map-preview.jsx uses next/dynamic with ssr: false to load the map there. Keep this loader in a Client Component. The server page can still provide metadata and the lesson frame.

```jsx
const BrowserMap = dynamic(
  function loadMap() {
    return import("./demo").then(function getMap(module) {
      return module.LessonDemo;
    });
  },
  { ssr: false },
);
```

### 3. Add CSS, a height, and a tile service

The stylesheet positions the controls and tiles. A map needs a visible height. Leaflet does not include world imagery: TileLayer requests raster tiles from OpenStreetMap. Keep the attribution visible and read the provider’s usage policy. No account or API key is needed for this small example.

```jsx
import "leaflet/dist/leaflet.css";

<MapContainer
  center={[49.287, -123.12]}
  zoom={12}
  scrollWheelZoom={false}
  style={{ height: 380, width: "100%" }}
>
  <TileLayer
    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />
</MapContainer>;
```

### 4. Set marker image URLs explicitly

The default marker images need correct URLs after bundling. Import Leaflet’s image files and pass their .src URLs into icon. Keep the icon size and anchor values together. This avoids guessing an image directory or changing Leaflet’s global defaults.

```jsx
import { icon } from "leaflet";
import markerImage from "leaflet/dist/images/marker-icon.png";

const placeIcon = icon({
  iconUrl: markerImage.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
```

### 5. Read the coordinate order

Leaflet position arrays use latitude first, then longitude. Each marker has a popup and a useful name. The ordinary HTML list gives people another way to read the same place information.

```jsx
<Marker
  position={[place.latitude, place.longitude]}
  icon={placeIcon}
  alt={place.name}
  title={place.name}
>
  <Popup>
    <h3>{place.name}</h3>
    <p>{place.description}</p>
  </Popup>
</Marker>
```

### 6. Recheck the container after a size change

A map measures its container. Hiding it in a tab or changing the window can change that size. The small ResizeMap component calls invalidateSize when the visible container changes. It is beside the map code so you can read the reason and cleanup.

```jsx
const map = useMap();
// A ResizeObserver watches map.getContainer().
// When the container is visible:
map.invalidateSize({ pan: false });
// The effect disconnects its observer on cleanup.
```

## Try a change

Change one small part. Predict the result, check the preview, and explain what happened.

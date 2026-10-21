# Show places and popups

Use a real map with local sample places. Learn one small step at a time.

## Try it

1. Wait for the map to load, then use its zoom controls.
2. Choose a place and read its details.

## How it works

### 1. Give the map a starting view

Longitude identifies east or west. Latitude identifies north or south. The component uses named properties. Array coordinates in MapLibre use longitude first, then latitude.

```jsx
initialViewState={{ longitude: -123.12, latitude: 49.287, zoom: 11 }}
```

### 2. Supply the style and space

The style URL points to the map design and tile sources. A real height makes the map visible. The map needs network access and WebGL. The app serves its matching worker file locally.

```jsx
<Map
  mapLib={maplibregl}
  style={{ width: "100%", height: 380 }}
  mapStyle="https://tiles.openfreemap.org/styles/liberty"
/>
```

### 3. Use local place objects

Each place has a stable ID and named coordinates. map creates a marker for each object. A named click handler stores the selected object. Keep a text list for people who do not use the visual map.

```jsx
onClick={function choosePlace(event) {
  event.stopPropagation();
  setSelected(place);
}}
```

### Browser-only setup

The map needs browser features. map-preview.jsx loads it only in the browser. A worker runs map calculations separately from the page. The dev and build scripts prepare the matching worker file. You do not need to write a worker yourself.

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

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

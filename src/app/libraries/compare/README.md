# Compare libraries for a task

Use a small map project to compare libraries, React wrappers, and tile services.

## Try it

1. Choose a project task. Read the suggested starting point and what to test.
2. Compare Leaflet and MapLibre in the table. Neither is the best choice for every project.
3. Open each working example. Test one marker, one popup, and the classroom device before adding more features.

## How it works

### 1. Describe the task before choosing

Write a short list of things the project needs. For a map, that might mean showing a few places, opening a popup, and working on school devices. Evaluate those needs before choosing a package.

```jsx
// Need: a map, three places, a popup, and a readable list.
// Test: device support, setup, keyboard use, and resizing.
```

### 2. Compare the same concerns

Leaflet is a practical option for conventional 2D maps with raster tiles and markers. MapLibre is useful for vector-map styling, rotation, and pitch. Try a working example on the actual devices. These are different tools, not a ranking based on an invented score.

```jsx
// Leaflet + React Leaflet:
import { MapContainer, TileLayer, Marker } from "react-leaflet";

// MapLibre + react-map-gl:
import { Map } from "react-map-gl/maplibre";
```

### 3. Separate the renderer, wrapper, and service

The renderer draws the map. A React wrapper gives it React components. A tile service supplies the map imagery or vector data. Leaflet is paired with React Leaflet here; MapLibre is paired with react-map-gl. Their tile providers are a separate choice.

```jsx
// Leaflet → React Leaflet → OpenStreetMap raster tiles
// MapLibre → react-map-gl → OpenFreeMap styles and tiles
```

### 4. Check compatibility and setup

Read the official documentation and peer dependencies for the version you install. This project uses Leaflet 1.9.4 and React Leaflet 5.0.0 with React 19. Both map demos load browser-only code in Next.js and include their required CSS.

```jsx
// Ask before installing:
// Does it support our React version?
// Does it need browser-only loading or extra CSS?
// Which tile service, attribution, or account does it need?
```

### 5. Build a small comparison before committing

Install only what you need for the prototype. Keep a readable list beside the map. Compare setup effort and behavior, including tabs and small screens. A tile service or network failure does not automatically mean the renderer is broken. The two demos use different tile services, so they are not a controlled speed benchmark.

```jsx
// Build the smallest useful prototype.
// Test the same tasks with both options.
// Choose based on your project’s needs and what you observed.
```

## Try a change

Change one small part. Predict the result, check the preview, and explain what happened.

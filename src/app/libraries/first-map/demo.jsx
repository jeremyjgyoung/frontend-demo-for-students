"use client";
import { useState } from "react";
import { Map, NavigationControl } from "react-map-gl/maplibre";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
// prepare-map.mjs copies this worker from the installed MapLibre version.
maplibregl.setWorkerUrl("/maplibre-worker.mjs");
export function LessonDemo() {
  const [mapError, setMapError] = useState("");
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Map imagery loads from OpenFreeMap. Keep its attribution visible. No
        account or API key is required for this example.
      </p>
      {mapError && (
        <p role="alert" className="rounded border p-4">
          {mapError} The location details below are still available. Check
          WebGL, the network, and the worker file.
        </p>
      )}
      <div
        className="overflow-hidden rounded-xl border"
        aria-label="Map of Vancouver places"
      >
        <Map
          mapLib={maplibregl}
          initialViewState={{ longitude: -123.12, latitude: 49.287, zoom: 11 }}
          style={{ width: "100%", height: 380 }}
          mapStyle="https://tiles.openfreemap.org/styles/liberty"
          scrollZoom={false}
          onError={function reportMapError() {
            setMapError("The map could not load all of its resources.");
          }}
        >
          <NavigationControl position="top-right" />
        </Map>
      </div>
      <p>Starting position: Vancouver, latitude 49.287, longitude −123.12.</p>
    </div>
  );
}

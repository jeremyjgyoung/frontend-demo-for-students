"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Map, Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
// prepare-map.mjs copies this worker from the installed MapLibre version.
maplibregl.setWorkerUrl("/maplibre-worker.mjs");
export function LessonDemo() {
  const [mapError, setMapError] = useState("");
  const [selected, setSelected] = useState(null);
  const places = [
    {
      id: "library",
      name: "Central Library",
      longitude: -123.1127,
      latitude: 49.2797,
      description: "A place to read and study.",
    },
    {
      id: "park",
      name: "Stanley Park",
      longitude: -123.1417,
      latitude: 49.3043,
      description: "Trails beside the water.",
    },
    {
      id: "science",
      name: "Science World",
      longitude: -123.1039,
      latitude: 49.2734,
      description: "Science exhibits by the inlet.",
    },
  ];
  const mapRef = useRef(null);
  return (
    <div className="space-y-4">
      <ul className="flex flex-wrap gap-2">
        {places.map(function renderPlace(place) {
          return (
            <li key={place.id}>
              <Button
                variant={selected?.id === place.id ? "default" : "outline"}
                aria-pressed={selected?.id === place.id}
                onClick={function selectPlace() {
                  setSelected(place);
                  mapRef.current?.flyTo({
                    center: [place.longitude, place.latitude],
                    zoom: 14,
                    duration: window.matchMedia(
                      "(prefers-reduced-motion: reduce)",
                    ).matches
                      ? 0
                      : 700,
                  });
                }}
              >
                {place.name}
              </Button>
            </li>
          );
        })}
      </ul>
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
          ref={mapRef}
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
          {places.map(function renderMarker(place) {
            return (
              <Marker
                key={place.id}
                longitude={place.longitude}
                latitude={place.latitude}
                anchor="bottom"
              >
                <button
                  type="button"
                  className="rounded-full border-2 border-white bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow"
                  aria-label={"Show " + place.name}
                  onClick={function choosePlace(event) {
                    event.stopPropagation();
                    setSelected(place);
                  }}
                >
                  {place.name}
                </button>
              </Marker>
            );
          })}
          {selected && (
            <Popup
              longitude={selected.longitude}
              latitude={selected.latitude}
              anchor="top"
              onClose={function closePopup() {
                setSelected(null);
              }}
              closeOnClick={false}
            >
              <div className="p-2 text-slate-900">
                <h2 className="font-semibold">{selected.name}</h2>
                <p>{selected.description}</p>
              </div>
            </Popup>
          )}
        </Map>
      </div>
      <ul className="space-y-2">
        {places.map(function describePlace(place) {
          return (
            <li key={place.id}>
              <strong>{place.name}</strong>: {place.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

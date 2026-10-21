"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { icon } from "leaflet";
import markerImage from "leaflet/dist/images/marker-icon.png";
import markerRetinaImage from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

// Explicit bundled URLs keep marker images working in Next.js.
const placeIcon = icon({
  iconUrl: markerImage.src,
  iconRetinaUrl: markerRetinaImage.src,
  shadowUrl: markerShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function ResizeMap() {
  const map = useMap();
  useEffect(
    function watchContainer() {
      const container = map.getContainer();
      const observer = new ResizeObserver(function updateSize() {
        // A hidden lesson tab has no usable dimensions yet.
        if (container.clientWidth > 0 && container.clientHeight > 0) {
          map.invalidateSize({ pan: false });
        }
      });
      observer.observe(container);
      return function stopWatching() {
        observer.disconnect();
      };
    },
    [map],
  );
  return null;
}

export function LessonDemo() {
  const [tileError, setTileError] = useState(false);
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
  return (
    <div className="space-y-5">
      <p className="text-sm leading-6 text-muted-foreground">
        Leaflet draws this map. React Leaflet provides its React components.
        OpenStreetMap serves the raster tiles. Keep the attribution visible.
      </p>
      {tileError && (
        <p role="alert" className="rounded-xl border p-4">
          Some map tiles did not load. Check the network and tile service. The
          place list below is still available.
        </p>
      )}
      <section
        aria-label="Leaflet map of Vancouver places"
        className="relative isolate z-0 overflow-hidden rounded-xl border"
      >
        <MapContainer
          center={[49.287, -123.12]}
          zoom={12}
          scrollWheelZoom={false}
          style={{ height: 380, width: "100%" }}
        >
          <ResizeMap />
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            eventHandlers={{
              tileerror: function reportTileError() {
                setTileError(true);
              },
            }}
          />
          {places.map(function showMarker(place) {
            return (
              <Marker
                key={place.id}
                position={[place.latitude, place.longitude]}
                icon={placeIcon}
                alt={place.name}
                title={place.name}
              >
                <Popup>
                  <h3 className="font-semibold">{place.name}</h3>
                  <p>{place.description}</p>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </section>
      <section className="space-y-4 rounded-xl border p-6">
        <h2 className="text-2xl font-semibold">
          The same places as readable text
        </h2>
        <ul className="space-y-4">
          {places.map(function showPlace(place) {
            return (
              <li key={place.id} className="space-y-1">
                <h3 className="font-semibold">{place.name}</h3>
                <p>{place.description}</p>
                <p className="text-sm text-muted-foreground">
                  Latitude {place.latitude}, longitude {place.longitude}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
      <p className="text-sm leading-7">
        <a
          href="https://react-leaflet.js.org/docs/start-setup/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          React Leaflet setup (new tab)
        </a>
        {" · "}
        <a
          href="https://operations.osmfoundation.org/policies/tiles/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          OpenStreetMap tile usage (new tab)
        </a>
      </p>
    </div>
  );
}

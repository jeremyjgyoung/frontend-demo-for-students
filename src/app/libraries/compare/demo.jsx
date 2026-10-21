"use client";
import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
export function LessonDemo() {
  const [task, setTask] = useState("places");
  const advice = {
    places: {
      start: "Try Leaflet first for this small prototype.",
      why: "A conventional 2D map with a few markers and popups fits this task. Check the CSS, marker images, and React setup. MapLibre can do this task too.",
    },
    style: {
      start: "Try MapLibre first for this prototype.",
      why: "Vector-map styling, rotation, and pitch are central to this task. Test the GPU-backed renderer on school devices and check its worker setup.",
    },
    devices: {
      start: "Test both on the devices you will use.",
      why: "The Leaflet raster example does not require WebGL. The MapLibre example needs supported graphics capabilities. Both still depend on a working tile service and network.",
    },
  };
  const choice = advice[task];
  const rows = [
    {
      topic: "A useful starting task",
      leaflet: "A conventional 2D map with markers and popups.",
      maplibre: "A map with vector styling, rotation, or pitch.",
    },
    {
      topic: "React wrapper",
      leaflet: "React Leaflet",
      maplibre: "react-map-gl/maplibre",
    },
    {
      topic: "Rendering in these demos",
      leaflet: "Raster image tiles with DOM markers; no WebGL required.",
      maplibre: "GPU-backed map renderer; check device graphics support.",
    },
    {
      topic: "Next.js setup",
      leaflet:
        "Browser-only loader, CSS, explicit marker assets, and map height.",
      maplibre: "Browser-only loader, CSS, a matching worker, and map height.",
    },
    {
      topic: "Coordinates",
      leaflet: "Arrays use [latitude, longitude].",
      maplibre: "The example uses named longitude and latitude properties.",
    },
    {
      topic: "Tile service used here",
      leaflet: "OpenStreetMap raster tiles",
      maplibre: "OpenFreeMap styles and tiles",
    },
    {
      topic: "Check in either library",
      leaflet:
        "Attribution, provider terms, keyboard use, list fallback, and resizing.",
      maplibre:
        "Attribution, provider terms, keyboard use, list fallback, and resizing.",
    },
  ];
  return (
    <div className="space-y-6">
      <section className="space-y-5 rounded-xl border p-6">
        <h2 className="text-2xl font-semibold">
          Start with your project’s task
        </h2>
        <label className="block space-y-2">
          <span>Project task</span>
          <select
            value={task}
            onChange={function chooseTask(event) {
              setTask(event.target.value);
            }}
            className="block w-full rounded border bg-background p-2"
          >
            <option value="places">A few places and popups</option>
            <option value="style">
              Custom vector styling and map rotation
            </option>
            <option value="devices">Support the classroom devices</option>
          </select>
        </label>
        <div role="status" className="space-y-3 rounded-xl bg-muted/40 p-5">
          <p className="font-semibold">{choice.start}</p>
          <p className="leading-7">{choice.why}</p>
        </div>
        <p className="text-sm leading-6 text-muted-foreground">
          This is a starting point for testing, not an automatic winner or a
          performance score.
        </p>
      </section>
      <section className="min-w-0 space-y-4">
        <h2 className="text-2xl font-semibold">Compare the same concerns</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full min-w-[38rem] text-left text-sm">
            <caption className="p-4 text-left text-muted-foreground">
              Map libraries and the setup used in this project
            </caption>
            <thead className="border-y bg-muted/40">
              <tr>
                <th scope="col" className="p-4">
                  Question
                </th>
                <th scope="col" className="p-4">
                  Leaflet
                </th>
                <th scope="col" className="p-4">
                  MapLibre
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(function showRow(row) {
                return (
                  <tr key={row.topic} className="border-b last:border-0">
                    <th scope="row" className="p-4 align-top font-semibold">
                      {row.topic}
                    </th>
                    <td className="p-4 align-top leading-6">{row.leaflet}</td>
                    <td className="p-4 align-top leading-6">{row.maplibre}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      <section className="space-y-4 rounded-xl border p-6">
        <h2 className="text-2xl font-semibold">Try the working examples</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/libraries/leaflet" className={buttonVariants()}>
            Open Leaflet demo
          </Link>
          <Link
            href="/libraries/first-map"
            className={buttonVariants({ variant: "outline" })}
          >
            Open MapLibre demo
          </Link>
        </div>
        <p className="text-sm leading-6 text-muted-foreground">
          The examples use different tile providers. Compare the features and
          setup; do not treat their loading times as a controlled comparison.
        </p>
      </section>
      <p className="text-sm leading-7">
        <a
          href="https://leafletjs.com/examples/quick-start/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Leaflet guide (new tab)
        </a>
        {" · "}
        <a
          href="https://maplibre.org/maplibre-gl-js/docs/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          MapLibre guide (new tab)
        </a>
      </p>
    </div>
  );
}

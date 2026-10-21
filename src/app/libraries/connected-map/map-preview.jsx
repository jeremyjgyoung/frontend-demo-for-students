"use client";
import dynamic from "next/dynamic";
const BrowserMap = dynamic(
  function loadMap() {
    return import("./demo").then(function getMap(module) {
      return module.LessonDemo;
    });
  },
  {
    ssr: false,
    loading: function LoadingMap() {
      return (
        <p role="status" className="rounded-xl border p-8">
          Loading the map library…
        </p>
      );
    },
  },
);
export function MapPreview() {
  return <BrowserMap />;
}

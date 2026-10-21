"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
// Keep the library import in the optional file, not in this initial component.
const ActivityChart = dynamic(
  function loadChart() {
    return import("./activity-chart").then(function getChart(module) {
      return module.ActivityChart;
    });
  },
  {
    ssr: false,
    loading: function LoadingChart() {
      return (
        <p role="status" className="rounded-xl bg-muted p-5">
          Loading chart code…
        </p>
      );
    },
  },
);
export function LessonDemo() {
  const [showChart, setShowChart] = useState(false);
  const activities = [
    { club: "Art", members: 12 },
    { club: "Outdoors", members: 18 },
    { club: "Music", members: 9 },
  ];
  function toggleChart() {
    setShowChart(!showChart);
  }
  return (
    <section className="min-w-0 space-y-6 rounded-xl border p-6">
      <h2 className="text-2xl font-semibold">
        Useful now, optional chart later
      </h2>
      <ul className="space-y-2">
        {activities.map(function showActivity(activity) {
          return (
            <li key={activity.club}>
              {activity.club}: {activity.members} members
            </li>
          );
        })}
      </ul>
      <Button
        onClick={toggleChart}
        aria-expanded={showChart}
        aria-controls="optional-chart"
      >
        {showChart ? "Hide chart" : "Show chart"}
      </Button>
      <div id="optional-chart" hidden={!showChart}>
        {showChart && <ActivityChart activities={activities} />}
      </div>
      <p className="text-sm leading-6 text-muted-foreground">
        On the first open, the dynamic import requests the chart code. Hiding
        the chart later does not unload that code or clear the browser cache.
        Inspect Network to see what your browser actually requests.
      </p>
    </section>
  );
}

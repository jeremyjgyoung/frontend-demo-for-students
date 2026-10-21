"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  const activities = [
    { id: 1, name: "Trail walk", category: "Outdoors", cost: 0 },
    { id: 2, name: "Poster workshop", category: "Art", cost: 5 },
    { id: 3, name: "Photo walk", category: "Art", cost: 0 },
    { id: 4, name: "Garden club", category: "Outdoors", cost: 2 },
  ];
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("name");
  const visible = activities
    .filter(function matches(activity) {
      const nameMatches = activity.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());
      const categoryMatches =
        category === "All" || activity.category === category;
      return nameMatches && categoryMatches;
    })
    .sort(function compare(a, b) {
      return sort === "cost" ? a.cost - b.cost : a.name.localeCompare(b.name);
    });
  function resetFilters() {
    setSearch("");
    setCategory("All");
    setSort("name");
  }
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="space-y-2">
          <span>Search activities</span>
          <input
            className="w-full rounded border bg-background p-2"
            value={search}
            onChange={function searchActivities(event) {
              setSearch(event.target.value);
            }}
          />
        </label>
        <label className="space-y-2">
          <span>Category</span>
          <select
            className="w-full rounded border bg-background p-2"
            value={category}
            onChange={function chooseCategory(event) {
              setCategory(event.target.value);
            }}
          >
            <option>All</option>
            <option>Art</option>
            <option>Outdoors</option>
          </select>
        </label>
        <label className="space-y-2">
          <span>Sort by</span>
          <select
            className="w-full rounded border bg-background p-2"
            value={sort}
            onChange={function chooseSort(event) {
              setSort(event.target.value);
            }}
          >
            <option value="name">Name</option>
            <option value="cost">Cost</option>
          </select>
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <p role="status">
          {visible.length} activities · Category: {category}
        </p>
        <Button variant="outline" onClick={resetFilters}>
          Reset filters
        </Button>
      </div>
      {visible.length === 0 ? (
        <p className="rounded border p-6">
          No activities match. Try a different word or reset the filters.
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {visible.map(function renderActivity(activity) {
            return (
              <li key={activity.id} className="rounded-xl border p-5">
                <h2 className="font-semibold">{activity.name}</h2>
                <p>
                  {activity.category} · ${activity.cost}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

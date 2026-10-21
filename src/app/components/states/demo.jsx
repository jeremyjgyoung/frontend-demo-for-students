"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
export function LessonDemo() {
  const [status, setStatus] = useState("empty");
  return (
    <div className="space-y-5">
      <label className="flex flex-wrap items-center gap-3">
        Simulated state
        <select
          value={status}
          className="rounded border bg-background p-2"
          onChange={function changeStatus(event) {
            setStatus(event.target.value);
          }}
        >
          <option value="empty">Empty</option>
          <option value="loading">Loading</option>
          <option value="error">Error</option>
          <option value="success">Success</option>
        </select>
      </label>
      <section
        className="space-y-4 rounded-xl border p-6"
        aria-label="Trip results"
        aria-busy={status === "loading"}
      >
        {status === "empty" && (
          <>
            <h2 className="text-xl font-semibold">
              No trips match these filters
            </h2>
            <p>Try another category or clear your filters.</p>
            <Button
              variant="outline"
              onClick={function clearFilters() {
                setStatus("success");
              }}
            >
              Clear filters
            </Button>
          </>
        )}
        {status === "loading" && (
          <>
            <p role="status">Finding trips…</p>
            <div className="h-16 animate-pulse rounded bg-muted" />
            <Button disabled>Loading…</Button>
          </>
        )}
        {status === "error" && (
          <>
            <h2 className="text-xl font-semibold">
              We could not load the trips
            </h2>
            <p role="alert">Your choices are still here. Try again.</p>
            <Button
              onClick={function retry() {
                setStatus("success");
              }}
            >
              Try again
            </Button>
          </>
        )}
        {status === "success" && (
          <>
            <h2 className="text-xl font-semibold">Friday walk</h2>
            <p role="status">One trip found.</p>
            <Button
              variant="outline"
              onClick={function saveTrip() {
                toast.success("Trip saved for this preview.");
              }}
            >
              Save trip
            </Button>
          </>
        )}
      </section>
      <p className="text-sm text-muted-foreground">
        These states are simulated. There is no network request or saved
        account.
      </p>
    </div>
  );
}

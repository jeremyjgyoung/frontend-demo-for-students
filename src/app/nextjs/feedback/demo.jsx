"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LessonDemo() {
  const [loading, setLoading] = useState(false);
  function loadExample() {
    setLoading(true);
    // A short delay lets students inspect the loading state. No API is called.
    setTimeout(function finishLoading() {
      setLoading(false);
    }, 1400);
  }
  return (
    <div className="space-y-5 rounded-xl border p-6">
      <Button onClick={loadExample} disabled={loading}>
        {loading ? "Loading…" : "Try loading feedback"}
      </Button>
      <div aria-live="polite" aria-busy={loading}>
        {loading ? (
          <div className="h-24 animate-pulse rounded bg-muted" role="status">
            Loading club details…
          </div>
        ) : (
          <p>Club details are ready.</p>
        )}
      </div>
      <Link href="/this-page-does-not-exist" className="block underline">
        Open a missing page
      </Link>
      <Link
        href="/nextjs/feedback/slow"
        className="block underline"
        prefetch={false}
      >
        Try a real Next.js loading page
      </Link>
    </div>
  );
}

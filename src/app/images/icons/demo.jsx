"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Compass, Heart } from "lucide-react";
export function LessonDemo() {
  const [size, setSize] = useState(32);
  const [stroke, setStroke] = useState(2);
  const [saved, setSaved] = useState(false);
  return (
    <div className="space-y-6 rounded-xl border p-6">
      <label className="flex flex-wrap items-center gap-3">
        Icon size: {size}px
        <input
          type="range"
          min="16"
          max="64"
          value={size}
          onChange={function changeSize(event) {
            setSize(Number(event.target.value));
          }}
        />
      </label>
      <label className="flex flex-wrap items-center gap-3">
        Stroke: {stroke}
        <input
          type="range"
          min="1"
          max="3"
          step="0.5"
          value={stroke}
          onChange={function changeStroke(event) {
            setStroke(Number(event.target.value));
          }}
        />
      </label>
      <Compass
        size={size}
        strokeWidth={stroke}
        className="text-blue-600"
        aria-hidden="true"
      />
      <Button
        variant="outline"
        size="icon"
        aria-label="Save this place"
        aria-pressed={saved}
        onClick={function toggleSaved() {
          setSaved(!saved);
        }}
      >
        <Heart
          className={saved ? "fill-rose-600 text-rose-600" : ""}
          aria-hidden="true"
        />
      </Button>
      <p aria-live="polite">{saved ? "Place saved." : "Place not saved."}</p>
    </div>
  );
}

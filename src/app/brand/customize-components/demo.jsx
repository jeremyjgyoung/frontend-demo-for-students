"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
export function LessonDemo() {
  const [variant, setVariant] = useState("outline");
  const [pill, setPill] = useState(false);
  return (
    <div className="space-y-6 rounded-xl border p-6">
      <div className="flex flex-wrap items-center gap-5">
        <label className="flex items-center gap-3">
          Shared variant
          <select
            className="rounded border bg-background p-2"
            value={variant}
            onChange={function changeVariant(event) {
              setVariant(event.target.value);
            }}
          >
            <option value="default">default</option>
            <option value="outline">outline</option>
            <option value="secondary">secondary</option>
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            checked={pill}
            onChange={function changePill(event) {
              setPill(event.target.checked);
            }}
          />{" "}
          Pill-shaped actions
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant={variant}
          size="lg"
          className={pill ? "rounded-full" : ""}
        >
          A button action
        </Button>
        <Link
          href="/brand/style-guide"
          className={buttonVariants({
            variant: variant,
            size: "lg",
            className: pill ? "rounded-full" : "",
          })}
        >
          A link to the style guide
        </Link>
      </div>
      <p className="leading-7 text-muted-foreground">
        The controls share visual choices. One performs an action; the other
        opens a page. Keep those behaviors distinct.
      </p>
      <Button
        variant="ghost"
        onClick={function resetPreview() {
          setVariant("outline");
          setPill(false);
        }}
      >
        Reset preview
      </Button>
    </div>
  );
}

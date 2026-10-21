"use client";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
export function LessonDemo() {
  const [newsletter, setNewsletter] = useState(false);
  const [quiet, setQuiet] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <article className="space-y-4 rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Navigate or act?</h2>
        <Link href="/images" className={buttonVariants({ variant: "outline" })}>
          Open image lessons
        </Link>
        <Button
          onClick={function showMessage() {
            setMessage("You performed an action. The URL did not change.");
          }}
        >
          Show a message
        </Button>
        <p aria-live="polite">{message}</p>
      </article>
      <article className="space-y-5 rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Choose or switch?</h2>
        <label className="flex items-center gap-3">
          <Checkbox
            checked={newsletter}
            onCheckedChange={function changeNewsletter(value) {
              setNewsletter(value === true);
            }}
          />
          Include the newsletter
        </label>
        <label className="flex items-center gap-3">
          <Switch
            checked={quiet}
            onCheckedChange={function changeQuiet(value) {
              setQuiet(value);
            }}
          />
          Quiet mode
        </label>
        <p>
          {newsletter ? "Newsletter included." : "Newsletter not included."}{" "}
          {quiet ? "Quiet mode is on." : "Quiet mode is off."}
        </p>
      </article>
    </div>
  );
}

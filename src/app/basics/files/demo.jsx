"use client";
import { useState } from "react";
export function LessonDemo() {
  const [task, setTask] = useState("home");
  const choices = {
    home: {
      file: "src/app/page.jsx",
      reason:
        "Change the home page content. In this course, open the lesson folder’s demo.jsx to study its example.",
    },
    shared: {
      file: "src/app/layout.jsx",
      reason: "Change the shared page wrapper, default title, or providers.",
    },
    colors: {
      file: "src/app/globals.css",
      reason:
        "Change the shared theme colors. A one-off style can stay in the page’s className.",
    },
    image: {
      file: "public/club-photo.webp",
      reason: "Add the image here. Refer to it in JSX as /club-photo.webp.",
    },
    icon: {
      file: "src/app/icon.svg",
      reason:
        "Replace the browser icon. The page heading and the browser tab title are separate.",
    },
    button: {
      file: "src/components/ui/button.tsx",
      reason:
        "Inspect the shared Button. For one button, first try its variant, size, or className where you use it.",
    },
  };
  const choice = choices[task];
  return (
    <section className="min-w-0 space-y-6 rounded-xl border p-6">
      <h2 className="text-2xl font-semibold">
        Where would you make this change?
      </h2>
      <label className="block space-y-2">
        <span>Choose a task</span>
        <select
          className="block w-full rounded border bg-background p-2"
          value={task}
          onChange={function changeTask(event) {
            setTask(event.target.value);
          }}
        >
          <option value="home">Change the home page heading</option>
          <option value="shared">
            Change the shared layout or default title
          </option>
          <option value="colors">Change the app’s theme colors</option>
          <option value="image">Add an image</option>
          <option value="icon">Change the favicon</option>
          <option value="button">Inspect the shared Button</option>
        </select>
      </label>
      <div className="space-y-3 rounded-xl bg-muted p-5" role="status">
        <p className="font-mono text-sm break-all">{choice.file}</p>
        <p className="leading-7">{choice.reason}</p>
      </div>
      <p className="text-sm leading-6 text-muted-foreground">
        This helps you locate source files. It does not open or edit them. Start
        with the selected file and make one small change.
      </p>
    </section>
  );
}

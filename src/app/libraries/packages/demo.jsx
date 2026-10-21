"use client";
import { useState } from "react";

export function LessonDemo() {
  const [checked, setChecked] = useState([]);
  const questions = [
    "Does the example solve my task?",
    "Does it support our React version?",
    "Is the documentation clear?",
    "Does the license allow our use?",
    "Does it need an account, key, or paid service?",
  ];
  return (
    <div className="space-y-6 rounded-xl border p-6">
      <p>
        Task: show a map with a few places. Read the official examples before
        adding a package.
      </p>
      <div className="space-y-3">
        {questions.map(function renderQuestion(question) {
          return (
            <label key={question} className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={checked.includes(question)}
                onChange={function toggleQuestion(event) {
                  if (event.target.checked) {
                    setChecked([...checked, question]);
                  } else {
                    setChecked(
                      checked.filter(function keepOther(item) {
                        return item !== question;
                      }),
                    );
                  }
                }}
              />
              <span>{question}</span>
            </label>
          );
        })}
      </div>
      <p aria-live="polite">
        {checked.length} of {questions.length} checks complete.
      </p>
      <pre className="overflow-auto rounded bg-muted p-4">
        <code>pnpm add react-map-gl maplibre-gl</code>
      </pre>
      <a
        href="https://visgl.github.io/react-map-gl/docs/get-started"
        className="underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read the official React map setup (new tab)
      </a>
    </div>
  );
}

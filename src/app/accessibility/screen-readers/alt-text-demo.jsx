"use client";
import { useState } from "react";
import Image from "next/image";

export function AltTextDemo() {
  const [purpose, setPurpose] = useState("informative");
  // The same image needs a different alternative when its purpose changes.
  const alt =
    purpose === "decorative"
      ? ""
      : purpose === "vague"
        ? "A poster"
        : "Adventure Club Friday walk. Meet at the school library at 15:30. Bring water and a coat.";
  return (
    <section
      aria-labelledby="alt-text-heading"
      className="space-y-5 rounded-xl border p-6"
    >
      <header className="space-y-3">
        <h2 id="alt-text-heading" className="text-2xl font-semibold">
          A blind student needs the invitation too.
        </h2>
        <p className="leading-7">
          Imagine a blind student finding this club invitation. They use a
          screen reader to turn page text and structure into speech or braille.
          If the meeting details exist only in an image, the text alternative
          must provide them.
        </p>
      </header>
      <label className="block space-y-2">
        <span>Image purpose</span>
        <select
          className="block w-full rounded border bg-background p-2"
          value={purpose}
          onChange={function changePurpose(event) {
            setPurpose(event.target.value);
          }}
        >
          <option value="informative">
            Informative: the image contains the invitation
          </option>
          <option value="vague">
            Compare a vague alternative (not recommended)
          </option>
          <option value="decorative">
            Decorative: the full invitation is already in nearby text
          </option>
        </select>
      </label>
      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-2">
        <div className="min-w-0 space-y-4">
          <Image
            src="/club-walk.svg"
            alt={alt}
            width={960}
            height={600}
            className="h-auto w-full rounded-xl"
          />
          {purpose === "decorative" && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                Adventure Club Friday walk
              </h3>
              <p>
                Meet at the school library at 15:30. Bring water and a coat.
              </p>
            </div>
          )}
        </div>
        <div className="min-w-0 space-y-4 rounded-xl bg-muted/50 p-5">
          <h3 className="font-semibold">Text alternative provided</h3>
          <p aria-live="polite" className="leading-7">
            {purpose === "decorative"
              ? "The image is skipped. The nearby heading and paragraph provide the invitation."
              : alt}
          </p>
          <pre
            tabIndex={0}
            className="overflow-auto rounded bg-background p-3 text-xs"
          >
            <code>{"alt=" + JSON.stringify(alt)}</code>
          </pre>
          {purpose === "vague" ? (
            <p className="text-sm leading-7">
              “A poster” does not tell the student when or where to meet. It
              describes the format but loses the useful information.
            </p>
          ) : purpose === "decorative" ? (
            <p className="text-sm leading-7">
              Use <code>{'alt=""'}</code> when the image adds no information
              beyond the nearby text. Keep the empty attribute; do not omit it.
            </p>
          ) : (
            <p className="text-sm leading-7">
              This alternative gives the student the information needed to join.
              It does not list decorative colors and shapes.
            </p>
          )}
          <p className="text-xs leading-6 text-muted-foreground">
            This panel shows the text supplied by the code. It is not a
            screen-reader simulator. Actual announcements depend on the reader,
            browser, and settings.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export function LessonDemo() {
  const [source, setSource] = useState("/performance/trail-2400.png");
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  async function measureDownload() {
    setPending(true);
    setResult(null);
    setError("");
    try {
      const start = performance.now();
      const response = await fetch(source, { cache: "no-store" });
      if (!response.ok) {
        throw new Error("The file could not be loaded. Try again.");
      }
      const body = await response.arrayBuffer();
      setResult({
        source,
        bytes: body.byteLength,
        milliseconds: performance.now() - start,
      });
    } catch (error) {
      setError(error.message || "The request failed. Try again.");
    } finally {
      setPending(false);
    }
  }
  return (
    <div className="space-y-6">
      <section className="space-y-5 rounded-xl border p-6">
        <h2 className="text-2xl font-semibold">
          Measure one real file request
        </h2>
        <label className="block space-y-2">
          <span>File to request</span>
          <select
            disabled={pending}
            value={source}
            onChange={function chooseSource(event) {
              setSource(event.target.value);
              setResult(null);
              setError("");
            }}
            className="block w-full rounded border bg-background p-2"
          >
            <option value="/performance/trail-2400.png">
              Large PNG export
            </option>
            <option value="/performance/trail-960.webp">
              Smaller WebP export
            </option>
          </select>
        </label>
        <Button disabled={pending} onClick={measureDownload}>
          {pending ? "Measuring…" : "Measure a local download"}
        </Button>
        <p role="status">
          {pending
            ? "Fetching and reading the file…"
            : result
              ? "Request complete."
              : "Choose a file, then measure it."}
        </p>
        {error && <p role="alert">{error}</p>}
        {result && (
          <div className="space-y-3">
            <p className="text-sm break-all">
              Measured source: {result.source}
            </p>
            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt>Response body</dt>
                <dd
                  data-testid="download-bytes"
                  className="text-xl font-semibold"
                >
                  {result.bytes.toLocaleString("en-US")} bytes
                </dd>
              </div>
              <div>
                <dt>Fetch and read time</dt>
                <dd
                  data-testid="download-time"
                  className="text-xl font-semibold"
                >
                  {result.milliseconds.toFixed(1)} ms
                </dd>
              </div>
            </dl>
          </div>
        )}
        <p className="text-sm leading-6 text-muted-foreground">
          This is a real fetch with HTTP cache reuse disabled. It measures one
          response body and the time to fetch and read it. It is not a page
          score. Local requests are usually very fast, and timings vary.
        </p>
      </section>
      <section className="space-y-4 rounded-xl border p-6">
        <h2 className="text-2xl font-semibold">Check the complete page</h2>
        <ol className="list-decimal space-y-3 pl-5">
          <li>Run a production build and start it with the commands below.</li>
          <li>
            Open DevTools. In Network, disable cache, select a slower
            connection, and reload.
          </li>
          <li>
            Inspect the biggest requests. Run a Lighthouse audit of the same
            page.
          </li>
          <li>Change one useful thing, then repeat with the same settings.</li>
        </ol>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-muted p-4 text-sm"
        >
          <code>{"pnpm build\npnpm start --port 3032"}</code>
        </pre>
        <p className="text-sm leading-6 text-muted-foreground">
          LCP: main content appears. INP: the page responds to interactions.
          CLS: the layout stays stable. Lighthouse is one useful check; a score
          does not replace real tasks or prove accessibility.
        </p>
        <a
          href="https://web.dev/articles/vitals"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm underline"
        >
          Web Vitals overview (new tab)
        </a>
      </section>
    </div>
  );
}

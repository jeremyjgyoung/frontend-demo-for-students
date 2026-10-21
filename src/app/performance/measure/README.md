# Measure, change, and check again

Time one real request, then use browser tools to check the complete page.

## Try it

1. Choose the PNG and measure a local download. Then choose WebP and measure again.
2. Compare body size and elapsed time. Repeat under the same network conditions.
3. Read the production-build steps below. Use Network and Lighthouse to find one useful improvement.

## How it works

### 1. Ask a specific question

Start with a question such as Which image transfers less data? The button below fetches a real local file and reads its response. The returned body size and elapsed time describe that one request, not the complete page.

```jsx
const start = performance.now();
const response = await fetch(source, { cache: "no-store" });
const body = await response.arrayBuffer();
const elapsed = performance.now() - start;
```

### 2. Compare under the same conditions

Use the same route, device, network setting, and cache setting. Repeat the check. Local requests may finish almost instantly; smaller files do not guarantee that every individual timing will be faster. A response body count is not the same as wire bytes including headers and compression.

```jsx
setResult({
  source,
  bytes: body.byteLength,
  milliseconds: elapsed,
});
```

### 3. Check a production build

Development mode includes compilation and debugging work. Run a production build for a more useful loading check. Open the address printed by pnpm start. In browser DevTools, use Network to inspect requests and Lighthouse to run a page audit.

```bash
pnpm build
pnpm start --port 3032
```

### 4. Check speed, response, and stability

LCP describes when the largest visible content appears. INP describes how quickly the page responds to interactions. CLS describes unexpected layout movement. Keep this as an overview: use the tools to inspect the page, change one useful thing, and test again. The request timer below is not a Core Web Vitals measurement.

```jsx
// Observe one problem.
// Change one thing: image size, reserved space, or optional JavaScript.
// Repeat the same task and compare.
// Keep accessibility and working behavior intact.
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

export const lesson = {
  topic: "performance",
  slug: "measure",
  title: "Measure, change, and check again",
  summary:
    "Time one real request, then use browser tools to check the complete page.",
  steps: [
    "Choose the PNG and measure a local download. Then choose WebP and measure again.",
    "Compare body size and elapsed time. Repeat under the same network conditions.",
    "Read the production-build steps below. Use Network and Lighthouse to find one useful improvement.",
  ],
  explanations: [
    {
      title: "1. Ask a specific question",
      text: "Start with a question such as Which image transfers less data? The button below fetches a real local file and reads its response. The returned body size and elapsed time describe that one request, not the complete page.",
      code: 'const start = performance.now();\nconst response = await fetch(source, { cache: "no-store" });\nconst body = await response.arrayBuffer();\nconst elapsed = performance.now() - start;',
    },
    {
      title: "2. Compare under the same conditions",
      text: "Use the same route, device, network setting, and cache setting. Repeat the check. Local requests may finish almost instantly; smaller files do not guarantee that every individual timing will be faster. A response body count is not the same as wire bytes including headers and compression.",
      code: "setResult({\n  source,\n  bytes: body.byteLength,\n  milliseconds: elapsed,\n});",
    },
    {
      title: "3. Check a production build",
      text: "Development mode includes compilation and debugging work. Run a production build for a more useful loading check. Open the address printed by pnpm start. In browser DevTools, use Network to inspect requests and Lighthouse to run a page audit.",
      code: "pnpm build\npnpm start --port 3032",
    },
    {
      title: "4. Check speed, response, and stability",
      text: "LCP describes when the largest visible content appears. INP describes how quickly the page responds to interactions. CLS describes unexpected layout movement. Keep this as an overview: use the tools to inspect the page, change one useful thing, and test again. The request timer below is not a Core Web Vitals measurement.",
      code: "// Observe one problem.\n// Change one thing: image size, reserved space, or optional JavaScript.\n// Repeat the same task and compare.\n// Keep accessibility and working behavior intact.",
    },
  ],
};

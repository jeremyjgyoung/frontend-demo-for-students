export const lesson = {
  topic: "performance",
  slug: "lazy-loading",
  title: "Load optional features when needed",
  summary:
    "Open an optional chart and inspect when its JavaScript is requested.",
  steps: [
    "Open this route directly in a fresh tab. Open Network, disable cache, and reload before opening the chart.",
    "Choose Show chart. Look for the additional JavaScript requests and read the chart.",
    "Hide and reopen the chart. Explain why the browser may reuse code it has already loaded.",
  ],
  explanations: [
    {
      title: "1. Keep the first view useful",
      text: "The list of club values is available immediately. The chart is an optional extra. Do not defer content that a person needs to complete the main task.",
      code: 'const activities = [\n  { club: "Art", members: 12 },\n  { club: "Outdoors", members: 18 },\n];',
    },
    {
      title: "2. Split the optional code",
      text: "next/dynamic creates a separately loaded component. The import belongs at module level, outside LessonDemo. The chart file owns its Recharts imports. ssr: false is used here inside a Client Component.",
      code: 'const ActivityChart = dynamic(\n  function loadChart() {\n    return import("./activity-chart").then(function getChart(module) {\n      return module.ActivityChart;\n    });\n  },\n  { ssr: false, loading: function LoadingChart() {\n    return <p role="status">Loading chart code\u2026</p>;\n  } },\n);',
    },
    {
      title: "3. Render it only when needed",
      text: "The condition keeps the dynamic component out of the initial view. Hiding a normally imported component with CSS would still include its code. A loading message explains a real wait; a cached request may finish too quickly to see it.",
      code: '{showChart && <ActivityChart activities={activities} />}\n<Button onClick={toggleChart}>\n  {showChart ? "Hide chart" : "Show chart"}\n</Button>',
    },
    {
      title: "4. Check the real requests",
      text: "Compare Network before and after opening the chart. The browser can reuse loaded modules, and visiting another chart lesson may warm its cache. Test this route directly with cache disabled. This example does not invent a loading delay or a performance score.",
      code: "// Open Network \u2192 filter JS \u2192 reload this route directly.\n// Open the chart \u2192 inspect the additional requests.",
    },
  ],
};

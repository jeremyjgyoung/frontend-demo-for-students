# Load optional features when needed

Open an optional chart and inspect when its JavaScript is requested.

## Try it

1. Open this route directly in a fresh tab. Open Network, disable cache, and reload before opening the chart.
2. Choose Show chart. Look for the additional JavaScript requests and read the chart.
3. Hide and reopen the chart. Explain why the browser may reuse code it has already loaded.

## How it works

### 1. Keep the first view useful

The list of club values is available immediately. The chart is an optional extra. Do not defer content that a person needs to complete the main task.

```jsx
const activities = [
  { club: "Art", members: 12 },
  { club: "Outdoors", members: 18 },
];
```

### 2. Split the optional code

next/dynamic creates a separately loaded component. The import belongs at module level, outside LessonDemo. The chart file owns its Recharts imports. ssr: false is used here inside a Client Component.

```jsx
const ActivityChart = dynamic(
  function loadChart() {
    return import("./activity-chart").then(function getChart(module) {
      return module.ActivityChart;
    });
  },
  {
    ssr: false,
    loading: function LoadingChart() {
      return <p role="status">Loading chart code…</p>;
    },
  },
);
```

### 3. Render it only when needed

The condition keeps the dynamic component out of the initial view. Hiding a normally imported component with CSS would still include its code. A loading message explains a real wait; a cached request may finish too quickly to see it.

```jsx
{
  showChart && <ActivityChart activities={activities} />;
}
<Button onClick={toggleChart}>
  {showChart ? "Hide chart" : "Show chart"}
</Button>;
```

### 4. Check the real requests

Compare Network before and after opening the chart. The browser can reuse loaded modules, and visiting another chart lesson may warm its cache. Test this route directly with cache disabled. This example does not invent a loading delay or a performance score.

```jsx
// Open Network → filter JS → reload this route directly.
// Open the chart → inspect the additional requests.
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

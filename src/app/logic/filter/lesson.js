export const lesson = {
  topic: "logic",
  slug: "filter",
  title: "Filter and sort visible content",
  summary:
    "Filter an array already in the browser. Give immediate, useful feedback.",
  steps: [
    "Search for walk.",
    "Choose Art and sort by cost.",
    "Search for something missing, then reset.",
  ],
  explanations: [
    {
      title: "1. Filter local data",
      text: "No database query is sent. filter creates a new array containing the matching objects. Normalizing case makes the text search easier to use.",
      code: 'const nameMatches = activity.name.toLowerCase()\n  .includes(search.trim().toLowerCase());\nconst categoryMatches = category === "All"\n  || activity.category === category;\nreturn nameMatches && categoryMatches;',
    },
    {
      title: "2. Sort the filtered copy",
      text: "filter already returned a new array. Sorting it does not change the source array. For a source array without filtering, copy it before sorting.",
      code: 'sort(function compare(a, b) {\n  return sort === "cost"\n    ? a.cost - b.cost\n    : a.name.localeCompare(b.name);\n});',
    },
    {
      title: "3. Explain the result",
      text: "Show the count, selected category, and a way to reset. An empty result should explain what users can change.",
      code: "{visible.length === 0\n  ? <p>No activities match. Try a different word.</p>\n  : <ul>{visible.map(function renderActivity(activity) {\n      return <li key={activity.id}>{activity.name}</li>;\n    })}</ul>}",
    },
  ],
};

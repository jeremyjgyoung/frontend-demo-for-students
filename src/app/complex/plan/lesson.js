export const lesson = {
  topic: "complex",
  slug: "plan",
  title: "Plan a calendar",
  summary: "Start with a small scope, a sketch, and a simple event object.",
  steps: [
    "Read the first-version list.",
    "Show the event object and match its fields to visible content.",
  ],
  explanations: [
    {
      title: "1. Separate the problems",
      text: "Plan the data, date calculations, layout, and interactions separately. Build a static view before adding state. You do not need every calendar feature in the first version.",
      code: "// 1. Data\n// 2. Date calculations\n// 3. Month layout\n// 4. Navigation and details",
    },
    {
      title: "2. Use a date-only value",
      text: "The event date means a calendar day, not a moment in a timezone. Keep it as YYYY-MM-DD. Do not parse this string as a UTC timestamp just to display the day.",
      code: 'const event = {\n  id: "art",\n  title: "Poster workshop",\n  date: "2026-10-14",\n  time: "15:30",\n  place: "Art room",\n};',
    },
  ],
};

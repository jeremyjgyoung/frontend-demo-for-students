export const lesson = {
  topic: "complex",
  slug: "events",
  title: "Add navigation and event details",
  summary: "Build one calendar step with local data and direct code.",
  steps: [
    "Move from December to January.",
    "Inspect February 2028 to check the leap day.",
    "Choose an October 2026 event.",
  ],
  explanations: [
    {
      title: "1. Calculate the cells",
      text: "getDay returns 0 for Sunday through 6 for Saturday. Add that many empty cells before day 1. Day 0 of the next month is the last day of this month, including leap years.",
      code: "const firstWeekday = new Date(year, month, 1).getDay();\nconst daysInMonth = new Date(year, month + 1, 0).getDate();\nconst cells = Array.from({ length: firstWeekday },\n  function emptyCell() { return null; });\nfor (let day = 1; day <= daysInMonth; day += 1) {\n  cells.push(day);\n}",
    },
    {
      title: "2. Render the month layout",
      text: "The weekday headings and dates use seven grid columns. This is a visual month layout, not an ARIA date-picker grid. A real keyboard date picker has more interaction rules.",
      code: '<div className="grid grid-cols-7">\n  {cells.map(function renderDay(day, index) {\n    return <div key={index}>{day}</div>;\n  })}\n</div>',
    },
    {
      title: "3. Match events to a date",
      text: "Build a date-only key and compare it to event.date. A click selects the whole event object. Details render below the calendar so the small example needs no custom popup system.",
      code: 'const date = monthKey + "-" + String(day).padStart(2, "0");\nconst dayEvents = events.filter(function onDay(event) {\n  return event.date === date;\n});\nfunction chooseEvent() { setSelectedEvent(event); }',
    },
  ],
};

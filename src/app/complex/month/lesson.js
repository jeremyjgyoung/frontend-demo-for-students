export const lesson = {
  topic: "complex",
  slug: "month",
  title: "Build the month view",
  summary: "Build one calendar step with local data and direct code.",
  steps: [
    "Move from December to January.",
    "Inspect February 2028 to check the leap day.",
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
  ],
};

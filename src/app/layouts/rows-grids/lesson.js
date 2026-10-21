export const lesson = {
  topic: "layouts",
  slug: "rows-grids",
  title: "Rows and grids",
  summary: "Compare a wrapping row with a grid that changes its column count.",
  steps: [
    "Switch between grid and row.",
    "Resize the screen and compare how items move.",
  ],
  explanations: [
    {
      title: "1. Use grid for rows and columns",
      text: "This grid has one column by default, two from sm, and three from xl. The classes remain visible in the example.",
      code: 'className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"',
    },
    {
      title: "2. Use flex for a row that can wrap",
      text: "flex-wrap lets items move to another line. flex-1 shares available space between the cards.",
      code: '<div className="flex flex-wrap gap-4">\n  <article className="min-w-40 flex-1">\u2026</article>\n</div>',
    },
  ],
};

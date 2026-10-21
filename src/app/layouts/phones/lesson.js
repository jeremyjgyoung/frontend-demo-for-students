export const lesson = {
  topic: "layouts",
  slug: "phones",
  title: "Make a layout work on phones",
  summary:
    "Let controls wrap and keep wide content inside its own scroll area.",
  steps: [
    "Open this page at a phone width.",
    "Show the long title. Check that it stays inside the card.",
    "Scroll the table without scrolling the whole page sideways.",
  ],
  explanations: [
    {
      title: "1. Let controls wrap",
      text: "A row of actions should not push beyond the screen. flex-wrap starts a new line when needed.",
      code: '<div className="flex flex-wrap gap-2">\u2026</div>',
    },
    {
      title: "2. Contain wide content",
      text: "The table keeps a useful minimum width. Its container scrolls. The page itself stays within the viewport. The region has a name and can receive keyboard focus.",
      code: '<div className="overflow-x-auto" tabIndex={0}\n  role="region" aria-label="Trip schedule, scroll horizontally">\n  <table className="w-full min-w-[38rem]">\u2026</table>\n</div>',
    },
  ],
};

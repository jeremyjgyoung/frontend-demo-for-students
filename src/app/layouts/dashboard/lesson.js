export const lesson = {
  topic: "layouts",
  slug: "dashboard",
  title: "Build a sidebar and dashboard",
  summary: "Arrange navigation, summary cards, and a work list in one screen.",
  steps: [
    "Switch to Narrow. The sidebar moves above the work area.",
    "Choose This week or Next week. The cards and task list use the same selected week.",
    "Read the code. Find the fixed sidebar width and the flexible content column.",
  ],
  explanations: [
    {
      title: "1. Separate navigation from work",
      text: "A dashboard brings useful information into one place. The sidebar holds choices. The main area shows the current choice. Keep the sidebar first in the HTML so the reading order stays clear.",
      code: '<div className="grid @2xl:grid-cols-[11rem_minmax(0,1fr)]">\n  <aside>Week choices</aside>\n  <section className="min-w-0">Selected week</section>\n</div>',
    },
    {
      title: "2. Let the content column shrink",
      text: "11rem gives the sidebar a steady width. minmax(0,1fr) lets the other column take the remaining space and shrink. min-w-0 also lets the content box shrink around long text.",
      code: 'className="grid @2xl:grid-cols-[11rem_minmax(0,1fr)]"\n// Start with one column. Add the sidebar column when there is room.',
    },
    {
      title: "3. Put related numbers in cards",
      text: "A small grid makes summary values easy to compare. Each number needs a label. Use a description list: dt is the label and dd is its value.",
      code: '<dl className="grid gap-3 @xl:grid-cols-3">\n  <div className="rounded-xl border p-4">\n    <dt>Tasks</dt>\n    <dd className="text-3xl font-bold">{tasks.length}</dd>\n  </div>\n</dl>',
    },
    {
      title: "4. Keep selected styling clear",
      text: "State stores the selected week. Clicking a button changes that state. aria-pressed tells assistive technology which choice is selected. The color gives sighted users the same information.",
      code: 'const [week, setWeek] = useState("this");\n\n<button\n  type="button"\n  aria-pressed={week === "this"}\n  onClick={function showThisWeek() { setWeek("this"); }}\n>\n  This week\n</button>',
    },
  ],
};

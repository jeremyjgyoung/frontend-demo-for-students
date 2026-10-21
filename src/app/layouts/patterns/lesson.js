export const lesson = {
  topic: "layouts",
  slug: "patterns",
  title: "Common page layouts",
  summary: "Choose a layout for a landing page, dashboard, guide, or app.",
  steps: [
    "Compare the diagrams. Pick a pattern for a school club website.",
    "Open a demo with a Try link. Switch between Wide and Narrow.",
    "Read Explanation, then Code. Find the grid or flex classes that arrange the parts.",
  ],
  explanations: [
    {
      title: "1. Choose a pattern for the task",
      text: "A landing page introduces an idea. A dashboard summarizes work. An article supports reading. A list-and-detail screen helps a person inspect one item. Start with the task, then choose the layout.",
      code: "// A useful planning question:\n// What does a person need to find or do on this page?",
    },
    {
      title: "2. Use grid for columns",
      text: "grid creates a layout with rows and columns. gap-6 adds space between items. This example starts with one column. md:grid-cols-2 adds two equal columns when the browser is at least 48rem wide.",
      code: '<section className="grid gap-6 md:grid-cols-2">\n  <div>Words and a link</div>\n  <div>A useful visual</div>\n</section>',
    },
    {
      title: "3. Use flex for a row or stack",
      text: "flex arranges items along one direction. flex-col makes a vertical stack. flex-1 lets the content use spare space. The footer follows the content instead of covering it.",
      code: '<div className="flex min-h-dvh flex-col">\n  <header>Site name and navigation</header>\n  <main className="flex-1">Page content</main>\n  <footer>Contact details</footer>\n</div>',
    },
    {
      title: "4. Make space for narrow screens",
      text: "Keep the useful reading order in the HTML. Start with one column. Add columns when there is enough space. The new demos use @container and @2xl: so they respond to the preview box. This lets you test a narrow layout without shrinking the whole lesson.",
      code: '<div className="@container">\n  <div className="grid gap-6 @2xl:grid-cols-2">\n    <article>First in the reading order</article>\n    <article>Second in the reading order</article>\n  </div>\n</div>',
    },
  ],
};

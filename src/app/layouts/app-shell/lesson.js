export const lesson = {
  topic: "layouts",
  slug: "app-shell",
  title: "Build a full-height app screen",
  summary: "Keep a header and footer around a flexible list-and-detail area.",
  steps: [
    "Select a different project. Its details appear in the second panel.",
    "Switch to Narrow. The list moves above the selected project.",
    "Turn on Extra notes. Watch the footer move down with the content.",
  ],
  explanations: [
    {
      title: "1. Stack the outer parts",
      text: "An app shell is the frame around an app: header, content, and footer. flex-col stacks those parts. min-h-[32rem] gives this embedded demo a minimum height. Content can still make it taller.",
      code: '<div className="flex min-h-[32rem] flex-col">\n  <header>App name</header>\n  <div className="flex-1">List and selected item</div>\n  <footer>Helpful status</footer>\n</div>',
    },
    {
      title: "2. Let the middle take the space",
      text: "flex-1 fills spare space in the vertical layout. The footer sits below it. This is sometimes called a sticky footer, but it does not use position: sticky or fixed. For a real full-page app, min-h-dvh can use the browser height.",
      code: '// Embedded example:\nclassName="flex min-h-[32rem] flex-col"\n\n// A full-page app:\nclassName="flex min-h-dvh flex-col"',
    },
    {
      title: "3. Show a list and a detail panel",
      text: "A list-and-detail layout helps a person inspect one item at a time. The list is first in the HTML. A grid puts the detail beside it only when there is room.",
      code: '<div className="grid flex-1 @2xl:grid-cols-[13rem_minmax(0,1fr)]">\n  <aside>Project buttons</aside>\n  <section className="min-w-0">Selected project details</section>\n</div>',
    },
    {
      title: "4. Let content grow naturally",
      text: "A fixed height can cut off text. A minimum height allows longer content to push the footer down. Use overflow-auto only when you deliberately need a separate scroll area. Avoid nested scroll areas for a simple reading page.",
      code: '<section className="min-w-0 p-6">\n  <h2>{project.title}</h2>\n  <p>{project.description}</p>\n  {showNotes && <p>Extra project notes...</p>}\n</section>',
    },
  ],
};

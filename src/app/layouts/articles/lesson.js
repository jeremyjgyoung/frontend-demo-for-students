export const lesson = {
  topic: "layouts",
  slug: "articles",
  title: "Build an article with a sidebar",
  summary: "Keep long text readable and place supporting links beside it.",
  steps: [
    "Use the section links to move to a heading in the article.",
    "Switch to Narrow. The section links move above the article.",
    "On a wide view, scroll the page. The section links stay near the top until their grid ends.",
  ],
  explanations: [
    {
      title: "1. Limit the width of long text",
      text: "Long lines are hard to follow. max-w-prose limits the text area to about 65 characters in this font. leading-7 adds space between lines. Keep headings close to the text they introduce.",
      code: '<article className="max-w-prose space-y-8 leading-7">\n  <h2>A guide to your first project</h2>\n  <section>One part of the guide</section>\n</article>',
    },
    {
      title: "2. Add a supporting column",
      text: "Use this layout for guides, help pages, or a project brief. The contents list comes first in the HTML. On a wide view, CSS places it on the right. On a narrow view, it stays above the text.",
      code: '<div className="grid gap-8 @2xl:grid-cols-[minmax(0,1fr)_11rem]">\n  <aside className="@2xl:col-start-2 @2xl:row-start-1">Contents</aside>\n  <article className="min-w-0 @2xl:col-start-1 @2xl:row-start-1">Guide</article>\n</div>',
    },
    {
      title: "3. Keep useful links in view",
      text: "sticky keeps an element near an edge while its parent is on screen. top-6 sets that distance. self-start stops the sidebar stretching to the full grid height. Only use sticky when the sidebar can fit in the available height.",
      code: 'className="self-start @2xl:sticky @2xl:top-6"\n// The sidebar stops sticking when its parent grid ends.',
    },
    {
      title: "4. Link to a heading",
      text: "A link that starts with # points to an id in the current page. Give each target a unique id. scroll-mt-8 leaves space above the target after the browser scrolls to it.",
      code: '<a href="#article-first-version">Build a first version</a>\n\n<section id="article-first-version" className="scroll-mt-8">\n  <h3>Build a first version</h3>\n</section>',
    },
  ],
};

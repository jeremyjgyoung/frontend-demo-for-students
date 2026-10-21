export const lesson = {
  topic: "layouts",
  slug: "landing",
  title: "Build a landing page",
  summary: "Combine a split hero, a feature grid, and a clear next step.",
  steps: [
    "Switch between Wide and Narrow. Watch the hero and feature cards stack.",
    "Follow See the plan. Notice that it moves to a section inside the demo.",
    "Change the hero column ratio in demo.jsx. Keep the words before the visual.",
  ],
  explanations: [
    {
      title: "1. Start with sections",
      text: "A landing page introduces one idea. Give each section one job: explain the idea, show benefits, or give a next step. Use a section with a heading for each part.",
      code: '<section aria-labelledby="landing-hero-title">\n  <h2 id="landing-hero-title">Make room for your next idea.</h2>\n  <p>A short message explains what the club offers.</p>\n  <a href="#landing-plan">See the plan</a>\n</section>',
    },
    {
      title: "2. Give the hero two columns",
      text: "A hero is the large introduction near the top of a page. Start with one column. At a container width of 36rem, use two columns. The text gets slightly more space.",
      code: '<div className="@container">\n  <section className="grid gap-8 @2xl:grid-cols-[1.2fr_1fr]">\n    <div>Words and a link</div>\n    <div>The visual</div>\n  </section>\n</div>',
    },
    {
      title: "3. Repeat a card layout",
      text: "Use a grid for related items. gap-4 sets the space between cards. Each card is one article. On a narrow screen, the cards stay in one column.",
      code: '<div className="grid gap-4 @2xl:grid-cols-3">\n  <article>Pick an idea</article>\n  <article>Build together</article>\n  <article>Share your work</article>\n</div>',
    },
    {
      title: "4. Test the space the demo has",
      text: "@container marks the outer box. @2xl: checks that box, not the whole browser. This makes the Narrow control work inside the lesson. For a full page, md: can respond to the browser width instead.",
      code: 'className={width === "narrow" ? "@container mx-auto max-w-sm" : "@container"}\n// @2xl: starts at a container width of 36rem.\n// md: starts at a browser width of 48rem.',
    },
  ],
};

export const lesson = {
  topic: "nextjs",
  slug: "pages",
  title: "Create pages and link between them",
  summary:
    "Build a three-page club site inside the lesson. Follow real links while the app header stays in place.",
  steps: [
    "Open About this club in the example app. Notice that its header and the lesson tabs stay in place.",
    "Open Contact the club. Use Home or the browser Back button to return.",
    "Open Contact the club in a new tab. It is a real link with its own URL.",
  ],
  explanations: [
    {
      title: "1. Give each page a file",
      text: "The example has a home page, an About page, and a Contact page. Each page.jsx supplies only that page’s content. The example uses h2 because the surrounding lesson already has its h1.",
      code: "// src/app/nextjs/pages/about/page.jsx\nexport default function Page() {\n  return <h2>Small adventures. Good company.</h2>;\n}",
    },
    {
      title: "2. Keep the shared frame in a layout",
      text: "The layout wraps all three routes. LessonDemo contains the club header, navigation, and footer. Next.js places the selected page where children appears. The outer lesson tabs also stay in this layout.",
      code: "// src/app/nextjs/pages/layout.jsx\nreturn (\n  <LessonFrame lesson={lesson} sources={sources}>\n    <LessonDemo>{children}</LessonDemo>\n  </LessonFrame>\n);",
    },
    {
      title: "3. Follow a real link",
      text: "Link changes the URL. scroll={false} keeps the surrounding lesson from jumping back to the top. Browser Back and opening the link in a new tab still work. This is navigation, not a state variable pretending to be a page.",
      code: '<Link href="/nextjs/pages/about" scroll={false}>\n  About this club\n</Link>',
    },
    {
      title: "4. Give a link button styles",
      text: "buttonVariants returns the shared button classes. Apply them to Link itself. The result still has link behavior. Do not nest a button inside a link.",
      code: '<Link href="/nextjs/pages/contact" scroll={false}\n  className={buttonVariants({ variant: "outline", size: "sm" })}>\n  Contact the club\n</Link>',
    },
  ],
};

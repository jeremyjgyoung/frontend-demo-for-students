export const lesson = {
  topic: "basics",
  slug: "page-exports",
  title: "Why pages use default exports",
  summary:
    "See how Next.js finds a page and how a default import differs from a named import.",
  steps: [
    "Read the club page below. It is imported with no braces in demo.jsx.",
    "Open Route view. Next.js renders that same page file automatically. Return with Imported view or browser Back.",
    "Compare demo.jsx, example/page.jsx, and club-note.jsx in Code.",
  ],
  explanations: [
    {
      title: "1. Next.js needs a route entry",
      text: "A page.jsx file makes a route available. Next.js expects that file’s default export to be the page component. It loads the component automatically for the URL; you do not normally import pages to create routes. The function can be named Page, AboutPage, or another clear name. The file name and folder determine the route. A page may also have supported named exports such as metadata; its page component still uses the default export.",
      code: "// src/app/about/page.jsx → /about\nexport default function AboutPage() {\n  return <h1>About our club</h1>;\n}",
    },
    {
      title: "2. Import a default export without braces",
      text: "If you import that component yourself, use no braces. The importing file chooses a local name. In this working demo, ExamplePage is imported as ClubPage. React renders the component when it sees <ClubPage />. Use a capitalized local name when rendering it as JSX.",
      code: '// example/page.jsx\nexport default function ExamplePage() {\n  return <article>Club information</article>;\n}\n\n// demo.jsx\nimport ClubPage from "./example/page";\n// Render it with <ClubPage />.',
    },
    {
      title: "3. Compare a named export",
      text: "Most components you write in this project use named exports. Their imports use braces and match the exported name. Pages and layouts are exceptions because Next.js expects a default export for those entry files. JavaScript allows default exports in other files too; named exports are this project’s teaching convention.",
      code: '// club-note.jsx\nexport function ClubNote() {\n  return <p>Bring a coat.</p>;\n}\n\n// demo.jsx\nimport { ClubNote } from "./club-note";',
    },
    {
      title: "4. Reuse parts rather than whole routes",
      text: "Importing the tiny page here demonstrates JavaScript syntax. In a growing app, usually extract a reusable part into a normal component file, then import it into each page. You do not need to import one route into another just to link between them.",
      code: '// club-card.jsx\nexport function ClubCard() { return <p>Friday walk</p>; }\n\n// about/page.jsx\nimport { ClubCard } from "../club-card";\nexport default function AboutPage() {\n  return <ClubCard />;\n}',
    },
    {
      title: "5. Keep the two meanings of default separate",
      text: 'A default export is a JavaScript module rule. Being a Server Component by default is a separate Next.js rule. A page with "use client" still needs a default export. Ordinary interactive components can still use named exports.',
      code: '// page.jsx needs a default export.\n// "use client" enables client features; it does not change export syntax.',
    },
  ],
};

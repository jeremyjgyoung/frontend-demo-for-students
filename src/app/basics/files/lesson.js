export const lesson = {
  topic: "basics",
  slug: "files",
  title: "Find the file you need",
  summary:
    "Learn a few important paths. You do not need to understand every file before starting.",
  steps: [
    "Choose a task. Find the file or folder suggested below it.",
    "Compare the role of page.jsx, layout.jsx, and globals.css.",
    "Find the JavaScript notes. Check why @/components points inside src.",
  ],
  explanations: [
    {
      title: "1. Start with the page",
      text: "src/app/page.jsx supplies the home page. A folder such as src/app/about with page.jsx supplies /about. layout.jsx wraps pages and commonly holds shared providers or navigation. In this course, demo.jsx holds each lesson\u2019s working example.",
      code: "src/\n  app/\n    page.jsx\n    layout.jsx\n    globals.css\n    about/\n      page.jsx",
    },
    {
      title: "2. Put images in public",
      text: "A file in public is served from the site root. Do not include public in the browser URL. Keep a useful alt description when an image communicates information.",
      code: '// File: public/club-photo.webp\n<Image src="/club-photo.webp" alt="Club members walking together"\n  width={960} height={540} />',
    },
    {
      title: "3. Understand import paths",
      text: "@/ is configured to mean src/. A path starting with ./ begins in the same folder; ../ moves up one folder. Match file names and letter case. These rules help you find the code an import uses.",
      code: 'import { Button } from "@/components/ui/button";\n// File: src/components/ui/button.tsx\n\nimport { ClubNote } from "./club-note";\n// File: club-note.jsx beside the importing file',
    },
    {
      title: "4. Leave generated files alone",
      text: "Edit source files. node_modules contains installed packages. .next contains generated output. pnpm-lock.yaml records dependency versions and is updated by pnpm. package.json contains commands and package names. Do not fix an app by editing generated output.",
      code: "src/app/          // Pages and lesson source\nsrc/components/   // Shared components\npublic/           // Static assets\npackage.json      // Scripts and packages\nnode_modules/     // Installed packages; do not hand-edit\n.next/            // Generated output; do not hand-edit",
    },
    {
      title: "5. JavaScript is welcome",
      text: "This project accepts .js and .jsx files without TypeScript types. Use .jsx for a component that contains JSX. Existing shadcn components can remain .tsx; you can import them from JavaScript without converting them.",
      code: "// club-note.jsx\nexport function ClubNote() {\n  return <p>Bring a coat.</p>;\n}",
    },
  ],
};

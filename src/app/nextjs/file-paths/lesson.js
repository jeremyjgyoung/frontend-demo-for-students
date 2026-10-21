export const lesson = {
  topic: "nextjs",
  slug: "file-paths",
  title: "Understand file paths and @",
  summary:
    "Read ./, ../, and @/ imports, then compare them with page URLs and public image paths.",
  steps: [
    "Choose the same-folder, subfolder, and parent-folder examples. Follow where each starts.",
    "Choose @/. Compare its destination with the real Button import in Code.",
    "Compare @/ with @base-ui/react, then try the page URL and image URL examples.",
  ],
  explanations: [
    {
      title: "1. Start from the file doing the import",
      text: "./ means the folder containing this source file. A folder name after it moves into a subfolder. These component imports omit .jsx. Match the real file name and letter case. Import paths are not based on the current browser URL.",
      code: '// In src/app/nextjs/file-paths/demo.jsx:\nimport { TrailNote } from "./trail-note";\nimport { PathCard } from "./examples/path-card";',
    },
    {
      title: "2. Move up with ../",
      text: "../ moves up one folder. In examples/path-card.jsx, it moves from examples back to file-paths. Then trail-note identifies the file. ../../ would move up two folders.",
      code: '// In src/app/nextjs/file-paths/examples/path-card.jsx:\nimport { TrailNote } from "../trail-note";\n// Reaches src/app/nextjs/file-paths/trail-note.jsx',
    },
    {
      title: "3. Read @/ as the configured shortcut",
      text: "In this project, @/ points to src/. The paths setting in the root tsconfig.json maps @/* to ./src/*. The star matches the rest of the path. This works in JavaScript files too; you do not need to add TypeScript types. Another project could configure a different shortcut.",
      code: '{\n  "compilerOptions": {\n    "paths": {\n      "@/*": ["./src/*"]\n    }\n  }\n}',
    },
    {
      title: "4. Use the shortcut instead of counting folders",
      text: "From this demo file, ../../../components/ui/button and @/components/ui/button reach the same component. The @/ version still starts from src when the importing component moves to a different folder. Braces depend on the export, not on which path you choose.",
      code: '// Two possible paths from this demo:\n// "../../../components/ui/button"\n// "@/components/ui/button"\n\nimport { Button } from "@/components/ui/button";\n// Reaches src/components/ui/button.tsx',
    },
    {
      title: "5. Match the import to the export",
      text: "A named export uses braces in its import. Use the exported name, or rename it with as. A default export uses no braces; you can choose its local name. A file can have several named exports but only one default export. The path still tells JavaScript where to look. The export decides whether the import needs braces. Next.js page files must use a default export; Next.js loads those pages for you.",
      code: '// Named export in trail-note.jsx:\nexport function TrailNote() {\n  return <p>A note for the trail.</p>;\n}\n\n// Import it in another file, with braces:\nimport { TrailNote } from "./trail-note";\n\n// Default export in greeting.jsx (separate example):\nexport default function Greeting() {\n  return <p>Hello!</p>;\n}\n\n// Import it in another file, without braces:\nimport Greeting from "./greeting";\n// A default import can use a different local name:\nimport Welcome from "./greeting";',
    },
    {
      title: "6. Keep imports separate from URLs",
      text: "In Link href or an image src, a leading / starts at the website root. Route URLs leave out src/app and page.jsx. Asset URLs leave out public but keep the asset\u2019s file name and extension. Do not use @/ as a shortcut in these browser URLs.",
      code: '// Page file: src/app/nextjs/pages/page.jsx\n<Link href="/nextjs/pages">Open pages lesson</Link>\n\n// Asset file: public/landscape.svg\n<Image src="/landscape.svg" alt="Illustrated mountains and a sun"\n  width={320} height={180} />',
    },
    {
      title: "7. Recognize package names",
      text: "react and next/link refer to installed packages or their entry points. @base-ui/react is a scoped package name: @base-ui is its scope. @base-ui/react/button selects the button entry. That @ sign is not the same as the @/ project shortcut. pnpm manages installed packages; do not edit their files in node_modules.",
      code: 'import { useState } from "react";\nimport Link from "next/link";\n\n// Inside the shared shadcn Button file:\nimport { Button as ButtonPrimitive } from "@base-ui/react/button";',
    },
  ],
};

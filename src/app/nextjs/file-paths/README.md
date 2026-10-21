# Understand file paths and @

Read ./, ../, and @/ imports, then compare them with page URLs and public image paths.

## Try it

1. Choose the same-folder, subfolder, and parent-folder examples. Follow where each starts.
2. Choose @/. Compare its destination with the real Button import in Code.
3. Compare @/ with @base-ui/react, then try the page URL and image URL examples.

## How it works

### 1. Start from the file doing the import

./ means the folder containing this source file. A folder name after it moves into a subfolder. These component imports omit .jsx. Match the real file name and letter case. Import paths are not based on the current browser URL.

```jsx
// In src/app/nextjs/file-paths/demo.jsx:
import { TrailNote } from "./trail-note";
import { PathCard } from "./examples/path-card";
```

### 2. Move up with ../

../ moves up one folder. In examples/path-card.jsx, it moves from examples back to file-paths. Then trail-note identifies the file. ../../ would move up two folders.

```jsx
// In src/app/nextjs/file-paths/examples/path-card.jsx:
import { TrailNote } from "../trail-note";
// Reaches src/app/nextjs/file-paths/trail-note.jsx
```

### 3. Read @/ as the configured shortcut

In this project, @/ points to src/. The paths setting in the root tsconfig.json maps @/* to ./src/*. The star matches the rest of the path. This works in JavaScript files too; you do not need to add TypeScript types. Another project could configure a different shortcut.

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 4. Use the shortcut instead of counting folders

From this demo file, ../../../components/ui/button and @/components/ui/button reach the same component. The @/ version still starts from src when the importing component moves to a different folder. Braces depend on the export, not on which path you choose.

```jsx
// Two possible paths from this demo:
// "../../../components/ui/button"
// "@/components/ui/button"

import { Button } from "@/components/ui/button";
// Reaches src/components/ui/button.tsx
```

### 5. Match the import to the export

A named export uses braces in its import. Use the exported name, or rename it with as. A default export uses no braces; you can choose its local name. A file can have several named exports but only one default export. The path still tells JavaScript where to look. The export decides whether the import needs braces. Next.js page files must use a default export; Next.js loads those pages for you.

```jsx
// Named export in trail-note.jsx:
export function TrailNote() {
  return <p>A note for the trail.</p>;
}

// Import it in another file, with braces:
import { TrailNote } from "./trail-note";

// Default export in greeting.jsx (separate example):
export default function Greeting() {
  return <p>Hello!</p>;
}

// Import it in another file, without braces:
import Greeting from "./greeting";
// A default import can use a different local name:
import Welcome from "./greeting";
```

### 6. Keep imports separate from URLs

In Link href or an image src, a leading / starts at the website root. Route URLs leave out src/app and page.jsx. Asset URLs leave out public but keep the asset’s file name and extension. Do not use @/ as a shortcut in these browser URLs.

```jsx
// Page file: src/app/nextjs/pages/page.jsx
<Link href="/nextjs/pages">Open pages lesson</Link>

// Asset file: public/landscape.svg
<Image src="/landscape.svg" alt="Illustrated mountains and a sun"
  width={320} height={180} />
```

### 7. Recognize package names

react and next/link refer to installed packages or their entry points. @base-ui/react is a scoped package name: @base-ui is its scope. @base-ui/react/button selects the button entry. That @ sign is not the same as the @/ project shortcut. pnpm manages installed packages; do not edit their files in node_modules.

```jsx
import { useState } from "react";
import Link from "next/link";

// Inside the shared shadcn Button file:
import { Button as ButtonPrimitive } from "@base-ui/react/button";
```

## Quick reference

| Path                     | Meaning                                   |
| ------------------------ | ----------------------------------------- |
| `./trail-note`           | Start in the importing file’s folder.     |
| `./examples/path-card`   | Enter the examples subfolder.             |
| `../trail-note`          | Move up one folder, then find the file.   |
| `@/components/ui/button` | Start at this project’s src folder.       |
| `react`                  | Use an installed package.                 |
| `@base-ui/react/button`  | Use the button entry of a scoped package. |
| `/nextjs/pages` in href  | Navigate to a page from the site root.    |
| `/landscape.svg` in src  | Request a file stored in public.          |

## Try a change

Add a small named component beside demo.jsx in a copy of the project. Import it with ./ and render it. Then move it into a subfolder and update the import.

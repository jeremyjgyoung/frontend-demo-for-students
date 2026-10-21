# Find the file you need

Learn a few important paths. You do not need to understand every file before starting.

## Try it

1. Choose a task. Find the file or folder suggested below it.
2. Compare the role of page.jsx, layout.jsx, and globals.css.
3. Find the JavaScript notes. Check why @/components points inside src.

## How it works

### 1. Start with the page

src/app/page.jsx supplies the home page. A folder such as src/app/about with page.jsx supplies /about. layout.jsx wraps pages and commonly holds shared providers or navigation. In this course, demo.jsx holds each lesson’s working example.

```jsx
src / app / page.jsx;
layout.jsx;
globals.css;
about / page.jsx;
```

### 2. Put images in public

A file in public is served from the site root. Do not include public in the browser URL. Keep a useful alt description when an image communicates information.

```jsx
// File: public/club-photo.webp
<Image
  src="/club-photo.webp"
  alt="Club members walking together"
  width={960}
  height={540}
/>
```

### 3. Understand import paths

@/ is configured to mean src/. A path starting with ./ begins in the same folder; ../ moves up one folder. Match file names and letter case. These rules help you find the code an import uses.

```jsx
import { Button } from "@/components/ui/button";
// File: src/components/ui/button.tsx

import { ClubNote } from "./club-note";
// File: club-note.jsx beside the importing file
```

### 4. Leave generated files alone

Edit source files. node_modules contains installed packages. .next contains generated output. pnpm-lock.yaml records dependency versions and is updated by pnpm. package.json contains commands and package names. Do not fix an app by editing generated output.

```jsx
src/app/          // Pages and lesson source
src/components/   // Shared components
public/           // Static assets
package.json      // Scripts and packages
node_modules/     // Installed packages; do not hand-edit
.next/            // Generated output; do not hand-edit
```

### 5. JavaScript is welcome

This project accepts .js and .jsx files without TypeScript types. Use .jsx for a component that contains JSX. Existing shadcn components can remain .tsx; you can import them from JavaScript without converting them.

```jsx
// club-note.jsx
export function ClubNote() {
  return <p>Bring a coat.</p>;
}
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

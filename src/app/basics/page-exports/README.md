# Why pages use default exports

See how Next.js finds a page and how a default import differs from a named import.

## Try it

1. Read the club page below. It is imported with no braces in demo.jsx.
2. Open Route view. Next.js renders that same page file automatically. Return with Imported view or browser Back.
3. Compare demo.jsx, example/page.jsx, and club-note.jsx in Code.

## How it works

### 1. Next.js needs a route entry

A page.jsx file makes a route available. Next.js expects that file’s default export to be the page component. It loads the component automatically for the URL; you do not normally import pages to create routes. The function can be named Page, AboutPage, or another clear name. The file name and folder determine the route. A page may also have supported named exports such as metadata; its page component still uses the default export.

```jsx
// src/app/about/page.jsx → /about
export default function AboutPage() {
  return <h1>About our club</h1>;
}
```

### 2. Import a default export without braces

If you import that component yourself, use no braces. The importing file chooses a local name. In this working demo, ExamplePage is imported as ClubPage. React renders the component when it sees `<ClubPage />`. Use a capitalized local name when rendering it as JSX.

```jsx
// example/page.jsx
export default function ExamplePage() {
  return <article>Club information</article>;
}

// demo.jsx
import ClubPage from "./example/page";
// Render it with <ClubPage />.
```

### 3. Compare a named export

Most components you write in this project use named exports. Their imports use braces and match the exported name. Pages and layouts are exceptions because Next.js expects a default export for those entry files. JavaScript allows default exports in other files too; named exports are this project’s teaching convention.

```jsx
// club-note.jsx
export function ClubNote() {
  return <p>Bring a coat.</p>;
}

// demo.jsx
import { ClubNote } from "./club-note";
```

### 4. Reuse parts rather than whole routes

Importing the tiny page here demonstrates JavaScript syntax. In a growing app, usually extract a reusable part into a normal component file, then import it into each page. You do not need to import one route into another just to link between them.

```jsx
// club-card.jsx
export function ClubCard() {
  return <p>Friday walk</p>;
}

// about/page.jsx
import { ClubCard } from "../club-card";
export default function AboutPage() {
  return <ClubCard />;
}
```

### 5. Keep the two meanings of default separate

A default export is a JavaScript module rule. Being a Server Component by default is a separate Next.js rule. A page with "use client" still needs a default export. Ordinary interactive components can still use named exports.

```jsx
// page.jsx needs a default export.
// "use client" enables client features; it does not change export syntax.
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

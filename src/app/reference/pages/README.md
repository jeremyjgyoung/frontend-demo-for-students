# Pages and navigation

Small examples for page folders, links, active navigation, titles, and icons.

## Create a page

A folder inside src/app becomes a URL when it contains page.jsx. Pages and layouts use default exports because Next.js requires them.

```jsx
// src/app/about/page.jsx
export default function Page() {
  return <h1>About our club</h1>;
}
```

## When to use "use client"

Pages and layouts are Server Components by default. Add `"use client";` at the top of an interactive component file, before the imports. This lets it use `useState`, `useEffect`, and event handlers such as `onClick` in the browser.

```jsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Counter() {
  const [count, setCount] = useState(0);

  function addOne() {
    setCount(count + 1);
  }

  return <Button onClick={addOne}>Count: {count}</Button>;
}
```

Keep the page as a Server Component and import this counter into it. You do not need the directive in every file: components imported by a Client Component join its client code. Client Components can still receive an initial HTML preview from the server. Use browser-only values such as `window` inside an event handler or effect. Keep page `metadata` in a Server Component.

## Make a button-style link

Use a link for navigation. Apply buttonVariants to the link rather than nesting a button inside it.

```jsx
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

<Link href="/images" className={buttonVariants({ variant: "outline" })}>
  Explore images
</Link>;
```

## Highlight a section

Read the path in a Client Component. Test Home with an exact match. Include a slash when testing child routes.

```jsx
const pathname = usePathname();
const active = pathname === "/images" || pathname.startsWith("/images/");
```

## Set the title and favicon

Export metadata from a server page. Replace src/app/icon.svg to change the browser icon. The heading inside the page is separate from the tab title.

```jsx
export const metadata = { title: "Image examples" };
// Default metadata: src/app/layout.jsx
// Site icon: src/app/icon.svg
```

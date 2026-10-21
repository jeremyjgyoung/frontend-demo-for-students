# When to use "use client"

Keep the page on the server. Add browser interaction in a small Client Component.

## Try it

1. Click Add one. React updates the count without opening a new page.
2. Reset the count. Find the named event handlers in Code.
3. Compare page.jsx with demo.jsx. Only the interactive file starts with "use client".

## How it works

### 1. Start with the server

Pages and layouts are Server Components by default. They can render headings and import a small interactive component. This page keeps its metadata on the server.

```jsx
import { LessonDemo } from "./demo";
export const metadata = { title: "Counter lesson" };
export default function Page() {
  return <LessonDemo />;
}
```

### 2. Mark the interactive file

Put "use client" at the top, before imports. This makes the file a Client Component entry point. Use it for state, effects, and event handlers such as onClick.

```jsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
```

### 3. Connect state to an event

count stores a number. Clicking the button calls addOne. setCount asks React to show the new value. The named function makes the action easy to find.

```jsx
const [count, setCount] = useState(0);
function addOne() {
  setCount(count + 1);
}
<Button onClick={addOne}>Add one</Button>;
```

### 4. Keep the boundary small

Components imported by a Client Component join its client code. You do not need the directive in every file. Client Components can still receive initial HTML from the server. Read browser-only values such as window inside an event handler or effect. Keep secrets and page metadata on the server.

```jsx
// page.jsx: server page and metadata
// demo.jsx: "use client", state, and click handlers
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

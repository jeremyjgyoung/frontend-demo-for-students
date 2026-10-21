# Fix one error at a time

Use the error message to find one cause. Make a small fix, then check again.

## Try it

1. Choose an example problem. Compare the message, likely cause, and corrected code.
2. Find the file path and line number in a real error before editing.
3. Check the preview after one change. Use the terminal for install or build messages.

## How it works

### 1. Read the first useful message

An error message usually names a file and a location. Start there. Later messages may be caused by the first problem. The examples below describe common messages; the exact wording can vary.

```jsx
// Read: the file, the line, and what failed.
// Change one thing, save, and check again.
```

### 2. Match the import to the export

Default imports use no braces. Named imports use braces. Check the actual source file instead of changing names at random. Next.js pages need a default component export.

```jsx
// Default page export:
import ClubPage from "./example/page";
// Named reusable component:
import { ClubNote } from "./club-note";
```

### 3. Check paths and client features

Module not found often means a wrong path, letter case, or missing package. An import starting with ./ refers to a local file. A package name refers to an installed package. If state or click handlers need client features, put "use client" before imports in the interactive file.

```jsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
```

### 4. Separate saving, running, and building

Saving updates your source file. pnpm dev serves a preview. pnpm build checks a production build. Use the printed address if the port changed. Stop an unwanted terminal server with Ctrl+C. Restart a stuck dev server after checking its message; reinstalling everything is not the first step.

```jsx
// Before asking for help, keep:
// 1. The exact error text.
// 2. The file and line.
// 3. What you changed.
// 4. What you expected to happen.
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

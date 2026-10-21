# Design loading and missing pages

Show what is happening. Give the user a useful next step.

## Try it

1. Run the loading preview. Notice the disabled action.
2. Open the real loading page.
3. Open the missing page, then follow its home link.

## How it works

### 1. Explain the wait

Show a short message while an action is busy. Prevent repeat clicks when they would start the same work again.

```jsx
<Button disabled={loading}>
  {loading ? "Loading…" : "Try loading feedback"}
</Button>
```

### 2. Use the Next.js loading file

A loading.jsx file supplies feedback while its route is loading. The slow practice page waits briefly on the server so you can see this behavior.

```jsx
// src/app/nextjs/feedback/slow/loading.jsx
export default function Loading() {
  return <p role="status">Loading the practice page…</p>;
}
```

### 3. Give a way forward

The not-found.jsx file gives unknown routes a useful response. A clear link is more helpful than a dead end.

```jsx
<h1>We could not find that page</h1>
<Link href="/">Choose a lesson</Link>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

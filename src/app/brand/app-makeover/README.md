# Apply a style across your app

Use a short checklist to turn a style guide into a consistent page.

## Try it

1. Compare the plain and styled page.
2. Name three changes and explain what each one helps.
3. Use the checklist on your own project.

## How it works

### 1. Apply the shared rules first

Start with globals.css. Set color pairs, fonts, and radius values there. Then use the semantic Tailwind utilities in your pages and shared components.

```jsx
// Shared: globals.css
// Page arrangement: the page JSX
// Repeated controls: components/ui
```

### 2. Check the whole interface

A home page can look finished while dialogs, empty states, or phone navigation still use old choices. Check the same controls in different states.

```jsx
// Default → hover → focus → selected → disabled
// Wide screen → narrow screen
// Light surface → dark surface
```

### 3. Finish the identity

Change the visible name and logo in navigation. Set the real browser title in server metadata and replace app/icon.svg. Use the same image and icon direction throughout the page.

```jsx
// src/app/layout.jsx
export const metadata = { title: "Adventure Club" };
// Replace src/app/icon.svg with your own icon.
```

### 4. Record what you applied

Update the style guide after checking real examples. Keep a reason for the main choices. The guide and the app should describe the same design.

```jsx
// Decision → code change → visible result → check
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

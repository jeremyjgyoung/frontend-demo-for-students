# Before publishing

A short check for usefulness, accessibility, and loading.

## Use the page

Try real tasks with a keyboard. Check visible focus, names, labels, contrast, zoom, and small screens. Respect reduced motion.

```jsx
// Tab → Enter or Space → Escape
// Try 200% zoom and a narrow screen.
```

## Check images and loading

Reserve image space. Use appropriate sizes. Keep heavy optional features out of pages that do not need them.

```jsx
<Image
  src="/landscape.svg"
  alt="Mountains"
  width={960}
  height={540}
  className="h-auto w-full"
/>
```

## Check the page identity

Give pages useful titles and descriptions. Check the icon, headings, links, and unknown-page response. A title is useful for browser tabs as well as search.

```jsx
export const metadata = {
  title: "Adventure Club",
  description: "Find a school activity and see when to join.",
};
```

## Measure, then improve

Run Lighthouse and inspect actual network requests. An automated score does not prove that the site is accessible. Fix one useful problem and test again.

```jsx
// Observe → change one thing → check again
```

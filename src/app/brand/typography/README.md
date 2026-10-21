# Set fonts and text styles

Choose a heading font, a body font, and a small set of readable text styles.

## Try it

1. Compare serif and sans-serif headings.
2. Adjust the heading size and body line height.
3. Find where the heading overrides the inherited body font.

## How it works

### 1. Define the shared font choices

The project maps --font-sans and --font-heading in its Tailwind theme. Body text can inherit font-sans. A heading can choose font-heading explicitly.

```jsx
@theme inline {
  --font-sans: Arial, Helvetica, sans-serif;
  --font-heading: Georgia, serif;
}

// JSX:
<h2 className="font-heading text-3xl font-semibold">Club news</h2>
```

### 2. Understand inheritance

A font on a parent normally applies to its text children. An element with its own font choice overrides that inherited value. The preview changes the heading without changing the paragraph.

```jsx
<article className="font-sans">
  <h2 className="font-serif">A distinct heading</h2>
  <p>The body keeps the sans-serif font.</p>
</article>
```

### 3. Load a font file when needed

Next.js can load a font with next/font/local. Supply a real font file you are licensed to use. The path is relative to the file importing it. Add its variable class to the body and map the variable in globals.css. The system-font preview does not require a download.

```jsx
// src/app/layout.jsx, after adding src/app/fonts/club.woff2:
import localFont from "next/font/local";
const clubFont = localFont({
  src: "./fonts/club.woff2",
  variable: "--font-club",
});
// Apply className={clubFont.variable} to body.

// In globals.css, inside @theme inline:
// --font-sans: var(--font-club), Arial, sans-serif;
```

### 4. Keep the scale small

Pick a few sizes and repeat them. text-3xl changes size, font-semibold changes weight, and leading-7 changes line spacing. Test long titles and narrow screens.

```jsx
<h2 className="text-3xl leading-tight font-semibold">A title</h2>
<p className="max-w-prose text-base leading-7">Body text.</p>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

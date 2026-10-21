# Make content easier to read and use

Compare contrast, enlarge text, and respect reduced motion.

## Try it

1. Compare the strong and weak text colors. The rest of the lesson stays readable.
2. Enlarge the preview text. Also try 200% browser zoom and a narrow window.
3. Move the dot, then choose Reduce motion in preview and try again. Your device preference is respected too.

## How it works

### 1. Make text easy to distinguish

Contrast is the difference between foreground and background. WCAG’s minimum for ordinary text is 4.5:1, with exceptions such as large text. The weak-color sample is a comparison, not a recommended style. Check real color pairs with a contrast tool.

```jsx
// Clear normal text on white:
<p className="bg-white text-slate-900">Meet at 15:30.</p>
// Compare a weak pair, then improve it:
<p className="bg-white text-slate-400">Meet at 15:30.</p>
```

### 2. Let content grow

People may enlarge text or zoom the page. Avoid fixed heights around text. Let controls wrap and use responsive widths. This preview enlarges its own text; browser zoom is a separate check of the complete page.

```jsx
<article className="max-w-prose space-y-4 p-6">
  <h2 className="text-2xl font-semibold">Friday walk</h2>
  <p className="leading-relaxed">Meet at the library.</p>
</article>
```

### 3. Do not rely on color alone

The practice card says Activity open as well as using a colored border. A person should not need to distinguish one color from another to understand a status or error.

```jsx
<p>Activity open: places are available.</p>
```

### 4. Respect motion preferences

Some people find moving interfaces uncomfortable. Use a device’s prefers-reduced-motion setting. In Tailwind, motion-reduce:transition-none removes a transition. The preview checkbox is an extra local comparison; the device setting still wins.

```jsx
<div className="transition-transform motion-reduce:transition-none" />

/* Equivalent rule in a CSS Module: */
@media (prefers-reduced-motion: reduce) {
  .dot { transition: none; }
}
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

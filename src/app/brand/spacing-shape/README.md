# Apply spacing and shape

Turn your style guide into Tailwind spacing, widths, corners, borders, and shadows.

## Try it

1. Compare compact and spacious versions.
2. Change the corners. Notice that the button and card follow the radius token.
3. Compare a border alone with a border and shadow.

## How it works

### 1. Separate page space from component space

A page container controls the whole content area. Card padding controls space inside a card. gap or space-y controls the space between items.

```jsx
<section className="mx-auto max-w-2xl space-y-6 p-6">
  <article className="space-y-4 p-6">Card content</article>
</section>
```

### 2. Repeat a small spacing scale

Use a few useful spacing choices. This example compares p-3 with p-6 and space-y-2 with space-y-4. Choose values for a reason, not a different number for every gap.

```jsx
className={spacious
  ? "space-y-4 p-6"
  : "space-y-2 p-3"}
```

### 3. Share corners through a token

The existing theme derives rounded-lg and other radius sizes from --radius. Change the shared value for a consistent family of shapes. A fixed rounded-full class has a different, intentional purpose.

```jsx
// Save in :root in globals.css:
--radius: 1rem;

// A local preview can override it:
style={{ "--radius": round ? "1rem" : "0.125rem" }}
```

### 4. Use depth to explain a surface

A shadow can suggest a raised surface. A border can separate content without elevation. Test both before combining them.

```jsx
<article className="rounded-lg border bg-card p-6 shadow-md">
  Card content
</article>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

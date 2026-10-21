# Typography and spacing

Adjust line length, line height, and space between related items.

## Try it

1. Read both versions at a narrow and wide width.
2. Compare the paragraph spacing and title.

## How it works

### 1. Limit line length

max-w-prose limits a text block using a reading-oriented width. The text still fits a narrower screen.

```jsx
<article className="max-w-prose">
```

### 2. Keep a repeatable type scale

Use a small set of sizes for titles, body text, and labels. leading controls the space between lines; space-y controls space between blocks.

```jsx
<article className="space-y-5 text-base leading-8">
  <h2 className="text-2xl font-semibold">Make room</h2>
  <p>Body text belongs here.</p>
</article>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

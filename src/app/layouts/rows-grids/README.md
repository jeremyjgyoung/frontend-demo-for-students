# Rows and grids

Compare a wrapping row with a grid that changes its column count.

## Try it

1. Switch between grid and row.
2. Resize the screen and compare how items move.

## How it works

### 1. Use grid for rows and columns

This grid has one column by default, two from sm, and three from xl. The classes remain visible in the example.

```jsx
className = "grid gap-4 sm:grid-cols-2 xl:grid-cols-3";
```

### 2. Use flex for a row that can wrap

flex-wrap lets items move to another line. flex-1 shares available space between the cards.

```jsx
<div className="flex flex-wrap gap-4">
  <article className="min-w-40 flex-1">…</article>
</div>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

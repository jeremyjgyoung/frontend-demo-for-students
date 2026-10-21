# Make a layout work on phones

Let controls wrap and keep wide content inside its own scroll area.

## Try it

1. Open this page at a phone width.
2. Show the long title. Check that it stays inside the card.
3. Scroll the table without scrolling the whole page sideways.

## How it works

### 1. Let controls wrap

A row of actions should not push beyond the screen. flex-wrap starts a new line when needed.

```jsx
<div className="flex flex-wrap gap-2">…</div>
```

### 2. Contain wide content

The table keeps a useful minimum width. Its container scrolls. The page itself stays within the viewport. The region has a name and can receive keyboard focus.

```jsx
<div
  className="overflow-x-auto"
  tabIndex={0}
  role="region"
  aria-label="Trip schedule, scroll horizontally"
>
  <table className="w-full min-w-[38rem]">…</table>
</div>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

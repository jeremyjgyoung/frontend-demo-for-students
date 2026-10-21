# Page width and spacing

Use a maximum width and a small spacing scale to make a page easier to read.

## Try it

1. Compare the full width with the readable width.
2. Change the gap. Watch how the group feels.

## How it works

### 1. Center a container

mx-auto shares the spare horizontal space on both sides. max-w-xl prevents a text block from becoming too wide.

```jsx
<article className="mx-auto max-w-xl rounded-xl border p-6">
```

### 2. Separate padding from gap

Padding adds space inside a box. Gap adds space between the children of flex or grid. Here, the slider changes the grid gap.

```jsx
style={{ display: "grid", gap: gap }}
```

### 3. Use a small scale

Choose a few repeatable values. For example, gap-2, gap-4, and gap-6 make small, medium, and large groups.

```jsx
<div className="grid gap-4">…</div>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

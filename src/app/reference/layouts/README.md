# Layout recipes

Keep a few small layout patterns nearby.

## Centered content

The width can shrink on a phone. Padding keeps the content away from the screen edges.

```jsx
<div className="mx-auto max-w-5xl px-5 py-8">Content</div>
```

## Responsive grid

Start with one column. Add more columns when there is room.

```jsx
<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
  <article>First card</article>
  <article>Second card</article>
  <article>Third card</article>
</div>
```

## Sidebar and content

min-w-0 lets the main content shrink inside the grid. Wide code or tables should scroll inside their own container.

```jsx
<div className="grid gap-6 md:grid-cols-[14rem_1fr]">
  <aside>Section navigation</aside>
  <main className="min-w-0">Page content</main>
</div>
```

## Wrapping actions

Do not force every action to fit on one line.

```jsx
<div className="flex flex-wrap gap-3">
  <Button>Join</Button>
  <Button variant="outline">View details</Button>
</div>
```

## Split hero

Use one column first. Add a second column for the words and visual when there is room.

```jsx
<section className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
  <div>Heading, description, and link</div>
  <div>Visual</div>
</section>
```

## Article and sticky contents

Keep the article readable. Only make a short supporting column sticky when it can fit on screen.

```jsx
<div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_11rem]">
  <article className="max-w-prose min-w-0 leading-7">Article</article>
  <aside className="self-start md:sticky md:top-6">Contents</aside>
</div>
```

## Full-height page and footer

Use a minimum height so longer content can grow. flex-1 gives the middle area spare space.

```jsx
<div className="flex min-h-dvh flex-col">
  <header>Header</header>
  <main className="flex-1">Page content</main>
  <footer>Footer</footer>
</div>
```

## Container-based previews

@container checks the space inside a box. @2xl: adds columns at 36rem of container width. md: checks the browser width instead.

```jsx
<div className="@container">
  <div className="grid gap-4 @2xl:grid-cols-2">
    <article>First</article>
    <article>Second</article>
  </div>
</div>
```

# Build a full-height app screen

Keep a header and footer around a flexible list-and-detail area.

## Try it

1. Select a different project. Its details appear in the second panel.
2. Switch to Narrow. The list moves above the selected project.
3. Turn on Extra notes. Watch the footer move down with the content.

## How it works

### 1. Stack the outer parts

An app shell is the frame around an app: header, content, and footer. flex-col stacks those parts. min-h-[32rem] gives this embedded demo a minimum height. Content can still make it taller.

```jsx
<div className="flex min-h-[32rem] flex-col">
  <header>App name</header>
  <div className="flex-1">List and selected item</div>
  <footer>Helpful status</footer>
</div>
```

### 2. Let the middle take the space

flex-1 fills spare space in the vertical layout. The footer sits below it. This is sometimes called a sticky footer, but it does not use position: sticky or fixed. For a real full-page app, min-h-dvh can use the browser height.

```jsx
// Embedded example:
className = "flex min-h-[32rem] flex-col";

// A full-page app:
className = "flex min-h-dvh flex-col";
```

### 3. Show a list and a detail panel

A list-and-detail layout helps a person inspect one item at a time. The list is first in the HTML. A grid puts the detail beside it only when there is room.

```jsx
<div className="grid flex-1 @2xl:grid-cols-[13rem_minmax(0,1fr)]">
  <aside>Project buttons</aside>
  <section className="min-w-0">Selected project details</section>
</div>
```

### 4. Let content grow naturally

A fixed height can cut off text. A minimum height allows longer content to push the footer down. Use overflow-auto only when you deliberately need a separate scroll area. Avoid nested scroll areas for a simple reading page.

```jsx
<section className="min-w-0 p-6">
  <h2>{project.title}</h2>
  <p>{project.description}</p>
  {showNotes && <p>Extra project notes...</p>}
</section>
```

## Try a change

Change one width or gap. Predict the result. Check the Wide and Narrow views.

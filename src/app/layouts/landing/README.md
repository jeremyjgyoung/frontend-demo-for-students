# Build a landing page

Combine a split hero, a feature grid, and a clear next step.

## Try it

1. Switch between Wide and Narrow. Watch the hero and feature cards stack.
2. Follow See the plan. Notice that it moves to a section inside the demo.
3. Change the hero column ratio in demo.jsx. Keep the words before the visual.

## How it works

### 1. Start with sections

A landing page introduces one idea. Give each section one job: explain the idea, show benefits, or give a next step. Use a section with a heading for each part.

```jsx
<section aria-labelledby="landing-hero-title">
  <h2 id="landing-hero-title">Make room for your next idea.</h2>
  <p>A short message explains what the club offers.</p>
  <a href="#landing-plan">See the plan</a>
</section>
```

### 2. Give the hero two columns

A hero is the large introduction near the top of a page. Start with one column. At a container width of 36rem, use two columns. The text gets slightly more space.

```jsx
<div className="@container">
  <section className="grid gap-8 @2xl:grid-cols-[1.2fr_1fr]">
    <div>Words and a link</div>
    <div>The visual</div>
  </section>
</div>
```

### 3. Repeat a card layout

Use a grid for related items. gap-4 sets the space between cards. Each card is one article. On a narrow screen, the cards stay in one column.

```jsx
<div className="grid gap-4 @2xl:grid-cols-3">
  <article>Pick an idea</article>
  <article>Build together</article>
  <article>Share your work</article>
</div>
```

### 4. Test the space the demo has

@container marks the outer box. @2xl: checks that box, not the whole browser. This makes the Narrow control work inside the lesson. For a full page, md: can respond to the browser width instead.

```jsx
className={width === "narrow" ? "@container mx-auto max-w-sm" : "@container"}
// @2xl: starts at a container width of 36rem.
// md: starts at a browser width of 48rem.
```

## Try a change

Change one width or gap. Predict the result. Check the Wide and Narrow views.

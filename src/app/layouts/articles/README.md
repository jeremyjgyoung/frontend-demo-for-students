# Build an article with a sidebar

Keep long text readable and place supporting links beside it.

## Try it

1. Use the section links to move to a heading in the article.
2. Switch to Narrow. The section links move above the article.
3. On a wide view, scroll the page. The section links stay near the top until their grid ends.

## How it works

### 1. Limit the width of long text

Long lines are hard to follow. max-w-prose limits the text area to about 65 characters in this font. leading-7 adds space between lines. Keep headings close to the text they introduce.

```jsx
<article className="max-w-prose space-y-8 leading-7">
  <h2>A guide to your first project</h2>
  <section>One part of the guide</section>
</article>
```

### 2. Add a supporting column

Use this layout for guides, help pages, or a project brief. The contents list comes first in the HTML. On a wide view, CSS places it on the right. On a narrow view, it stays above the text.

```jsx
<div className="grid gap-8 @2xl:grid-cols-[minmax(0,1fr)_11rem]">
  <aside className="@2xl:col-start-2 @2xl:row-start-1">Contents</aside>
  <article className="min-w-0 @2xl:col-start-1 @2xl:row-start-1">Guide</article>
</div>
```

### 3. Keep useful links in view

sticky keeps an element near an edge while its parent is on screen. top-6 sets that distance. self-start stops the sidebar stretching to the full grid height. Only use sticky when the sidebar can fit in the available height.

```jsx
className = "self-start @2xl:sticky @2xl:top-6";
// The sidebar stops sticking when its parent grid ends.
```

### 4. Link to a heading

A link that starts with # points to an id in the current page. Give each target a unique id. scroll-mt-8 leaves space above the target after the browser scrolls to it.

```jsx
<a href="#article-first-version">Build a first version</a>

<section id="article-first-version" className="scroll-mt-8">
  <h3>Build a first version</h3>
</section>
```

## Try a change

Change one width or gap. Predict the result. Check the Wide and Narrow views.

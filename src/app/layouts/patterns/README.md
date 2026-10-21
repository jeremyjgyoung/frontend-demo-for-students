# Common page layouts

Choose a layout for a landing page, dashboard, guide, or app.

## Choose a pattern

| Pattern                 | Useful for                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------ |
| Split hero              | Introduce a product, club, or event. Give the main message and visual their own columns.               |
| Feature or card grid    | Show related choices, benefits, or projects. Use equal columns and repeat a clear card structure.      |
| Sidebar and content     | Keep navigation beside a work area. Stack the sidebar above the content when space is limited.         |
| Dashboard               | Put summary values above a detailed work list. Group information that helps a person make a decision.  |
| Article and contents    | Use a narrow reading column for a guide or news story. Add supporting links beside the text.           |
| List and detail         | Let a person select an item and inspect it in the next panel. Useful for messages, files, or projects. |
| Header, content, footer | Give the middle area spare space. Keep the footer after the content, even on a short page.             |
| Centered reading column | Use one limited-width column for a simple announcement or article. Not every page needs a sidebar.     |

## Try it

1. Compare the diagrams. Pick a pattern for a school club website.
2. Open a demo with a Try link. Switch between Wide and Narrow.
3. Read Explanation, then Code. Find the grid or flex classes that arrange the parts.

## How it works

### 1. Choose a pattern for the task

A landing page introduces an idea. A dashboard summarizes work. An article supports reading. A list-and-detail screen helps a person inspect one item. Start with the task, then choose the layout.

```jsx
// A useful planning question:
// What does a person need to find or do on this page?
```

### 2. Use grid for columns

grid creates a layout with rows and columns. gap-6 adds space between items. This example starts with one column. md:grid-cols-2 adds two equal columns when the browser is at least 48rem wide.

```jsx
<section className="grid gap-6 md:grid-cols-2">
  <div>Words and a link</div>
  <div>A useful visual</div>
</section>
```

### 3. Use flex for a row or stack

flex arranges items along one direction. flex-col makes a vertical stack. flex-1 lets the content use spare space. The footer follows the content instead of covering it.

```jsx
<div className="flex min-h-dvh flex-col">
  <header>Site name and navigation</header>
  <main className="flex-1">Page content</main>
  <footer>Contact details</footer>
</div>
```

### 4. Make space for narrow screens

Keep the useful reading order in the HTML. Start with one column. Add columns when there is enough space. The new demos use @container and @2xl: so they respond to the preview box. This lets you test a narrow layout without shrinking the whole lesson.

```jsx
<div className="@container">
  <div className="grid gap-6 @2xl:grid-cols-2">
    <article>First in the reading order</article>
    <article>Second in the reading order</article>
  </div>
</div>
```

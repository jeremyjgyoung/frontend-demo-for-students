# Build a sidebar and dashboard

Arrange navigation, summary cards, and a work list in one screen.

## Try it

1. Switch to Narrow. The sidebar moves above the work area.
2. Choose This week or Next week. The cards and task list use the same selected week.
3. Read the code. Find the fixed sidebar width and the flexible content column.

## How it works

### 1. Separate navigation from work

A dashboard brings useful information into one place. The sidebar holds choices. The main area shows the current choice. Keep the sidebar first in the HTML so the reading order stays clear.

```jsx
<div className="grid @2xl:grid-cols-[11rem_minmax(0,1fr)]">
  <aside>Week choices</aside>
  <section className="min-w-0">Selected week</section>
</div>
```

### 2. Let the content column shrink

11rem gives the sidebar a steady width. minmax(0,1fr) lets the other column take the remaining space and shrink. min-w-0 also lets the content box shrink around long text.

```jsx
className = "grid @2xl:grid-cols-[11rem_minmax(0,1fr)]";
// Start with one column. Add the sidebar column when there is room.
```

### 3. Put related numbers in cards

A small grid makes summary values easy to compare. Each number needs a label. Use a description list: dt is the label and dd is its value.

```jsx
<dl className="grid gap-3 @xl:grid-cols-3">
  <div className="rounded-xl border p-4">
    <dt>Tasks</dt>
    <dd className="text-3xl font-bold">{tasks.length}</dd>
  </div>
</dl>
```

### 4. Keep selected styling clear

State stores the selected week. Clicking a button changes that state. aria-pressed tells assistive technology which choice is selected. The color gives sighted users the same information.

```jsx
const [week, setWeek] = useState("this");

<button
  type="button"
  aria-pressed={week === "this"}
  onClick={function showThisWeek() {
    setWeek("this");
  }}
>
  This week
</button>;
```

## Try a change

Change one width or gap. Predict the result. Check the Wide and Narrow views.

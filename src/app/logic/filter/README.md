# Filter and sort visible content

Filter an array already in the browser. Give immediate, useful feedback.

## Try it

1. Search for walk.
2. Choose Art and sort by cost.
3. Search for something missing, then reset.

## How it works

### 1. Filter local data

No database query is sent. filter creates a new array containing the matching objects. Normalizing case makes the text search easier to use.

```jsx
const nameMatches = activity.name
  .toLowerCase()
  .includes(search.trim().toLowerCase());
const categoryMatches = category === "All" || activity.category === category;
return nameMatches && categoryMatches;
```

### 2. Sort the filtered copy

filter already returned a new array. Sorting it does not change the source array. For a source array without filtering, copy it before sorting.

```jsx
sort(function compare(a, b) {
  return sort === "cost" ? a.cost - b.cost : a.name.localeCompare(b.name);
});
```

### 3. Explain the result

Show the count, selected category, and a way to reset. An empty result should explain what users can change.

```jsx
{
  visible.length === 0 ? (
    <p>No activities match. Try a different word.</p>
  ) : (
    <ul>
      {visible.map(function renderActivity(activity) {
        return <li key={activity.id}>{activity.name}</li>;
      })}
    </ul>
  );
}
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

# Update a local checklist

Change one object in an array and derive the completed count.

## Try it

1. Complete two tasks. Check that the other item keeps its value.
2. Uncheck one task, then reset the list.
3. Reload and compare the initial values.

## How it works

### 1. Give each item a stable ID

The label is for people. The ID identifies the object. Use the ID for the React key and for finding the object to update.

```jsx
{ id: "water", title: "Bring water", done: false }
```

### 2. Return a new array and object

map creates an array. The matching item becomes a new object with its done value changed. The other objects are returned unchanged. Do not assign item.done directly in the old state array.

```jsx
setItems(
  items.map(function updateItem(item) {
    return item.id === id ? { ...item, done: !item.done } : item;
  }),
);
```

### 3. Derive progress

Calculate completed from the current items. There is no separate completed state to keep synchronized. The checkbox, label style, and count all reflect the same data.

```jsx
const completed = items.filter(function isDone(item) {
  return item.done;
}).length;
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

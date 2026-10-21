# Design selection behavior

Make selected items clear and give users a way to clear them.

## Try it

1. Select two activities.
2. Deselect one with the keyboard.
3. Clear all selections.

## How it works

### 1. Store stable IDs

Store which items are selected. Do not store a second selected count: derive it from selected.length.

```jsx
const [selected, setSelected] = useState([]);
const active = selected.includes(activity.id);
```

### 2. Update without changing the old array

filter removes an ID. Spreading the old array adds an ID to a new array. React can then render the changed state.

```jsx
if (selected.includes(id)) {
  setSelected(
    selected.filter(function keepOther(value) {
      return value !== id;
    }),
  );
} else {
  setSelected([...selected, id]);
}
```

### 3. Show more than a color

The control uses a border, visible selected text, and aria-pressed. A user should not need to identify blue to understand the selection.

```jsx
<button type="button" aria-pressed={active}>
  {active ? "Selected ✓" : "Choose activity"}
</button>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

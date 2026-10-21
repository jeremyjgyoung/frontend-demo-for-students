# Pass props and handle events

Reuse one small card. Keep the shared selection in its parent.

## Try it

1. Choose an activity. Notice that only one card is selected.
2. Choose the other card, then clear the choice.
3. Read the parent demo first, then activity-card.jsx.

## How it works

### 1. Pass values into a component

Props are named inputs. The two cards use the same component with different title and description values. selected is a boolean, not a copy of the parent state.

```jsx
<ActivityCard
  title="Trail walk"
  description="Go outside and follow an easy route."
  selected={selected === "walk"}
  onChoose={chooseWalk}
/>
```

### 2. Pass the function, not its result

onChoose receives the function chooseWalk. Do not write chooseWalk() here: that would call it during render. The child attaches this function to its button click.

```jsx
function chooseWalk() {
  setSelected("walk");
}

// In ActivityCard:
<Button onClick={onChoose}>Choose Trail walk</Button>;
```

### 3. Keep shared state in the parent

The parent owns one selected value because both cards depend on it. The cards report clicks through the handler. Values flow down through props; events call functions that can change state.

```jsx
const [selected, setSelected] = useState(null);

export function ActivityCard({ title, description, selected, onChoose }) {
  // Use the props to render the card.
}
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

# Change styles with state

Connect buttons and sliders to visible class and style changes.

## Try it

1. Highlight the cards.
2. Adjust the radius.
3. Switch between list and grid.

## How it works

### 1. Store the choice

The event handler changes state. React renders the classes that match that state. Do not manually search the DOM to add a class.

```jsx
const [highlighted, setHighlighted] = useState(false);
function toggleHighlight() {
  setHighlighted(!highlighted);
}
```

### 2. Choose complete Tailwind classes

Both complete class strings appear in the source. Tailwind can discover them. Avoid building part of a class name from a variable.

```jsx
className={highlighted
  ? "border-2 border-blue-600 bg-blue-50 p-6 text-blue-950"
  : "border-2 border-border p-6"}
```

### 3. Use style for a changing number

A slider can produce many values. The style prop is a simple fit for the exact number. CSS property names use camelCase in this object.

```jsx
style={{ borderRadius: radius + "px" }}

// Convert the input string to a number:
setRadius(Number(event.target.value));
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

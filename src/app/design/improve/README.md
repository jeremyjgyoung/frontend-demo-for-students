# Improve a crowded interface

Improve a card by changing one design decision at a time.

## Try it

1. Turn all improvements off.
2. Enable one change at a time. Explain its effect.

## How it works

### 1. Change one variable

Compare the same content. If the words change as well as the design, it is harder to tell what helped.

```jsx
const [spacing, setSpacing] = useState(true);
const [hierarchy, setHierarchy] = useState(true);
```

### 2. Explain the reason

More decoration does not always create more clarity. Identify the main message, support it with useful spacing, and keep one clear action.

```jsx
className={hierarchy
  ? "text-3xl font-semibold"
  : "text-xl font-bold"}
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

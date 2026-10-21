# Color, surfaces, and depth

Compare ways to separate content without decorating every edge.

## Try it

1. Compare the three surfaces.
2. Check whether the content remains clear in dark mode.

## How it works

### 1. Give color a role

Choose colors for backgrounds, text, actions, and feedback. A status needs words or another cue as well as color.

```jsx
<span className="bg-emerald-100 text-emerald-950">Spaces available</span>
```

### 2. Choose one clear separator

A background change, border, or shadow can separate a card. Compare them before combining them. Explicit colors in this demo are intentional samples, not global theme changes.

```jsx
const styles = {
  border: "border-2 border-slate-300",
  background: "bg-blue-50 text-blue-950",
  shadow: "border border-slate-200 bg-white text-slate-900 shadow-lg",
};
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

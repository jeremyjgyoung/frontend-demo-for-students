# Changing styles

Use state for the choice, then render the matching appearance.

## Conditional classes

Keep full class names in the source so Tailwind can discover them.

```jsx
className={selected
  ? "border-blue-600 bg-blue-50 text-blue-950"
  : "border-border bg-background text-foreground"}
```

## Numeric styles

Use an inline value when a control can produce many exact numbers. React style property names use camelCase.

```jsx
const [radius, setRadius] = useState(16);
<div style={{ borderRadius: radius + "px" }}>Card</div>;
```

## Component variants

Use a component variant when the appearance is part of its shared API.

```jsx
<Button variant="outline" size="sm">
  View details
</Button>
```

## Avoid partial class names

Do not construct bg-${color}-500. Write the complete class strings and select between them.

```jsx
const colors = {
  blue: "bg-blue-700 text-white",
  green: "bg-emerald-700 text-white",
};
<div className={colors[color]}>Status</div>;
```

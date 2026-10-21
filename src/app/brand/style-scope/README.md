# Know where styles belong

Choose whether a style should affect one element, a shared component, or the whole app.

## Try it

1. Compare a change to one button with a change to both buttons.
2. Choose the whole app. Notice that the card surface also changes.
3. Find the file you would edit for each scope.

## How it works

### 1. Change one instance

Use className when only this instance needs a change. A class on one Button does not rewrite the shared component.

```jsx
<Button className="rounded-full">Join the club</Button>
```

### 2. Change a shared rule

The Button source lives in src/components/ui/button.tsx. Its variants contain the shared class choices. Edit a default or add a named variant when the appearance should be reused. The preview repeats classes so you can compare the scope without changing the real site.

```jsx
// src/components/ui/button.tsx
// Shared button rules and named variants live here.
```

### 3. Change a theme value

A CSS variable is a named value. Elements that use it can update together. The app reads shared values from globals.css. A fixed bg-violet-700 class does not follow the primary variable.

```jsx
// src/app/globals.css
:root {
  --primary: #7c3aed;
  --primary-foreground: #ffffff;
}
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

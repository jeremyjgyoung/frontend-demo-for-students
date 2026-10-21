# Apply your color palette

Give colors jobs, then apply them to a small app with Tailwind and shadcn.

## Try it

1. Change primary. Find two elements that update together.
2. Change the page background and card surface separately.
3. Compare the dark surface, then find the real token definitions in Code.

## How it works

### 1. Name a color by its job

Use roles such as primary, background, card, and border. A foreground is the text or icon color placed on that background. These names help the design stay consistent.

```jsx
--primary: #1d4ed8;
--primary-foreground: #ffffff;
--card: #ffffff;
--card-foreground: #0f172a;
```

### 2. Connect the variable to Tailwind

The existing @theme inline block maps the CSS variables to Tailwind utilities. bg-primary reads the primary variable. Do not replace this Tailwind 4 setup with an old Tailwind configuration example.

```jsx
@theme inline {
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
}
```

### 3. Use the role in a component

The shared Button source already uses primary and primary-foreground. A custom badge can use the same utilities. A fixed bg-blue-700 class would keep that fixed blue when primary changes.

```jsx
<Button>Join the walk</Button>
<span className="bg-primary text-primary-foreground">Open</span>
```

### 4. Save the real app theme

The picker changes variables only inside this preview. Copy chosen values into :root for the default theme and .dark for dark mode. Keep readable color pairs in both.

```jsx
// src/app/globals.css
:root { --primary: #1d4ed8; }
.dark { --primary: #93c5fd; }
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

# Customize shadcn components consistently

Choose between a local class, an existing variant, and a shared component change.

## Try it

1. Compare the variants on the button and link.
2. Apply pill-shaped corners to both.
3. Find the shared variant definitions in the button source.

## How it works

### 1. Start with the existing API

variant and size are named component choices. Use them before adding a new pile of classes. className is useful for one instance.

```jsx
<Button variant="outline" size="lg" className="rounded-full">
  Join the club
</Button>
```

### 2. Change a shared component deliberately

The editable Button source is in components/ui/button.tsx. Its cva definition groups the base classes, variants, and sizes. If every action needs a new shape, change the shared rule or add a clear named variant. Check all states afterward.

```jsx
// src/components/ui/button.tsx
// Base classes: styles used by every button.
// variants: named appearances such as outline.
// sizes: named dimensions such as lg.
```

### 3. Give a link the same appearance

buttonVariants returns the classes without rendering a Button. Apply them to Link so normal navigation behavior remains. Do not wrap a button inside a link.

```jsx
<Link
  href="/brand/style-guide"
  className={buttonVariants({ variant: "outline", size: "lg" })}
>
  Open the style guide
</Link>
```

### 4. Preserve Base UI behavior

When customizing a dialog, menu, or other Base UI component, keep the primitive parts and their behavior. Use the installed render API for triggers. Styling should not remove keyboard access, focus, or accessible labels.

```jsx
<DialogTrigger render={<Button variant="outline" />}>
  Open details
</DialogTrigger>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

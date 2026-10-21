# Theme and style guide

Record a small set of shared choices and show them in use.

## Theme tokens

The root variables define values. Tailwind maps them to utilities. Use semantic names such as primary or border rather than treating every color as a separate rule.

```jsx
@theme inline {
  --color-primary: var(--primary);
}
:root { --primary: #1d4ed8; }
```

## Dark mode

Define readable foreground and background pairs. Test the whole interface instead of only inverting the background.

```jsx
.dark {
  --background: #0f172a;
  --foreground: #f8fafc;
}
```

## A small guide

Include the reason for each choice. Show actual text and controls as examples.

```jsx
// 1. Brand words and audience
// 2. Type sizes and line spacing
// 3. Color roles and contrast
// 4. Spacing and corners
// 5. Component examples
// 6. Image direction and writing style
```

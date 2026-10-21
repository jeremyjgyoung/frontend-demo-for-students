# Make content work with screen readers

Use alt text, headings, and clear control names to make the same information available in different ways.

## Try it

1. Read the blind-student invitation example. Compare useful and vague alt text.
2. Choose Decorative. Find the same invitation details in the nearby HTML.
3. Inspect the real heading, label, and input in the small club section.

## How it works

### 1. Start with the person and task

Imagine a blind student finding a club invitation. They use a screen reader to read text and page structure through speech or braille. The useful information is when and where to meet. Put important details in HTML when possible.

```jsx
<Image
  src="/club-walk.svg"
  alt="Adventure Club Friday walk. Meet at the school library at 15:30. Bring water and a coat."
  width={960}
  height={600}
/>
```

### 2. Match alt text to the purpose

Alt text supplies the information or function the image contributes. A poster is too vague for an invitation. If the complete details are already in nearby HTML and the image adds only decoration, use an empty alt attribute.

```jsx
<Image src="/club-walk.svg" alt="" width={960} height={600} />
<h3>Adventure Club Friday walk</h3>
<p>Meet at the school library at 15:30. Bring water and a coat.</p>
```

### 3. Give the page a useful structure

Headings describe sections. Use h2 for a section below this lesson’s h1, then h3 for a smaller section inside it. Do not choose a heading level only to get a larger font. Use Tailwind to change its appearance.

```jsx
<section aria-labelledby="club-heading">
  <h2 id="club-heading">Club information</h2>
  <h3>Meeting time</h3>
  <p>Friday at 15:30.</p>
</section>
```

### 4. Name each control

A visible label tells a person what to enter. htmlFor matches the input id. An icon-only action needs a name such as Show meeting details, not Info icon. Prefer native elements and visible text before adding ARIA.

```jsx
<Label htmlFor="club-name">Club name</Label>
<Input id="club-name" defaultValue="Adventure Club" />
// For an icon-only button:
<Button aria-label="Show meeting details"><Info aria-hidden="true" /></Button>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

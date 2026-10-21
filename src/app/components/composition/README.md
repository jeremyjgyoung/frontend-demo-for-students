# Build a component from parts

Read the parts of a shadcn card and see how they fit together.

## Try it

1. Find the header, content, and footer in the card.
2. Hide the footer. Notice that the card still works as a content group.
3. Show the footer and open the details.

## How it works

### 1. Read the component tree

A compound component uses several named parts. Card is the outer container. CardHeader, CardContent, and CardFooter give its content consistent layout and spacing. They are real components, not magic class names.

```jsx
<Card>
  <CardHeader>Heading and description</CardHeader>
  <CardContent>Main content</CardContent>
  <CardFooter>Actions</CardFooter>
</Card>
```

### 2. Pass content through children

Content placed between opening and closing tags becomes the children prop. CardContent receives the paragraph inside it. This composition makes it possible to arrange content without building a new card API for every page.

```jsx
<CardContent>
  <p>Meet at the school library at 15:30.</p>
</CardContent>
```

### 3. Keep semantic structure

A styled title is not always a heading element. This example places an h2 inside CardTitle. Inspect the installed component source to see which element it renders.

```jsx
<CardTitle>
  <h2>Friday walk</h2>
</CardTitle>
```

### 4. Include only the parts you need

A card does not need a footer if there is no action. The boolean controls whether that section renders.

```jsx
{
  footer && (
    <CardFooter>
      <Button onClick={showDetails}>Read the details</Button>
    </CardFooter>
  );
}
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

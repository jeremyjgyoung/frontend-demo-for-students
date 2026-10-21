export const lesson = {
  topic: "components",
  slug: "composition",
  title: "Build a component from parts",
  summary: "Read the parts of a shadcn card and see how they fit together.",
  steps: [
    "Find the header, content, and footer in the card.",
    "Hide the footer. Notice that the card still works as a content group.",
    "Show the footer and open the details.",
  ],
  explanations: [
    {
      title: "1. Read the component tree",
      text: "A compound component uses several named parts. Card is the outer container. CardHeader, CardContent, and CardFooter give its content consistent layout and spacing. They are real components, not magic class names.",
      code: "<Card>\n  <CardHeader>Heading and description</CardHeader>\n  <CardContent>Main content</CardContent>\n  <CardFooter>Actions</CardFooter>\n</Card>",
    },
    {
      title: "2. Pass content through children",
      text: "Content placed between opening and closing tags becomes the children prop. CardContent receives the paragraph inside it. This composition makes it possible to arrange content without building a new card API for every page.",
      code: "<CardContent>\n  <p>Meet at the school library at 15:30.</p>\n</CardContent>",
    },
    {
      title: "3. Keep semantic structure",
      text: "A styled title is not always a heading element. This example places an h2 inside CardTitle. Inspect the installed component source to see which element it renders.",
      code: "<CardTitle><h2>Friday walk</h2></CardTitle>",
    },
    {
      title: "4. Include only the parts you need",
      text: "A card does not need a footer if there is no action. The boolean controls whether that section renders.",
      code: "{footer && <CardFooter>\n  <Button onClick={showDetails}>Read the details</Button>\n</CardFooter>}",
    },
  ],
};

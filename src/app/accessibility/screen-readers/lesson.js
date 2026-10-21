export const lesson = {
  topic: "accessibility",
  slug: "screen-readers",
  title: "Make content work with screen readers",
  summary:
    "Use alt text, headings, and clear control names to make the same information available in different ways.",
  steps: [
    "Read the blind-student invitation example. Compare useful and vague alt text.",
    "Choose Decorative. Find the same invitation details in the nearby HTML.",
    "Inspect the real heading, label, and input in the small club section.",
  ],
  explanations: [
    {
      title: "1. Start with the person and task",
      text: "Imagine a blind student finding a club invitation. They use a screen reader to read text and page structure through speech or braille. The useful information is when and where to meet. Put important details in HTML when possible.",
      code: '<Image src="/club-walk.svg"\n  alt="Adventure Club Friday walk. Meet at the school library at 15:30. Bring water and a coat."\n  width={960} height={600} />',
    },
    {
      title: "2. Match alt text to the purpose",
      text: "Alt text supplies the information or function the image contributes. A poster is too vague for an invitation. If the complete details are already in nearby HTML and the image adds only decoration, use an empty alt attribute.",
      code: '<Image src="/club-walk.svg" alt="" width={960} height={600} />\n<h3>Adventure Club Friday walk</h3>\n<p>Meet at the school library at 15:30. Bring water and a coat.</p>',
    },
    {
      title: "3. Give the page a useful structure",
      text: "Headings describe sections. Use h2 for a section below this lesson\u2019s h1, then h3 for a smaller section inside it. Do not choose a heading level only to get a larger font. Use Tailwind to change its appearance.",
      code: '<section aria-labelledby="club-heading">\n  <h2 id="club-heading">Club information</h2>\n  <h3>Meeting time</h3>\n  <p>Friday at 15:30.</p>\n</section>',
    },
    {
      title: "4. Name each control",
      text: "A visible label tells a person what to enter. htmlFor matches the input id. An icon-only action needs a name such as Show meeting details, not Info icon. Prefer native elements and visible text before adding ARIA.",
      code: '<Label htmlFor="club-name">Club name</Label>\n<Input id="club-name" defaultValue="Adventure Club" />\n// For an icon-only button:\n<Button aria-label="Show meeting details"><Info aria-hidden="true" /></Button>',
    },
  ],
};

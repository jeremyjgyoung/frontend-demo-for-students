export const lesson = {
  topic: "accessibility",
  slug: "keyboard",
  title: "Use the page without a mouse",
  summary: "Use real controls, visible focus, and predictable dialog behavior.",
  steps: [
    "Use Tab and Shift+Tab to move between the controls in the practice area.",
    "Use Enter or Space to save the activity or show the meeting details.",
    "Open the packing list. Use Tab inside it, then Escape. Check that focus returns to Open packing list.",
  ],
  explanations: [
    {
      title: "1. Design for more than a mouse",
      text: "A student may use a keyboard because of a motor disability, an injury, or a preference. Tab moves to the next focusable control; Shift+Tab goes back. Keep the document order sensible instead of adding positive tabIndex values.",
      code: '<Button onClick={toggleSaved}>Save activity</Button>\n<Link href="/accessibility/screen-readers">Read the invitation lesson</Link>',
    },
    {
      title: "2. Match the element to its job",
      text: "A button performs an action. A link navigates to another page. Native controls already support keyboard interaction. Do not make a clickable div and then rebuild its keyboard behavior.",
      code: 'function toggleSaved() { setSaved(!saved); }\n<Button onClick={toggleSaved} aria-pressed={saved}>\n  {saved ? "Remove saved activity" : "Save activity"}\n</Button>',
    },
    {
      title: "3. Keep focus visible",
      text: "Focus shows which control will respond to the next key. The site provides a visible focus outline. The icon button also has a name, expanded state, and a connection to its details.",
      code: '<Button aria-label="Show meeting details"\n  aria-expanded={showDetails} aria-controls="keyboard-details"\n  onClick={toggleDetails}>\n  <Info aria-hidden="true" />\n</Button>',
    },
    {
      title: "4. Keep dialog behavior intact",
      text: "The shadcn dialog uses Base UI for focus and dismissal. Give it a title and description. Check that focus stays in the modal while it is open and returns to the trigger after closing. A library helps, but you still need to test the complete task.",
      code: "<DialogTrigger render={<Button />}>Open packing list</DialogTrigger>\n<DialogContent>\n  <DialogTitle>Packing list</DialogTitle>\n  <DialogDescription>Bring these for the walk.</DialogDescription>\n  <DialogClose render={<Button />}>Done</DialogClose>\n</DialogContent>",
    },
  ],
};

# Use the page without a mouse

Use real controls, visible focus, and predictable dialog behavior.

## Try it

1. Use Tab and Shift+Tab to move between the controls in the practice area.
2. Use Enter or Space to save the activity or show the meeting details.
3. Open the packing list. Use Tab inside it, then Escape. Check that focus returns to Open packing list.

## How it works

### 1. Design for more than a mouse

A student may use a keyboard because of a motor disability, an injury, or a preference. Tab moves to the next focusable control; Shift+Tab goes back. Keep the document order sensible instead of adding positive tabIndex values.

```jsx
<Button onClick={toggleSaved}>Save activity</Button>
<Link href="/accessibility/screen-readers">Read the invitation lesson</Link>
```

### 2. Match the element to its job

A button performs an action. A link navigates to another page. Native controls already support keyboard interaction. Do not make a clickable div and then rebuild its keyboard behavior.

```jsx
function toggleSaved() {
  setSaved(!saved);
}
<Button onClick={toggleSaved} aria-pressed={saved}>
  {saved ? "Remove saved activity" : "Save activity"}
</Button>;
```

### 3. Keep focus visible

Focus shows which control will respond to the next key. The site provides a visible focus outline. The icon button also has a name, expanded state, and a connection to its details.

```jsx
<Button
  aria-label="Show meeting details"
  aria-expanded={showDetails}
  aria-controls="keyboard-details"
  onClick={toggleDetails}
>
  <Info aria-hidden="true" />
</Button>
```

### 4. Keep dialog behavior intact

The shadcn dialog uses Base UI for focus and dismissal. Give it a title and description. Check that focus stays in the modal while it is open and returns to the trigger after closing. A library helps, but you still need to test the complete task.

```jsx
<DialogTrigger render={<Button />}>Open packing list</DialogTrigger>
<DialogContent>
  <DialogTitle>Packing list</DialogTitle>
  <DialogDescription>Bring these for the walk.</DialogDescription>
  <DialogClose render={<Button />}>Done</DialogClose>
</DialogContent>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

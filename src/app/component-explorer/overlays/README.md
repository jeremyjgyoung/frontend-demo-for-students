# Dialogs, panels, and menus

Compare a focused dialog, a side panel, a popover, and an action menu.

## Try it

1. Open Activity details. Use Escape to close it and find the focus again.
2. Open Packing list. Compare the side panel with the dialog.
3. Open More actions and save the activity. Open Meeting place to see a popover.

## How it works

### 1. Choose an overlay for its job

A dialog focuses attention on one task. A sheet opens a supporting panel at an edge. A popover places small details near its trigger. A menu offers actions.

```jsx
<Dialog>
  <DialogTrigger render={<Button />}>Activity details</DialogTrigger>
  <DialogContent>Details</DialogContent>
</Dialog>
```

### 2. Keep the named parts

Title and description name the dialog for assistive technology. Base UI handles focus and dismissal. render combines the trigger behavior with the shared Button. Do not put one button inside another.

```jsx
<DialogHeader>
  <DialogTitle>Friday walk</DialogTitle>
  <DialogDescription>Meet at 15:30.</DialogDescription>
</DialogHeader>
```

### 3. Make menu choices do something

The Save action changes local state. An alert dialog is a better choice for confirming an important removal. Tooltips and hover cards should contain optional help, not essential instructions.

```jsx
function saveActivity() {
  setSaved(true);
}
<DropdownMenuItem onClick={saveActivity}>Save activity</DropdownMenuItem>;
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

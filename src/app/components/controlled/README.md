# Control a component’s state

Open a Base UI dialog from state. Apply a draft choice or cancel it.

## Try it

1. Open the dialog and choose bold. Cancel. The card keeps its old style.
2. Open it again and Apply. The card changes and the dialog closes.
3. Use Escape and check that focus returns to the trigger.

## How it works

### 1. Choose who owns the state

A controlled component receives its value from React state. This dialog receives open and reports changes through onOpenChange. With defaultOpen, the component would manage its own initial open state.

```jsx
const [open, setOpen] = useState(false);
<Dialog open={open} onOpenChange={changeOpen}>
  Dialog parts
</Dialog>;
```

### 2. Keep draft and applied choices separate

The draft is an unfinished edit. applied is the choice currently shown on the card. Opening the dialog copies the applied choice into the draft. Cancelling leaves applied unchanged.

```jsx
function changeOpen(value) {
  setOpen(value);
  if (value) {
    setDraft(applied);
  }
}
```

### 3. Apply the change deliberately

The named handler saves the draft and closes the dialog. Keep Base UI’s trigger, content, title, description, and close parts so keyboard and focus behavior remain intact.

```jsx
function applyChoice() {
  setApplied(draft);
  setOpen(false);
}
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

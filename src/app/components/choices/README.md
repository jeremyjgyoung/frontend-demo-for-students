# Choose the right component

Match the control to the task, then compare its appearance.

## Try it

1. Open a link, then return and try the action button.
2. Compare the checkbox with the switch.

## How it works

### 1. Keep link semantics

Use a link for a destination. Apply buttonVariants if it should look like a button. The Base UI Button is for actions.

```jsx
<Link href="/images" className={buttonVariants({ variant: "outline" })}>
  Open image lessons
</Link>
```

### 2. Match the control to the meaning

A checkbox includes or excludes a choice. A switch suggests a setting that takes effect immediately. A radio group chooses one option from a visible set. A select chooses one option from a menu.

```jsx
<Checkbox
  checked={newsletter}
  onCheckedChange={function changeNewsletter(value) {
    setNewsletter(value === true);
  }}
/>
```

### 3. Use the component callback

Base UI callbacks often pass the new value directly. They do not always pass a native DOM event. Read the component example before using event.target.

```jsx
<Switch
  checked={quiet}
  onCheckedChange={function changeQuiet(value) {
    setQuiet(value);
  }}
/>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

# Build a step-by-step interface

Keep choices while moving forward and back through a small interface.

## Try it

1. Choose an activity and continue.
2. Choose a date. Go back and check that the activity is still selected.
3. Read the summary, then start again.

## How it works

### 1. Keep the choices above the steps

All three values live in the same parent component. Switching the visible section does not discard them. A separate state value records the current step.

```jsx
const [step, setStep] = useState(1);
const [activity, setActivity] = useState("");
const [date, setDate] = useState("");
```

### 2. Render one section at a time

The conditions choose which section appears. This is one interface state, not a new URL for each step. Use actual routes when each step needs its own address.

```jsx
{
  step === 1 && <section>Choose an activity</section>;
}
{
  step === 2 && <section>Choose a date</section>;
}
{
  step === 3 && <section>Read the summary</section>;
}
```

### 3. Explain progress and prevent an empty next step

The page shows the current step and disables Continue until the needed choice exists. aria-current="step" marks the current item in the step list.

```jsx
const canContinue = step === 1 ? activity !== "" : date !== "";
<Button
  disabled={!canContinue}
  onClick={function goNext() {
    setStep(step + 1);
  }}
>
  Continue
</Button>;
```

### 4. Reset the whole task

Start again clears the choices and returns to the first step. Reset related values together so old choices do not appear in a new task.

```jsx
function restart() {
  setStep(1);
  setActivity("");
  setDate("");
}
```

### 5. Keep keyboard focus with the step

After a step changes, move focus to its heading. The ref points to that real element. Wait for the new heading to render. preventScroll keeps the outer lesson from jumping.

```jsx
const headingRef = useRef(null);

<h2 ref={headingRef} tabIndex={-1}>
  Choose an activity
</h2>;

requestAnimationFrame(function focusHeading() {
  headingRef.current?.focus({ preventScroll: true });
});
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

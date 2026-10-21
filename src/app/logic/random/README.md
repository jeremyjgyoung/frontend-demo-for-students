# Build a random generator

Choose an idea, avoid an immediate repeat, generate a number, and shuffle a list.

## Try it

1. Choose several ideas. Check that the previous idea does not repeat immediately.
2. Roll a number.
3. Shuffle the list and check that all four ideas remain.

## How it works

### 1. Choose after the click

Generate random values in an event handler. Rendering random content on the server and client can create different HTML. The initial output here is predictable.

```jsx
const choices = ideas.filter(function excludePrevious(item) {
  return item !== idea;
});
setIdea(choices[Math.floor(Math.random() * choices.length)]);
```

### 2. Generate an integer in a range

Math.random is at least 0 and less than 1. Multiplying by 6 gives a value below 6. floor removes the fraction; adding 1 gives an integer from 1 to 6. This is for a UI exercise, not secure passwords or identifiers.

```jsx
setNumber(Math.floor(Math.random() * 6) + 1);
```

### 3. Shuffle by swapping

Copy the array, then swap each item with a random earlier item or itself. This is the Fisher–Yates shuffle. Sorting with a random comparator does not give a fair shuffle.

```jsx
for (let index = shuffled.length - 1; index > 0; index -= 1) {
  const other = Math.floor(Math.random() * (index + 1));
  [shuffled[index], shuffled[other]] = [shuffled[other], shuffled[index]];
}
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

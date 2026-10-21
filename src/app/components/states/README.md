# Design useful interface states

Tell users what is happening and what they can do next.

## Try it

1. Try every state.
2. Find the next useful action in the empty and error states.
3. Use Tab to check focus and disabled behavior.

## How it works

### 1. Name the state

A small string makes the preview easy to follow. Only the chosen state renders. In a connected app, the request result would set this state.

```jsx
const [status, setStatus] = useState("empty");
```

### 2. Explain what to do next

An empty result is not always an error. Explain what happened and offer a useful action. Keep typed values when a request fails.

```jsx
{
  status === "empty" && (
    <Button
      onClick={function clearFilters() {
        setStatus("success");
      }}
    >
      Clear filters
    </Button>
  );
}
```

### 3. Use persistent text as well as appearance

Do not rely on color or a temporary toast alone. Give important feedback in the page. A status can announce a non-urgent change; an alert is for an important error.

```jsx
<p role="status">One trip found.</p>
<p role="alert">Your choices are still here. Try again.</p>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

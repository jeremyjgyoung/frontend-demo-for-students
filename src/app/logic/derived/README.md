# Derive what the interface shows

Calculate totals and messages from a small amount of state.

## Try it

1. Add two places and check the total.
2. Apply the discount. Notice that quantity does not change.
3. Try both limits. The relevant control becomes disabled.

## How it works

### 1. Store only independent choices

quantity and member can change independently. Subtotal, discount, and total can be calculated from them. Do not create separate state values that can fall out of sync.

```jsx
const [quantity, setQuantity] = useState(0);
const [member, setMember] = useState(false);
const subtotal = quantity * 12;
const discount = member ? subtotal * 0.25 : 0;
const total = subtotal - discount;
```

### 2. Render a message from the same state

Use conditions for empty, singular, and plural messages. The message and total use the same quantity, so they update together.

```jsx
quantity === 0
  ? "Choose at least one place to continue."
  : quantity === 1
    ? "One place selected."
    : quantity + " places selected.";
```

### 3. Prevent invalid actions

Disable removing at zero and adding at five. Explain the limits in visible text. In a real booking app the server would also validate them.

```jsx
<Button
  disabled={quantity === 5}
  onClick={function addPlace() {
    setQuantity(quantity + 1);
  }}
>
  Add one place
</Button>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

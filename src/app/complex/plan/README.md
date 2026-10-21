# Plan a calendar

Start with a small scope, a sketch, and a simple event object.

## Try it

1. Read the first-version list.
2. Show the event object and match its fields to visible content.

## How it works

### 1. Separate the problems

Plan the data, date calculations, layout, and interactions separately. Build a static view before adding state. You do not need every calendar feature in the first version.

```jsx
// 1. Data
// 2. Date calculations
// 3. Month layout
// 4. Navigation and details
```

### 2. Use a date-only value

The event date means a calendar day, not a moment in a timezone. Keep it as YYYY-MM-DD. Do not parse this string as a UTC timestamp just to display the day.

```jsx
const event = {
  id: "art",
  title: "Poster workshop",
  date: "2026-10-14",
  time: "15:30",
  place: "Art room",
};
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

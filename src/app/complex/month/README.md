# Build the month view

Build one calendar step with local data and direct code.

## Try it

1. Move from December to January.
2. Inspect February 2028 to check the leap day.

## How it works

### 1. Calculate the cells

getDay returns 0 for Sunday through 6 for Saturday. Add that many empty cells before day 1. Day 0 of the next month is the last day of this month, including leap years.

```jsx
const firstWeekday = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();
const cells = Array.from({ length: firstWeekday }, function emptyCell() {
  return null;
});
for (let day = 1; day <= daysInMonth; day += 1) {
  cells.push(day);
}
```

### 2. Render the month layout

The weekday headings and dates use seven grid columns. This is a visual month layout, not an ARIA date-picker grid. A real keyboard date picker has more interaction rules.

```jsx
<div className="grid grid-cols-7">
  {cells.map(function renderDay(day, index) {
    return <div key={index}>{day}</div>;
  })}
</div>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

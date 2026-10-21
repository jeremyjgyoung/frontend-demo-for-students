# Adapt and test the calendar

Build one calendar step with local data and direct code.

## Try it

1. Move from December to January.
2. Inspect February 2028 to check the leap day.
3. Choose an October 2026 event.
4. Narrow the browser and compare the agenda.

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

### 3. Match events to a date

Build a date-only key and compare it to event.date. A click selects the whole event object. Details render below the calendar so the small example needs no custom popup system.

```jsx
const date = monthKey + "-" + String(day).padStart(2, "0");
const dayEvents = events.filter(function onDay(event) {
  return event.date === date;
});
function chooseEvent() {
  setSelectedEvent(event);
}
```

### 4. Use the same data in a mobile view

A month grid becomes crowded on a phone. Show an agenda instead. Both views read the same events. Test February in a leap year, December to January, no events, and long titles. A production booking tool may need a tested calendar library.

```jsx
<div className="hidden md:block">Month grid</div>
<section className="md:hidden" aria-label="Mobile agenda">
  Agenda list
</section>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

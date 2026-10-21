# Tables and charts

Show the same local data as rows and as a chart.

## Try it

1. Compare each table value with its bar.
2. Switch to the next week. The table and chart use the same array.
3. Read the chart labels and the exact values in the table.

## How it works

### 1. Start with a small array

Each object is one club. members is a number. The table and chart read the same data; neither fetches from a database.

```jsx
const rows = [
  { club: "Art", members: 12 },
  { club: "Outdoors", members: 18 },
];
```

### 2. Use a table for exact values

Table preserves real table elements. A caption names the data. Header cells explain each column. The component provides a horizontal scroll container for narrow screens.

```jsx
<TableCaption>Club membership</TableCaption>
<TableHead scope="col">Club</TableHead>
<TableHead scope="col">Members</TableHead>
```

### 3. Use a chart for comparison

The chart wrapper uses Recharts. dataKey tells a bar which property to read. The config supplies a shared label and color. Keep the table as a clear alternative for exact values.

```jsx
<ChartContainer config={chartConfig} className="h-64 w-full">
  <BarChart data={rows}>
    <XAxis dataKey="club" />
    <Bar dataKey="members" fill="var(--color-members)" />
  </BarChart>
</ChartContainer>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

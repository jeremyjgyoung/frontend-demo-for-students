export const lesson = {
  topic: "component-explorer",
  slug: "data",
  title: "Tables and charts",
  summary: "Show the same local data as rows and as a chart.",
  steps: [
    "Compare each table value with its bar.",
    "Switch to the next week. The table and chart use the same array.",
    "Read the chart labels and the exact values in the table.",
  ],
  explanations: [
    {
      title: "1. Start with a small array",
      text: "Each object is one club. members is a number. The table and chart read the same data; neither fetches from a database.",
      code: 'const rows = [\n  { club: "Art", members: 12 },\n  { club: "Outdoors", members: 18 },\n];',
    },
    {
      title: "2. Use a table for exact values",
      text: "Table preserves real table elements. A caption names the data. Header cells explain each column. The component provides a horizontal scroll container for narrow screens.",
      code: '<TableCaption>Club membership</TableCaption>\n<TableHead scope="col">Club</TableHead>\n<TableHead scope="col">Members</TableHead>',
    },
    {
      title: "3. Use a chart for comparison",
      text: "The chart wrapper uses Recharts. dataKey tells a bar which property to read. The config supplies a shared label and color. Keep the table as a clear alternative for exact values.",
      code: '<ChartContainer config={chartConfig} className="h-64 w-full">\n  <BarChart data={rows}>\n    <XAxis dataKey="club" />\n    <Bar dataKey="members" fill="var(--color-members)" />\n  </BarChart>\n</ChartContainer>',
    },
  ],
};

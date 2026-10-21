export const lesson = {
  topic: "logic",
  slug: "checklist",
  title: "Update a local checklist",
  summary: "Change one object in an array and derive the completed count.",
  steps: [
    "Complete two tasks. Check that the other item keeps its value.",
    "Uncheck one task, then reset the list.",
    "Reload and compare the initial values.",
  ],
  explanations: [
    {
      title: "1. Give each item a stable ID",
      text: "The label is for people. The ID identifies the object. Use the ID for the React key and for finding the object to update.",
      code: '{ id: "water", title: "Bring water", done: false }',
    },
    {
      title: "2. Return a new array and object",
      text: "map creates an array. The matching item becomes a new object with its done value changed. The other objects are returned unchanged. Do not assign item.done directly in the old state array.",
      code: "setItems(items.map(function updateItem(item) {\n  return item.id === id\n    ? { ...item, done: !item.done }\n    : item;\n}));",
    },
    {
      title: "3. Derive progress",
      text: "Calculate completed from the current items. There is no separate completed state to keep synchronized. The checkbox, label style, and count all reflect the same data.",
      code: "const completed = items.filter(function isDone(item) {\n  return item.done;\n}).length;",
    },
  ],
};

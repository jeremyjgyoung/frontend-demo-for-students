export const lesson = {
  topic: "logic",
  slug: "selection",
  title: "Design selection behavior",
  summary: "Make selected items clear and give users a way to clear them.",
  steps: [
    "Select two activities.",
    "Deselect one with the keyboard.",
    "Clear all selections.",
  ],
  explanations: [
    {
      title: "1. Store stable IDs",
      text: "Store which items are selected. Do not store a second selected count: derive it from selected.length.",
      code: "const [selected, setSelected] = useState([]);\nconst active = selected.includes(activity.id);",
    },
    {
      title: "2. Update without changing the old array",
      text: "filter removes an ID. Spreading the old array adds an ID to a new array. React can then render the changed state.",
      code: "if (selected.includes(id)) {\n  setSelected(selected.filter(function keepOther(value) {\n    return value !== id;\n  }));\n} else {\n  setSelected([...selected, id]);\n}",
    },
    {
      title: "3. Show more than a color",
      text: "The control uses a border, visible selected text, and aria-pressed. A user should not need to identify blue to understand the selection.",
      code: '<button type="button" aria-pressed={active}>\n  {active ? "Selected \u2713" : "Choose activity"}\n</button>',
    },
  ],
};

export const lesson = {
  topic: "components",
  slug: "props",
  title: "Pass props and handle events",
  summary: "Reuse one small card. Keep the shared selection in its parent.",
  steps: [
    "Choose an activity. Notice that only one card is selected.",
    "Choose the other card, then clear the choice.",
    "Read the parent demo first, then activity-card.jsx.",
  ],
  explanations: [
    {
      title: "1. Pass values into a component",
      text: "Props are named inputs. The two cards use the same component with different title and description values. selected is a boolean, not a copy of the parent state.",
      code: '<ActivityCard title="Trail walk"\n  description="Go outside and follow an easy route."\n  selected={selected === "walk"}\n  onChoose={chooseWalk} />',
    },
    {
      title: "2. Pass the function, not its result",
      text: "onChoose receives the function chooseWalk. Do not write chooseWalk() here: that would call it during render. The child attaches this function to its button click.",
      code: 'function chooseWalk() { setSelected("walk"); }\n\n// In ActivityCard:\n<Button onClick={onChoose}>Choose Trail walk</Button>',
    },
    {
      title: "3. Keep shared state in the parent",
      text: "The parent owns one selected value because both cards depend on it. The cards report clicks through the handler. Values flow down through props; events call functions that can change state.",
      code: "const [selected, setSelected] = useState(null);\n\nexport function ActivityCard({ title, description, selected, onChoose }) {\n  // Use the props to render the card.\n}",
    },
  ],
};

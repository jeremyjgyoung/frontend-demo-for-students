export const lesson = {
  topic: "logic",
  slug: "styles",
  title: "Change styles with state",
  summary: "Connect buttons and sliders to visible class and style changes.",
  steps: [
    "Highlight the cards.",
    "Adjust the radius.",
    "Switch between list and grid.",
  ],
  explanations: [
    {
      title: "1. Store the choice",
      text: "The event handler changes state. React renders the classes that match that state. Do not manually search the DOM to add a class.",
      code: "const [highlighted, setHighlighted] = useState(false);\nfunction toggleHighlight() {\n  setHighlighted(!highlighted);\n}",
    },
    {
      title: "2. Choose complete Tailwind classes",
      text: "Both complete class strings appear in the source. Tailwind can discover them. Avoid building part of a class name from a variable.",
      code: 'className={highlighted\n  ? "border-2 border-blue-600 bg-blue-50 p-6 text-blue-950"\n  : "border-2 border-border p-6"}',
    },
    {
      title: "3. Use style for a changing number",
      text: "A slider can produce many values. The style prop is a simple fit for the exact number. CSS property names use camelCase in this object.",
      code: 'style={{ borderRadius: radius + "px" }}\n\n// Convert the input string to a number:\nsetRadius(Number(event.target.value));',
    },
  ],
};

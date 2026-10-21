export const lesson = {
  topic: "logic",
  slug: "derived",
  title: "Derive what the interface shows",
  summary: "Calculate totals and messages from a small amount of state.",
  steps: [
    "Add two places and check the total.",
    "Apply the discount. Notice that quantity does not change.",
    "Try both limits. The relevant control becomes disabled.",
  ],
  explanations: [
    {
      title: "1. Store only independent choices",
      text: "quantity and member can change independently. Subtotal, discount, and total can be calculated from them. Do not create separate state values that can fall out of sync.",
      code: "const [quantity, setQuantity] = useState(0);\nconst [member, setMember] = useState(false);\nconst subtotal = quantity * 12;\nconst discount = member ? subtotal * 0.25 : 0;\nconst total = subtotal - discount;",
    },
    {
      title: "2. Render a message from the same state",
      text: "Use conditions for empty, singular, and plural messages. The message and total use the same quantity, so they update together.",
      code: 'quantity === 0\n  ? "Choose at least one place to continue."\n  : quantity === 1\n    ? "One place selected."\n    : quantity + " places selected."',
    },
    {
      title: "3. Prevent invalid actions",
      text: "Disable removing at zero and adding at five. Explain the limits in visible text. In a real booking app the server would also validate them.",
      code: "<Button disabled={quantity === 5}\n  onClick={function addPlace() { setQuantity(quantity + 1); }}>\n  Add one place\n</Button>",
    },
  ],
};

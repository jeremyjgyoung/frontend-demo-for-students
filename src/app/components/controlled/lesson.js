export const lesson = {
  topic: "components",
  slug: "controlled",
  title: "Control a component’s state",
  summary:
    "Open a Base UI dialog from state. Apply a draft choice or cancel it.",
  steps: [
    "Open the dialog and choose bold. Cancel. The card keeps its old style.",
    "Open it again and Apply. The card changes and the dialog closes.",
    "Use Escape and check that focus returns to the trigger.",
  ],
  explanations: [
    {
      title: "1. Choose who owns the state",
      text: "A controlled component receives its value from React state. This dialog receives open and reports changes through onOpenChange. With defaultOpen, the component would manage its own initial open state.",
      code: "const [open, setOpen] = useState(false);\n<Dialog open={open} onOpenChange={changeOpen}>\n  Dialog parts\n</Dialog>",
    },
    {
      title: "2. Keep draft and applied choices separate",
      text: "The draft is an unfinished edit. applied is the choice currently shown on the card. Opening the dialog copies the applied choice into the draft. Cancelling leaves applied unchanged.",
      code: "function changeOpen(value) {\n  setOpen(value);\n  if (value) { setDraft(applied); }\n}",
    },
    {
      title: "3. Apply the change deliberately",
      text: "The named handler saves the draft and closes the dialog. Keep Base UI’s trigger, content, title, description, and close parts so keyboard and focus behavior remain intact.",
      code: "function applyChoice() {\n  setApplied(draft);\n  setOpen(false);\n}",
    },
  ],
};

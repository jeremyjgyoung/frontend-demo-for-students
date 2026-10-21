export const lesson = {
  topic: "components",
  slug: "choices",
  title: "Choose the right component",
  summary: "Match the control to the task, then compare its appearance.",
  steps: [
    "Open a link, then return and try the action button.",
    "Compare the checkbox with the switch.",
  ],
  explanations: [
    {
      title: "1. Keep link semantics",
      text: "Use a link for a destination. Apply buttonVariants if it should look like a button. The Base UI Button is for actions.",
      code: '<Link href="/images" className={buttonVariants({ variant: "outline" })}>\n  Open image lessons\n</Link>',
    },
    {
      title: "2. Match the control to the meaning",
      text: "A checkbox includes or excludes a choice. A switch suggests a setting that takes effect immediately. A radio group chooses one option from a visible set. A select chooses one option from a menu.",
      code: "<Checkbox checked={newsletter}\n  onCheckedChange={function changeNewsletter(value) {\n    setNewsletter(value === true);\n  }} />",
    },
    {
      title: "3. Use the component callback",
      text: "Base UI callbacks often pass the new value directly. They do not always pass a native DOM event. Read the component example before using event.target.",
      code: "<Switch checked={quiet}\n  onCheckedChange={function changeQuiet(value) {\n    setQuiet(value);\n  }} />",
    },
  ],
};

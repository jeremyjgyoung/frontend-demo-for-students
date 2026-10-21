export const lesson = {
  topic: "components",
  slug: "patterns",
  title: "Dialogs, menus, and tabs",
  summary:
    "Use a dialog for a focused task, a menu for actions, and tabs for related views.",
  steps: [
    "Open the dialog and press Escape. Notice where focus returns.",
    "Choose a menu action.",
    "Move between the inner tabs with the keyboard.",
  ],
  explanations: [
    {
      title: "1. Compose a trigger with render",
      text: "Base UI uses render to combine trigger behavior with the styled button. The trigger handles the interaction. Do not copy a Radix asChild example into this project.",
      code: "<DialogTrigger render={<Button />}>\n  Open trip details\n</DialogTrigger>",
    },
    {
      title: "2. Give the dialog a title",
      text: "The title and description explain the task. Base UI manages the dialog focus and dismissal behavior. Keep those parts when you customize the appearance.",
      code: "<DialogContent>\n  <DialogHeader>\n    <DialogTitle>Friday walk</DialogTitle>\n    <DialogDescription>Meet at 15:30.</DialogDescription>\n  </DialogHeader>\n</DialogContent>",
    },
    {
      title: "3. Keep related views in tabs",
      text: "A trigger value must match its content value. These views describe one trip. Use navigation links when the destination is a separate page.",
      code: '<TabsTrigger value="equipment">Equipment</TabsTrigger>\n<TabsContent value="equipment">Bring water.</TabsContent>',
    },
  ],
};

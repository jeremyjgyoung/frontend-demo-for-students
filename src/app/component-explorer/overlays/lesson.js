export const lesson = {
  topic: "component-explorer",
  slug: "overlays",
  title: "Dialogs, panels, and menus",
  summary:
    "Compare a focused dialog, a side panel, a popover, and an action menu.",
  steps: [
    "Open Activity details. Use Escape to close it and find the focus again.",
    "Open Packing list. Compare the side panel with the dialog.",
    "Open More actions and save the activity. Open Meeting place to see a popover.",
  ],
  explanations: [
    {
      title: "1. Choose an overlay for its job",
      text: "A dialog focuses attention on one task. A sheet opens a supporting panel at an edge. A popover places small details near its trigger. A menu offers actions.",
      code: "<Dialog>\n  <DialogTrigger render={<Button />}>Activity details</DialogTrigger>\n  <DialogContent>Details</DialogContent>\n</Dialog>",
    },
    {
      title: "2. Keep the named parts",
      text: "Title and description name the dialog for assistive technology. Base UI handles focus and dismissal. render combines the trigger behavior with the shared Button. Do not put one button inside another.",
      code: "<DialogHeader>\n  <DialogTitle>Friday walk</DialogTitle>\n  <DialogDescription>Meet at 15:30.</DialogDescription>\n</DialogHeader>",
    },
    {
      title: "3. Make menu choices do something",
      text: "The Save action changes local state. An alert dialog is a better choice for confirming an important removal. Tooltips and hover cards should contain optional help, not essential instructions.",
      code: "function saveActivity() { setSaved(true); }\n<DropdownMenuItem onClick={saveActivity}>Save activity</DropdownMenuItem>",
    },
  ],
};

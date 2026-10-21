export const lesson = {
  topic: "component-explorer",
  slug: "essentials",
  title: "Everyday essentials",
  summary: "Start with buttons, cards, badges, and small content groups.",
  steps: [
    "Save the activity. Notice that the action label and status badge update together.",
    "Click again to remove it from your practice list.",
    "Compare the card parts in Code, then open another component in this category.",
  ],
  explanations: [
    {
      title: "1. Start with the task",
      text: "A card groups related content. A button performs an action. A badge labels a category or status. Use these small parts before reaching for a more complex pattern.",
      code: "<Card>\n  <CardHeader>Title and description</CardHeader>\n  <CardContent>Related details</CardContent>\n  <CardFooter>Action</CardFooter>\n</Card>",
    },
    {
      title: "2. Keep content and behavior clear",
      text: "saved is the only changing value. Both the button label and badge read it. The badge is a label, not an extra button.",
      code: "const [saved, setSaved] = useState(false);\nfunction toggleSaved() { setSaved(!saved); }",
    },
    {
      title: "3. Use named imports",
      text: "The template already includes the component files. Import the parts you need from the local file. Keep a real heading inside CardTitle because its styling alone does not create a heading.",
      code: 'import { Button } from "@/components/ui/button";\nimport { Card, CardHeader, CardTitle } from "@/components/ui/card";\n<CardTitle><h2>Friday walk</h2></CardTitle>',
    },
  ],
};

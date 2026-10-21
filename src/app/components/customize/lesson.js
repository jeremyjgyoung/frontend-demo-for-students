export const lesson = {
  topic: "components",
  slug: "customize",
  title: "Import and use a component",
  summary:
    "Use the components already in the template. Import a component, add it to JSX, and change its props.",
  steps: [
    "Find the Button import at the top of demo.jsx in Code. All shadcn components are already included in the template.",
    "Change the variant and shape. Notice which props change the button.",
    "Click Join the club. Find the named function that handles the click.",
  ],
  explanations: [
    {
      title: "1. Import a component from the template",
      text: "The template already contains the shadcn components in src/components/ui. Start by importing the component you want. The braces mean this is a named import. @ points to src, so this path leads to src/components/ui/button.tsx. You can use this component from a JavaScript file.",
      code: 'import { Button } from "@/components/ui/button";',
    },
    {
      title: "2. Put the component in your JSX",
      text: "Write the component name with a capital letter. The words between the opening and closing tags become the button label. This example exports a component called ClubCard. Import ClubCard into a page to display it.",
      code: 'import { Button } from "@/components/ui/button";\n\nexport function ClubCard() {\n  return (\n    <section>\n      <h2>Walking club</h2>\n      <Button>Join the club</Button>\n    </section>\n  );\n}',
    },
    {
      title: "3. Change the props for this use",
      text: "Props are values you pass to a component. variant chooses a built-in appearance. size chooses the button size. className adds Tailwind classes to this button. You do not need to edit the shared button file to make a local style change.",
      code: '<Button variant="outline" size="lg" className="rounded-full">\n  Join the club\n</Button>',
    },
    {
      title: "4. Give the button an action",
      text: 'A button needs an onClick handler to perform an action. Pass the function name without parentheses so it runs when the person clicks. This example updates a message in the browser. It does not create an account or save to a database. Use "use client" because the component uses state and a click handler.',
      code: '"use client";\nimport { useState } from "react";\nimport { Button } from "@/components/ui/button";\n\nexport function JoinButton() {\n  const [message, setMessage] = useState("");\n\n  function joinClub() {\n    setMessage("You joined the demo club.");\n  }\n\n  return (\n    <div>\n      <Button onClick={joinClub}>Join the club</Button>\n      <p role="status">{message}</p>\n    </div>\n  );\n}',
    },
  ],
};

# Import and use a component

Use the components already in the template. Import a component, add it to JSX, and change its props.

## Try it

1. Find the Button import at the top of demo.jsx in Code. All shadcn components are already included in the template.
2. Change the variant and shape. Notice which props change the button.
3. Click Join the club. Find the named function that handles the click.

## How it works

### 1. Import a component from the template

The template already contains the shadcn components in src/components/ui. Start by importing the component you want. The braces mean this is a named import. @ points to src, so this path leads to src/components/ui/button.tsx. You can use this component from a JavaScript file.

```jsx
import { Button } from "@/components/ui/button";
```

### 2. Put the component in your JSX

Write the component name with a capital letter. The words between the opening and closing tags become the button label. This example exports a component called ClubCard. Import ClubCard into a page to display it.

```jsx
import { Button } from "@/components/ui/button";

export function ClubCard() {
  return (
    <section>
      <h2>Walking club</h2>
      <Button>Join the club</Button>
    </section>
  );
}
```

### 3. Change the props for this use

Props are values you pass to a component. variant chooses a built-in appearance. size chooses the button size. className adds Tailwind classes to this button. You do not need to edit the shared button file to make a local style change.

```jsx
<Button variant="outline" size="lg" className="rounded-full">
  Join the club
</Button>
```

### 4. Give the button an action

A button needs an onClick handler to perform an action. Pass the function name without parentheses so it runs when the person clicks. This example updates a message in the browser. It does not create an account or save to a database. Use "use client" because the component uses state and a click handler.

```jsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function JoinButton() {
  const [message, setMessage] = useState("");

  function joinClub() {
    setMessage("You joined the demo club.");
  }

  return (
    <div>
      <Button onClick={joinClub}>Join the club</Button>
      <p role="status">{message}</p>
    </div>
  );
}
```

## Try a change

Import Button into your own page. Add a label, choose a variant, and check the result. Add a named click handler if the button needs an action.

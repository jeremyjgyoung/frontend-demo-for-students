# Everyday essentials

Start with buttons, cards, badges, and small content groups.

## Try it

1. Save the activity. Notice that the action label and status badge update together.
2. Click again to remove it from your practice list.
3. Compare the card parts in Code, then open another component in this category.

## How it works

### 1. Start with the task

A card groups related content. A button performs an action. A badge labels a category or status. Use these small parts before reaching for a more complex pattern.

```jsx
<Card>
  <CardHeader>Title and description</CardHeader>
  <CardContent>Related details</CardContent>
  <CardFooter>Action</CardFooter>
</Card>
```

### 2. Keep content and behavior clear

saved is the only changing value. Both the button label and badge read it. The badge is a label, not an extra button.

```jsx
const [saved, setSaved] = useState(false);
function toggleSaved() {
  setSaved(!saved);
}
```

### 3. Use named imports

The template already includes the component files. Import the parts you need from the local file. Keep a real heading inside CardTitle because its styling alone does not create a heading.

```jsx
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
<CardTitle>
  <h2>Friday walk</h2>
</CardTitle>;
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

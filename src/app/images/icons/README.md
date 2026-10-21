# Lucide icons and icon buttons

Import an icon, change its appearance, and label the action.

## Try it

1. Change the size and stroke.
2. Save the place. Notice the icon and message change together.

## How it works

### 1. Import only the icons you use

Import named icons from lucide-react. Props control size and stroke. A class can control color.

```jsx
import { Compass, Heart } from "lucide-react";
<Compass size={32} strokeWidth={2} className="text-blue-600" />;
```

### 2. Label the action

The button needs a name even when it contains only an icon. aria-pressed records its toggle state. The decorative icon does not need a second name.

```jsx
<Button aria-label="Save this place" aria-pressed={saved}>
  <Heart aria-hidden="true" />
</Button>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

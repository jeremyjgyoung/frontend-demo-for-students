# shadcn Component Reference

See every component in one place at `/reference/components`. Use the Component Reference link in the site header. All components are already included in the template.

## Use the gallery

1. Look through the live previews by category.
2. Use a category link or search for a name.
3. Try a control. Open Code below it for the complete import and usage example.

The previews use local sample data. They do not create accounts, upload files, or contact a database. Dialogs, menus, tooltips, and notifications appear when you use their triggers.

## Use a component in your code

```jsx
import { Button } from "@/components/ui/button";

export function ProjectAction() {
  return <Button variant="outline">Save project</Button>;
}
```

Add a named click handler when the button needs to perform an action.

## Categories

### Everyday essentials

Button, Card, Badge, Avatar, Button Group, Separator.

### Navigation and views

Tabs, Breadcrumb, Navigation Menu, Pagination, Sidebar, Menubar.

### Dialogs, panels, and menus

Dialog, Sheet, Dropdown Menu, Popover, Alert Dialog, Drawer, Tooltip, Hover Card, Context Menu.

### Feedback and loading

Alert, Progress, Empty, Skeleton, Spinner, Sonner, Toast.

### Content, layout, and media

Accordion, Collapsible, Item, Aspect Ratio, Scroll Area, Resizable, Carousel, Kbd, Direction, Attachment, Bubble, Marker, Message, Message Scroller.

### Tables and charts

Table, Chart.

### Forms and inputs

Input, Textarea, Label, Field, Checkbox, Switch, Radio Group, Native Select, Select, Combobox, Slider, Calendar, Input Group, Input Otp, Toggle, Toggle Group, Command, Questionnaire.

## Find the code

- `page.jsx` supplies the page and reads each preview file for the Code panels.
- `gallery.jsx` displays the categories, search box, and preview cards.
- `preview-components.jsx` connects each component name to its preview.
- `previews/button.jsx`, `previews/dialog.jsx`, and the other preview files each contain one complete, small example.
- `src/components/ui` contains the shared components already in the template.

The preview source shown under Code is read from the actual file. It stays in sync when you edit the example.

# Dialogs, menus, and tabs

Use a dialog for a focused task, a menu for actions, and tabs for related views.

## Try it

1. Open the dialog and press Escape. Notice where focus returns.
2. Choose a menu action.
3. Move between the inner tabs with the keyboard.

## How it works

### 1. Compose a trigger with render

Base UI uses render to combine trigger behavior with the styled button. The trigger handles the interaction. Do not copy a Radix asChild example into this project.

```jsx
<DialogTrigger render={<Button />}>Open trip details</DialogTrigger>
```

### 2. Give the dialog a title

The title and description explain the task. Base UI manages the dialog focus and dismissal behavior. Keep those parts when you customize the appearance.

```jsx
<DialogContent>
  <DialogHeader>
    <DialogTitle>Friday walk</DialogTitle>
    <DialogDescription>Meet at 15:30.</DialogDescription>
  </DialogHeader>
</DialogContent>
```

### 3. Keep related views in tabs

A trigger value must match its content value. These views describe one trip. Use navigation links when the destination is a separate page.

```jsx
<TabsTrigger value="equipment">Equipment</TabsTrigger>
<TabsContent value="equipment">Bring water.</TabsContent>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

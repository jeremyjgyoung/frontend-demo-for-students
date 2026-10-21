# Inputs and choices

Choose a control based on the kind of value a person needs to enter.

## Try it

1. Enter a club name and notes. Read the object below the controls.
2. Change the checkbox and switch. Compare their purposes.
3. Choose a category and meeting day. Move the slider with arrow keys.

## How it works

### 1. Match the control to the value

Input collects a short value. Textarea collects several lines. A label names the control. Field can group a label, help text, input, and error. The name and notes below are separate state values.

```jsx
<Label htmlFor="preview-name">Club name</Label>
<Input id="preview-name" value={name} onChange={changeName} />
```

### 2. Match the choice behavior

Checkbox includes or excludes an option. Switch changes a setting immediately. Radio Group chooses one visible option from a short set. Select chooses from a list; Combobox also lets a person search.

```jsx
<Checkbox checked={newsletter} onCheckedChange={changeNewsletter} />
<Switch checked={quiet} onCheckedChange={changeQuiet} />
```

### 3. Read the component callback

Native inputs pass an event; read event.target.value. Base UI controls often pass the new value directly. Check the actual source. This slider uses a one-item array so it renders one thumb.

```jsx
function changeName(event) {
  setName(event.target.value);
}
function changeNewsletter(value) {
  setNewsletter(value === true);
}
<Slider value={[size]} onValueChange={changeSize} aria-label="Preview size" />;
```

### 4. Keep the example local

The object below shows the current values. No form is submitted and no database is updated. Calendar can choose a date, Input OTP can collect a short code, and Command can filter actions. Choose the smallest control that meets the task.

```jsx
const values = { name, notes, newsletter, quiet, category, day, size };
<pre>{JSON.stringify(values, null, 2)}</pre>;
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

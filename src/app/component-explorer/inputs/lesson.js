export const lesson = {
  topic: "component-explorer",
  slug: "inputs",
  title: "Inputs and choices",
  summary:
    "Choose a control based on the kind of value a person needs to enter.",
  steps: [
    "Enter a club name and notes. Read the object below the controls.",
    "Change the checkbox and switch. Compare their purposes.",
    "Choose a category and meeting day. Move the slider with arrow keys.",
  ],
  explanations: [
    {
      title: "1. Match the control to the value",
      text: "Input collects a short value. Textarea collects several lines. A label names the control. Field can group a label, help text, input, and error. The name and notes below are separate state values.",
      code: '<Label htmlFor="preview-name">Club name</Label>\n<Input id="preview-name" value={name} onChange={changeName} />',
    },
    {
      title: "2. Match the choice behavior",
      text: "Checkbox includes or excludes an option. Switch changes a setting immediately. Radio Group chooses one visible option from a short set. Select chooses from a list; Combobox also lets a person search.",
      code: "<Checkbox checked={newsletter} onCheckedChange={changeNewsletter} />\n<Switch checked={quiet} onCheckedChange={changeQuiet} />",
    },
    {
      title: "3. Read the component callback",
      text: "Native inputs pass an event; read event.target.value. Base UI controls often pass the new value directly. Check the actual source. This slider uses a one-item array so it renders one thumb.",
      code: 'function changeName(event) { setName(event.target.value); }\nfunction changeNewsletter(value) { setNewsletter(value === true); }\n<Slider value={[size]} onValueChange={changeSize} aria-label="Preview size" />',
    },
    {
      title: "4. Keep the example local",
      text: "The object below shows the current values. No form is submitted and no database is updated. Calendar can choose a date, Input OTP can collect a short code, and Command can filter actions. Choose the smallest control that meets the task.",
      code: "const values = { name, notes, newsletter, quiet, category, day, size };\n<pre>{JSON.stringify(values, null, 2)}</pre>",
    },
  ],
};

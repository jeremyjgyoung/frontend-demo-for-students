"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Slider } from "@/components/ui/slider";
export function LessonDemo() {
  const [name, setName] = useState("Adventure Club");
  const [notes, setNotes] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [quiet, setQuiet] = useState(false);
  const [category, setCategory] = useState("outdoors");
  const [day, setDay] = useState("friday");
  const [size, setSize] = useState(40);
  function changeName(event) {
    setName(event.target.value);
  }
  function changeNotes(event) {
    setNotes(event.target.value);
  }
  function changeNewsletter(value) {
    setNewsletter(value === true);
  }
  function changeQuiet(value) {
    setQuiet(value);
  }
  function changeCategory(value) {
    setCategory(value);
  }
  function changeDay(event) {
    setDay(event.target.value);
  }
  function changeSize(value) {
    setSize(value[0]);
  }
  const values = { name, notes, newsletter, quiet, category, day, size };
  return (
    <section className="min-w-0 space-y-6 rounded-xl border p-6">
      <h2 className="text-2xl font-semibold">
        Different controls, different values
      </h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="preview-name">Club name</Label>
          <Input id="preview-name" value={name} onChange={changeName} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="preview-notes">Notes</Label>
          <Textarea id="preview-notes" value={notes} onChange={changeNotes} />
        </div>
      </div>
      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-3">
          <Checkbox checked={newsletter} onCheckedChange={changeNewsletter} />
          Include newsletter
        </label>
        <label className="flex items-center gap-3">
          <Switch checked={quiet} onCheckedChange={changeQuiet} />
          Quiet mode
        </label>
      </div>
      <fieldset className="space-y-3">
        <legend className="mb-3 font-semibold">Category</legend>
        <RadioGroup
          value={category}
          onValueChange={changeCategory}
          aria-label="Category"
        >
          <label className="flex items-center gap-3">
            <RadioGroupItem value="outdoors" />
            Outdoors
          </label>
          <label className="flex items-center gap-3">
            <RadioGroupItem value="art" />
            Art
          </label>
        </RadioGroup>
      </fieldset>
      <div className="space-y-2">
        <Label htmlFor="preview-day">Meeting day</Label>
        <NativeSelect id="preview-day" value={day} onChange={changeDay}>
          <NativeSelectOption value="friday">Friday</NativeSelectOption>
          <NativeSelectOption value="wednesday">Wednesday</NativeSelectOption>
        </NativeSelect>
      </div>
      <div className="max-w-lg space-y-3">
        <p>Preview size: {size}</p>
        <Slider
          value={[size]}
          onValueChange={changeSize}
          min={0}
          max={100}
          aria-label="Preview size"
        />
      </div>
      <p className="text-sm text-muted-foreground">
        These are local values. No request is sent.
      </p>
      <pre
        tabIndex={0}
        aria-label="Current input values"
        className="overflow-auto rounded-xl bg-muted p-4 text-sm"
      >
        <code>{JSON.stringify(values, null, 2)}</code>
      </pre>
    </section>
  );
}

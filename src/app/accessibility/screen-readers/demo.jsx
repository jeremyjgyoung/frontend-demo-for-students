"use client";
import { AltTextDemo } from "./alt-text-demo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export function LessonDemo() {
  return (
    <div className="space-y-6">
      <AltTextDemo />
      <section
        aria-labelledby="club-heading"
        className="space-y-4 rounded-xl border p-6"
      >
        <h2 id="club-heading" className="text-2xl font-semibold">
          Club information
        </h2>
        <div className="space-y-2">
          <h3 className="font-semibold">Meeting time</h3>
          <p>Friday at 15:30. Meet at the school library.</p>
        </div>
        <div className="max-w-sm space-y-2">
          <Label htmlFor="club-name">Club name</Label>
          <Input id="club-name" defaultValue="Adventure Club" />
        </div>
        <p className="text-sm leading-6 text-muted-foreground">
          The heading gives this section a name. The label names the input.
          These details remain useful when someone cannot see the layout.
        </p>
      </section>
      <p className="text-sm leading-6 text-muted-foreground">
        The alt-text panel explains the code. It does not simulate a screen
        reader. Try real tasks with a screen reader and involve people who use
        one when possible.
      </p>
      <a
        className="inline-block text-sm underline"
        href="https://www.w3.org/WAI/tutorials/images/"
        target="_blank"
        rel="noopener noreferrer"
      >
        W3C: accessible images (new tab)
      </a>
    </div>
  );
}

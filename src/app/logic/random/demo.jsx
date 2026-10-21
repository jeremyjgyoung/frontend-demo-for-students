"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  const ideas = [
    "Draw a poster",
    "Photograph a texture",
    "Design a club badge",
    "Sketch a reading corner",
  ];
  const [idea, setIdea] = useState("Choose an idea to begin.");
  const [number, setNumber] = useState(null);
  const [order, setOrder] = useState(ideas);
  function chooseIdea() {
    // Keep the previous result out of the choices. Other results can still repeat later.
    const choices = ideas.filter(function excludePrevious(item) {
      return item !== idea;
    });
    setIdea(choices[Math.floor(Math.random() * choices.length)]);
  }
  function rollNumber() {
    setNumber(Math.floor(Math.random() * 6) + 1);
  }
  function shuffleIdeas() {
    // Swap items in a copy. Do not change the state array in place.
    const shuffled = [...ideas];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const other = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[other]] = [shuffled[other], shuffled[index]];
    }
    setOrder(shuffled);
  }
  return (
    <div className="space-y-6 rounded-xl border p-6">
      <div className="flex flex-wrap gap-3">
        <Button onClick={chooseIdea}>Choose an idea</Button>
        <Button variant="outline" onClick={rollNumber}>
          Roll 1–6
        </Button>
        <Button variant="outline" onClick={shuffleIdeas}>
          Shuffle ideas
        </Button>
      </div>
      <p role="status" className="text-xl font-semibold">
        {idea}
      </p>
      <p aria-live="polite">Number: {number ?? "Not rolled yet"}</p>
      <ol className="list-decimal space-y-2 pl-5">
        {order.map(function renderIdea(item) {
          return <li key={item}>{item}</li>;
        })}
      </ol>
    </div>
  );
}

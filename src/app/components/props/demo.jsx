"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ActivityCard } from "./activity-card";
export function LessonDemo() {
  const [selected, setSelected] = useState(null);
  function chooseWalk() {
    setSelected("walk");
  }
  function chooseWorkshop() {
    setSelected("workshop");
  }
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <ActivityCard
          title="Trail walk"
          description="Go outside and follow an easy route."
          selected={selected === "walk"}
          onChoose={chooseWalk}
        />
        <ActivityCard
          title="Poster workshop"
          description="Make a poster with paper and pens."
          selected={selected === "workshop"}
          onChoose={chooseWorkshop}
        />
      </div>
      <p role="status">
        {selected === null
          ? "Choose an activity."
          : "Selected: " +
            (selected === "walk" ? "Trail walk" : "Poster workshop")}
      </p>
      <Button
        variant="outline"
        onClick={function clearChoice() {
          setSelected(null);
        }}
        disabled={selected === null}
      >
        Clear choice
      </Button>
    </div>
  );
}

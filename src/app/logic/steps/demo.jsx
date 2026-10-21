"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export function LessonDemo() {
  const [step, setStep] = useState(1);
  const headingRef = useRef(null);
  const [activity, setActivity] = useState("");
  const [date, setDate] = useState("");
  const canContinue = step === 1 ? activity !== "" : date !== "";
  function focusStep() {
    // Wait for React to render the next heading, then put keyboard focus there.
    requestAnimationFrame(function focusHeading() {
      headingRef.current?.focus({ preventScroll: true });
    });
  }
  function restart() {
    setStep(1);
    setActivity("");
    setDate("");
    focusStep();
  }
  return (
    <div className="space-y-6 rounded-xl border p-6">
      <ol aria-label="Planning steps" className="flex flex-wrap gap-3 text-sm">
        {["Activity", "Date", "Summary"].map(function showStep(name, index) {
          const current = step === index + 1;
          return (
            <li
              key={name}
              aria-current={current ? "step" : undefined}
              className={
                current
                  ? "rounded-full bg-blue-700 px-3 py-1 text-white"
                  : "rounded-full bg-muted px-3 py-1"
              }
            >
              {index + 1}. {name}
            </li>
          );
        })}
      </ol>
      {step === 1 && (
        <section className="space-y-4">
          <h2 ref={headingRef} tabIndex={-1} className="text-2xl font-semibold">
            Choose an activity
          </h2>
          <label className="block space-y-2">
            <span>Activity</span>
            <select
              className="w-full rounded border bg-background p-2"
              value={activity}
              onChange={function chooseActivity(event) {
                setActivity(event.target.value);
              }}
            >
              <option value="">Choose one</option>
              <option>Trail walk</option>
              <option>Poster workshop</option>
            </select>
          </label>
        </section>
      )}
      {step === 2 && (
        <section className="space-y-4">
          <h2 ref={headingRef} tabIndex={-1} className="text-2xl font-semibold">
            Choose a practice date
          </h2>
          <p>Planning: {activity}</p>
          <label className="block space-y-2">
            <span>Date</span>
            <Input
              type="date"
              value={date}
              onChange={function chooseDate(event) {
                setDate(event.target.value);
              }}
            />
          </label>
        </section>
      )}
      {step === 3 && (
        <section className="space-y-4">
          <h2 ref={headingRef} tabIndex={-1} className="text-2xl font-semibold">
            Your practice plan
          </h2>
          <dl>
            <dt className="text-sm text-muted-foreground">Activity</dt>
            <dd className="mb-3 font-semibold">{activity}</dd>
            <dt className="text-sm text-muted-foreground">Date</dt>
            <dd className="font-semibold">{date}</dd>
          </dl>
          <p>This is a local summary. Nothing has been booked.</p>
        </section>
      )}
      <div className="flex flex-wrap gap-3">
        {step > 1 && (
          <Button
            variant="outline"
            onClick={function goBack() {
              setStep(step - 1);
              focusStep();
            }}
          >
            Back
          </Button>
        )}
        {step < 3 ? (
          <Button
            disabled={!canContinue}
            onClick={function goNext() {
              setStep(step + 1);
              focusStep();
            }}
          >
            Continue
          </Button>
        ) : (
          <Button onClick={restart}>Start again</Button>
        )}
      </div>
      <p role="status" className="text-sm text-muted-foreground">
        Step {step} of 3.{" "}
        {step < 3 && !canContinue ? "Choose a value to continue." : ""}
      </p>
    </div>
  );
}

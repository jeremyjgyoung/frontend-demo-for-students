export const lesson = {
  topic: "logic",
  slug: "steps",
  title: "Build a step-by-step interface",
  summary:
    "Keep choices while moving forward and back through a small interface.",
  steps: [
    "Choose an activity and continue.",
    "Choose a date. Go back and check that the activity is still selected.",
    "Read the summary, then start again.",
  ],
  explanations: [
    {
      title: "1. Keep the choices above the steps",
      text: "All three values live in the same parent component. Switching the visible section does not discard them. A separate state value records the current step.",
      code: 'const [step, setStep] = useState(1);\nconst [activity, setActivity] = useState("");\nconst [date, setDate] = useState("");',
    },
    {
      title: "2. Render one section at a time",
      text: "The conditions choose which section appears. This is one interface state, not a new URL for each step. Use actual routes when each step needs its own address.",
      code: "{step === 1 && <section>Choose an activity</section>}\n{step === 2 && <section>Choose a date</section>}\n{step === 3 && <section>Read the summary</section>}",
    },
    {
      title: "3. Explain progress and prevent an empty next step",
      text: 'The page shows the current step and disables Continue until the needed choice exists. aria-current="step" marks the current item in the step list.',
      code: 'const canContinue = step === 1 ? activity !== "" : date !== "";\n<Button disabled={!canContinue}\n  onClick={function goNext() { setStep(step + 1); }}>Continue</Button>',
    },
    {
      title: "4. Reset the whole task",
      text: "Start again clears the choices and returns to the first step. Reset related values together so old choices do not appear in a new task.",
      code: 'function restart() {\n  setStep(1);\n  setActivity("");\n  setDate("");\n}',
    },
    {
      title: "5. Keep keyboard focus with the step",
      text: "After a step changes, move focus to its heading. The ref points to that real element. Wait for the new heading to render. preventScroll keeps the outer lesson from jumping.",
      code: "const headingRef = useRef(null);\n\n<h2 ref={headingRef} tabIndex={-1}>Choose an activity</h2>\n\nrequestAnimationFrame(function focusHeading() {\n  headingRef.current?.focus({ preventScroll: true });\n});",
    },
  ],
};

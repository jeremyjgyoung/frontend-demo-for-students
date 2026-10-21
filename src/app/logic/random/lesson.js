export const lesson = {
  topic: "logic",
  slug: "random",
  title: "Build a random generator",
  summary:
    "Choose an idea, avoid an immediate repeat, generate a number, and shuffle a list.",
  steps: [
    "Choose several ideas. Check that the previous idea does not repeat immediately.",
    "Roll a number.",
    "Shuffle the list and check that all four ideas remain.",
  ],
  explanations: [
    {
      title: "1. Choose after the click",
      text: "Generate random values in an event handler. Rendering random content on the server and client can create different HTML. The initial output here is predictable.",
      code: "const choices = ideas.filter(function excludePrevious(item) {\n  return item !== idea;\n});\nsetIdea(choices[Math.floor(Math.random() * choices.length)]);",
    },
    {
      title: "2. Generate an integer in a range",
      text: "Math.random is at least 0 and less than 1. Multiplying by 6 gives a value below 6. floor removes the fraction; adding 1 gives an integer from 1 to 6. This is for a UI exercise, not secure passwords or identifiers.",
      code: "setNumber(Math.floor(Math.random() * 6) + 1);",
    },
    {
      title: "3. Shuffle by swapping",
      text: "Copy the array, then swap each item with a random earlier item or itself. This is the Fisher\u2013Yates shuffle. Sorting with a random comparator does not give a fair shuffle.",
      code: "for (let index = shuffled.length - 1; index > 0; index -= 1) {\n  const other = Math.floor(Math.random() * (index + 1));\n  [shuffled[index], shuffled[other]] = [shuffled[other], shuffled[index]];\n}",
    },
  ],
};

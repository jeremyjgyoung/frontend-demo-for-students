export const lesson = {
  topic: "components",
  slug: "states",
  title: "Design useful interface states",
  summary: "Tell users what is happening and what they can do next.",
  steps: [
    "Try every state.",
    "Find the next useful action in the empty and error states.",
    "Use Tab to check focus and disabled behavior.",
  ],
  explanations: [
    {
      title: "1. Name the state",
      text: "A small string makes the preview easy to follow. Only the chosen state renders. In a connected app, the request result would set this state.",
      code: 'const [status, setStatus] = useState("empty");',
    },
    {
      title: "2. Explain what to do next",
      text: "An empty result is not always an error. Explain what happened and offer a useful action. Keep typed values when a request fails.",
      code: '{status === "empty" && <Button\n  onClick={function clearFilters() { setStatus("success"); }}>\n  Clear filters\n</Button>}',
    },
    {
      title: "3. Use persistent text as well as appearance",
      text: "Do not rely on color or a temporary toast alone. Give important feedback in the page. A status can announce a non-urgent change; an alert is for an important error.",
      code: '<p role="status">One trip found.</p>\n<p role="alert">Your choices are still here. Try again.</p>',
    },
  ],
};

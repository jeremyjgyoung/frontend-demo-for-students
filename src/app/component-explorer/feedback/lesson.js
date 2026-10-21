export const lesson = {
  topic: "component-explorer",
  slug: "feedback",
  title: "Feedback and loading",
  summary: "Use alerts, progress, loading shapes, and short notifications.",
  steps: [
    "Choose Loading, Ready, and Empty to compare the messages.",
    "In Ready, add progress. Notice the number and bar change together.",
    "Show a notification. It is short; the important result stays on the page.",
  ],
  explanations: [
    {
      title: "1. Match the message to the state",
      text: "A loading shape reserves space. A spinner indicates activity. Empty explains why no content is shown and offers a next step. These buttons simulate states; they do not send a network request.",
      code: '{status === "loading" && <Skeleton className="h-20 w-full" />}',
    },
    {
      title: "2. Keep a visible result",
      text: "An alert remains in the page. A toast is a short notification. Use visible text for important details instead of relying on color or a disappearing message.",
      code: "<Alert>\n  <AlertTitle>Activity list ready</AlertTitle>\n  <AlertDescription>Two sample activities are available.</AlertDescription>\n</Alert>",
    },
    {
      title: "3. Share one progress value",
      text: "Both the progress bar and text read progress. Pass a useful label. The site already mounts the Sonner Toaster once in its provider.",
      code: '<Progress value={progress} aria-label="Practice progress" />\n<p>{progress}% complete</p>\n// Existing shared Toaster displays this:\ntoast.success("Practice progress noted.");',
    },
  ],
};

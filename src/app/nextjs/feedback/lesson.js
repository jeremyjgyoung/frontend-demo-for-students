export const lesson = {
  topic: "nextjs",
  slug: "feedback",
  title: "Design loading and missing pages",
  summary: "Show what is happening. Give the user a useful next step.",
  steps: [
    "Run the loading preview. Notice the disabled action.",
    "Open the real loading page.",
    "Open the missing page, then follow its home link.",
  ],
  explanations: [
    {
      title: "1. Explain the wait",
      text: "Show a short message while an action is busy. Prevent repeat clicks when they would start the same work again.",
      code: '<Button disabled={loading}>\n  {loading ? "Loading\u2026" : "Try loading feedback"}\n</Button>',
    },
    {
      title: "2. Use the Next.js loading file",
      text: "A loading.jsx file supplies feedback while its route is loading. The slow practice page waits briefly on the server so you can see this behavior.",
      code: '// src/app/nextjs/feedback/slow/loading.jsx\nexport default function Loading() {\n  return <p role="status">Loading the practice page\u2026</p>;\n}',
    },
    {
      title: "3. Give a way forward",
      text: "The not-found.jsx file gives unknown routes a useful response. A clear link is more helpful than a dead end.",
      code: '<h1>We could not find that page</h1>\n<Link href="/">Choose a lesson</Link>',
    },
  ],
};

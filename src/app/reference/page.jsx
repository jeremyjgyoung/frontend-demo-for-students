import { LessonCards } from "@/app/_components/directory";
const items = [
  {
    title: "Pages and navigation",
    summary:
      "Small examples for page folders, links, active navigation, titles, and icons.",
    href: "/reference/pages",
  },
  {
    title: "Layout recipes",
    summary: "Keep a few small layout patterns nearby.",
    href: "/reference/layouts",
  },
  {
    title: "Image recipes",
    summary: "Choose a wrapper based on the purpose of the image.",
    href: "/reference/images",
  },
  {
    title: "shadcn Component Reference",
    summary:
      "See every component at a glance, try live previews by category, and open its import and usage code.",
    href: "/reference/components",
  },
  {
    title: "Libraries and pnpm",
    summary: "Install packages deliberately and keep the setup reproducible.",
    href: "/reference/libraries",
  },
  {
    title: "Changing styles",
    summary: "Use state for the choice, then render the matching appearance.",
    href: "/reference/styles",
  },
  {
    title: "Design and brand vocabulary",
    summary: "Describe what you see and explain why it helps.",
    href: "/reference/vocabulary",
  },
  {
    title: "Theme and style guide",
    summary: "Record a small set of shared choices and show them in use.",
    href: "/reference/theme",
  },
  {
    title: "Before publishing",
    summary: "A short check for usefulness, accessibility, and loading.",
    href: "/reference/publishing",
  },
];
export const metadata = { title: "Reference" };
export default function Page() {
  return (
    <main
      id="main-content"
      className="mx-auto max-w-7xl space-y-8 px-5 py-10 sm:px-8"
    >
      <header className="max-w-2xl space-y-3">
        <h1 className="text-4xl font-semibold">Reference</h1>
        <p className="leading-7 text-muted-foreground">
          Small examples to keep nearby while you build. These pages support the
          lessons.
        </p>
      </header>
      <LessonCards items={items} />
    </main>
  );
}

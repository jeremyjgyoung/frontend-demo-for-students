export const lesson = {
  topic: "nextjs",
  slug: "navigation",
  title: "Build responsive navigation",
  summary:
    "Use one responsive header across three real club pages. Keep navigation inside the example app.",
  steps: [
    "Narrow the browser until the Menu button appears.",
    "Open the menu, then choose About. The club page changes and the menu closes.",
    "Use Home, Contact, and browser Back. The lesson frame stays in place.",
  ],
  explanations: [
    {
      title: "1. Share this example’s layout",
      text: "The layout in this lesson folder wraps its home, About, and Contact pages. Its header lives in LessonDemo. Only children changes when you follow a club link.",
      code: "<LessonFrame lesson={lesson} sources={sources}>\n  <LessonDemo>{children}</LessonDemo>\n</LessonFrame>",
    },
    {
      title: "2. Store whether the phone menu is open",
      text: "The boolean open chooses the small-screen menu state. aria-expanded gives assistive technology the same information. The control names the menu through aria-controls.",
      code: 'const [open, setOpen] = useState(false);\nfunction toggleMenu() { setOpen(!open); }\n<Button aria-expanded={open} aria-controls="club-links"\n  onClick={toggleMenu}>Menu</Button>',
    },
    {
      title: "3. Keep the links and change their layout",
      text: "Use one set of links. On a wide screen, md:flex displays them in a row. On a phone, the open state controls whether they are visible.",
      code: 'className={open\n  ? "flex w-full flex-col gap-2 md:w-auto md:flex-row"\n  : "hidden w-full gap-2 md:flex md:w-auto"}',
    },
    {
      title: "4. Close the menu after a choice",
      text: "The link still performs normal navigation. Its click handler also closes the phone menu. scroll={false} keeps the lesson position steady.",
      code: 'function closeMenu() { setOpen(false); }\n<Link href="/nextjs/navigation/about" scroll={false}\n  onClick={closeMenu}>About</Link>',
    },
  ],
};

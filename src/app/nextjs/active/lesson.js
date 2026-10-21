export const lesson = {
  topic: "nextjs",
  slug: "active",
  title: "Style the active navigation link",
  summary:
    "Move between pages in a small club app. Watch the active section, breadcrumb, and URL change together.",
  steps: [
    "Choose Activities in the example app. It becomes the highlighted section.",
    "Open the trail walk. Activities stays highlighted while the breadcrumb shows the detail page.",
    "Choose Saved, then use browser Back. The lesson tabs stay in place.",
  ],
  explanations: [
    {
      title: "1. Read the real path",
      text: "usePathname runs in a Client Component. It returns the URL path without its query string. These links belong to the example app, so you can test them without leaving the lesson.",
      code: "const pathname = usePathname();",
    },
    {
      title: "2. Treat Home as an exact match",
      text: "The home route is also the prefix of every club page. If it used the normal prefix check, Home would always be active. Check it exactly. Other sections can include child pages.",
      code: 'const active = link.href === "/nextjs/active"\n  ? pathname === link.href\n  : pathname === link.href || pathname.startsWith(link.href + "/");',
    },
    {
      title: "3. Show the section and the exact page",
      text: 'The active section gets the stronger class string. aria-current="page" is used only when the link points to the exact page. On the trail detail page, Activities is highlighted and the breadcrumb names Trail walk.',
      code: 'aria-current={pathname === link.href ? "page" : undefined}\nclassName={active\n  ? "rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white"\n  : "rounded-md px-3 py-2 text-sm hover:bg-muted"}',
    },
    {
      title: "4. Keep the shell around its pages",
      text: "The nested layout keeps the lesson frame and app header in place. Real child pages replace only the main content. Their source files are listed in Code.",
      code: "<LessonDemo>{children}</LessonDemo>",
    },
  ],
};

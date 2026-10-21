export const lesson = {
  topic: "component-explorer",
  slug: "navigation",
  title: "Navigation and views",
  summary: "Use links to move between pages and tabs to switch views.",
  steps: [
    "Switch between Schedule and Location. The view changes, but the URL does not.",
    "Focus a tab. Use Left and Right arrow keys to move, then press Enter to choose it.",
    "Open the pages lesson with the link. Compare real navigation with tabs.",
  ],
  explanations: [
    {
      title: "1. Choose a link or a tab",
      text: "Links move to a page with a URL. Tabs switch related panels in the current page. Do not use an action menu as the main site navigation.",
      code: '<Link href="/nextjs/pages">Open the pages lesson</Link>',
    },
    {
      title: "2. Match each tab to a panel",
      text: "A value connects a trigger with its content. defaultValue chooses the first view. Base UI supplies the tab keyboard behavior. With the installed defaults, arrow keys move focus. Enter or Space activates the focused tab.",
      code: '<Tabs defaultValue="schedule">\n  <TabsList><TabsTrigger value="schedule">Schedule</TabsTrigger></TabsList>\n  <TabsContent value="schedule">Meet at 15:30.</TabsContent>\n</Tabs>',
    },
    {
      title: "3. Show location in the site",
      text: "A breadcrumb shows a trail to the current page. Use BreadcrumbPage for the current item. Choose pagination for separate pages of results and a sidebar for a larger set of sections.",
      code: "<BreadcrumbItem>\n  <BreadcrumbPage>Club details</BreadcrumbPage>\n</BreadcrumbItem>",
    },
  ],
};

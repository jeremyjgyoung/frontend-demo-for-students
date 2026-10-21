# Navigation and views

Use links to move between pages and tabs to switch views.

## Try it

1. Switch between Schedule and Location. The view changes, but the URL does not.
2. Focus a tab. Use Left and Right arrow keys to move, then press Enter to choose it.
3. Open the pages lesson with the link. Compare real navigation with tabs.

## How it works

### 1. Choose a link or a tab

Links move to a page with a URL. Tabs switch related panels in the current page. Do not use an action menu as the main site navigation.

```jsx
<Link href="/nextjs/pages">Open the pages lesson</Link>
```

### 2. Match each tab to a panel

A value connects a trigger with its content. defaultValue chooses the first view. Base UI supplies the tab keyboard behavior. With the installed defaults, arrow keys move focus. Enter or Space activates the focused tab.

```jsx
<Tabs defaultValue="schedule">
  <TabsList>
    <TabsTrigger value="schedule">Schedule</TabsTrigger>
  </TabsList>
  <TabsContent value="schedule">Meet at 15:30.</TabsContent>
</Tabs>
```

### 3. Show location in the site

A breadcrumb shows a trail to the current page. Use BreadcrumbPage for the current item. Choose pagination for separate pages of results and a sidebar for a larger set of sections.

```jsx
<BreadcrumbItem>
  <BreadcrumbPage>Club details</BreadcrumbPage>
</BreadcrumbItem>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

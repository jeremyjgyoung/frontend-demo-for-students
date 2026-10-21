# Style the active navigation link

Move between pages in a small club app. Watch the active section, breadcrumb, and URL change together.

## Try it

1. Choose Activities in the example app. It becomes the highlighted section.
2. Open the trail walk. Activities stays highlighted while the breadcrumb shows the detail page.
3. Choose Saved, then use browser Back. The lesson tabs stay in place.

## How it works

### 1. Read the real path

usePathname runs in a Client Component. It returns the URL path without its query string. These links belong to the example app, so you can test them without leaving the lesson.

```jsx
const pathname = usePathname();
```

### 2. Treat Home as an exact match

The home route is also the prefix of every club page. If it used the normal prefix check, Home would always be active. Check it exactly. Other sections can include child pages.

```jsx
const active =
  link.href === "/nextjs/active"
    ? pathname === link.href
    : pathname === link.href || pathname.startsWith(link.href + "/");
```

### 3. Show the section and the exact page

The active section gets the stronger class string. aria-current="page" is used only when the link points to the exact page. On the trail detail page, Activities is highlighted and the breadcrumb names Trail walk.

```jsx
aria-current={pathname === link.href ? "page" : undefined}
className={active
  ? "rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white"
  : "rounded-md px-3 py-2 text-sm hover:bg-muted"}
```

### 4. Keep the shell around its pages

The nested layout keeps the lesson frame and app header in place. Real child pages replace only the main content. Their source files are listed in Code.

```jsx
<LessonDemo>{children}</LessonDemo>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

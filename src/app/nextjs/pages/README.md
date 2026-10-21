# Create pages and link between them

Build a three-page club site inside the lesson. Follow real links while the app header stays in place.

## Try it

1. Open About this club in the example app. Notice that its header and the lesson tabs stay in place.
2. Open Contact the club. Use Home or the browser Back button to return.
3. Open Contact the club in a new tab. It is a real link with its own URL.

## How it works

### 1. Give each page a file

The example has a home page, an About page, and a Contact page. Each page.jsx supplies only that page’s content. The example uses h2 because the surrounding lesson already has its h1.

```jsx
// src/app/nextjs/pages/about/page.jsx
export default function Page() {
  return <h2>Small adventures. Good company.</h2>;
}
```

### 2. Keep the shared frame in a layout

The layout wraps all three routes. LessonDemo contains the club header, navigation, and footer. Next.js places the selected page where children appears. The outer lesson tabs also stay in this layout.

```jsx
// src/app/nextjs/pages/layout.jsx
return (
  <LessonFrame lesson={lesson} sources={sources}>
    <LessonDemo>{children}</LessonDemo>
  </LessonFrame>
);
```

### 3. Follow a real link

Link changes the URL. scroll={false} keeps the surrounding lesson from jumping back to the top. Browser Back and opening the link in a new tab still work. This is navigation, not a state variable pretending to be a page.

```jsx
<Link href="/nextjs/pages/about" scroll={false}>
  About this club
</Link>
```

### 4. Give a link button styles

buttonVariants returns the shared button classes. Apply them to Link itself. The result still has link behavior. Do not nest a button inside a link.

```jsx
<Link
  href="/nextjs/pages/contact"
  scroll={false}
  className={buttonVariants({ variant: "outline", size: "sm" })}
>
  Contact the club
</Link>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

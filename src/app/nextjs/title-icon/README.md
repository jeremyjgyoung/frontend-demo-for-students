# Change the title and favicon

Give the browser tab a useful title and a simple icon.

## Try it

1. Change the title and icon color in the preview.
2. Open Code. Find the real metadata and icon files.
3. Edit a copy of the project and inspect its browser tab.

## How it works

### 1. Set the default title

Export metadata from the root layout. This site adds its name to each page title with a template. The browser title is separate from the h1 inside the page.

```jsx
export const metadata = {
  title: {
    default: "Front End Demos",
    template: "%s | Front End Demos",
  },
  description: "Learn to build clear interfaces.",
};
```

### 2. Give a page its own title

Export metadata from a server page. Keep interactive code in demo.jsx beside the page. Do not put metadata in a file with "use client".

```jsx
export const metadata = { title: "Working with images" };
```

### 3. Replace the icon file

Replace src/app/icon.svg with your SVG. Or remove it and add icon.png. Next.js adds the icon link automatically. A favicon.ico can also live at the root of app. Use a simple shape that works at a small size.

```jsx
// src/app/icon.svg is the icon used by this project.
// src/app/layout.jsx sets the default title.
// A page can set a more specific title.
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

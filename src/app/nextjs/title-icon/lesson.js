export const lesson = {
  topic: "nextjs",
  slug: "title-icon",
  title: "Change the title and favicon",
  summary: "Give the browser tab a useful title and a simple icon.",
  steps: [
    "Change the title and icon color in the preview.",
    "Open Code. Find the real metadata and icon files.",
    "Edit a copy of the project and inspect its browser tab.",
  ],
  explanations: [
    {
      title: "1. Set the default title",
      text: "Export metadata from the root layout. This site adds its name to each page title with a template. The browser title is separate from the h1 inside the page.",
      code: 'export const metadata = {\n  title: {\n    default: "Front End Demos",\n    template: "%s | Front End Demos",\n  },\n  description: "Learn to build clear interfaces.",\n};',
    },
    {
      title: "2. Give a page its own title",
      text: 'Export metadata from a server page. Keep interactive code in demo.jsx beside the page. Do not put metadata in a file with "use client".',
      code: 'export const metadata = { title: "Working with images" };',
    },
    {
      title: "3. Replace the icon file",
      text: "Replace src/app/icon.svg with your SVG. Or remove it and add icon.png. Next.js adds the icon link automatically. A favicon.ico can also live at the root of app. Use a simple shape that works at a small size.",
      code: "// src/app/icon.svg is the icon used by this project.\n// src/app/layout.jsx sets the default title.\n// A page can set a more specific title.",
    },
  ],
};

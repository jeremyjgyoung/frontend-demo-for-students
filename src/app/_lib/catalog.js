// Navigation metadata only. Each lesson owns its example code.
export const topics = [
  {
    id: "basics",
    nav: "Basics",
    title: "Basics",
    summary:
      "Find the files you need. Learn the Next.js rules before adding features.",
    href: "/basics",
    items: [
      {
        title: "Find the file you need",
        summary:
          "Learn a few important paths. You do not need to understand every file before starting.",
        href: "/basics/files",
      },
      {
        title: "Why pages use default exports",
        summary:
          "See how Next.js finds a page and how a default import differs from a named import.",
        href: "/basics/page-exports",
      },
      {
        title: 'When to use "use client"',
        summary:
          "Keep the page on the server. Add browser interaction in a small Client Component.",
        href: "/basics/use-client",
      },
      {
        title: "Fix one error at a time",
        summary:
          "Use the error message to find one cause. Make a small fix, then check again.",
        href: "/basics/troubleshooting",
      },
    ],
  },
  {
    id: "nextjs",
    nav: "Pages & Navigation",
    title: "Pages and navigation",
    summary:
      "Build pages, links, and navigation that help people find their way.",
    href: "/nextjs",
    items: [
      {
        title: "Create pages and link between them",
        summary:
          "Build a three-page club site inside the lesson. Follow real links while the app header stays in place.",
        href: "/nextjs/pages",
      },
      {
        title: "Understand file paths and @",
        summary:
          "Read ./, ../, and @/ imports, then compare them with page URLs and public image paths.",
        href: "/nextjs/file-paths",
      },
      {
        title: "Build responsive navigation",
        summary:
          "Use one responsive header across three real club pages. Keep navigation inside the example app.",
        href: "/nextjs/navigation",
      },
      {
        title: "Style the active navigation link",
        summary:
          "Move between pages in a small club app. Watch the active section, breadcrumb, and URL change together.",
        href: "/nextjs/active",
      },
      {
        title: "Change the title and favicon",
        summary: "Give the browser tab a useful title and a simple icon.",
        href: "/nextjs/title-icon",
      },
      {
        title: "Design loading and missing pages",
        summary: "Show what is happening. Give the user a useful next step.",
        href: "/nextjs/feedback",
      },
    ],
  },
  {
    id: "layouts",
    nav: "Layouts & Responsive",
    title: "Layouts and responsive design",
    summary: "Arrange content and adapt it to the available space.",
    href: "/layouts",
    items: [
      {
        title: "Page width and spacing",
        summary:
          "Use a maximum width and a small spacing scale to make a page easier to read.",
        href: "/layouts/spacing",
      },
      {
        title: "Rows and grids",
        summary:
          "Compare a wrapping row with a grid that changes its column count.",
        href: "/layouts/rows-grids",
      },
      {
        title: "Common page layouts",
        summary:
          "Choose a layout for a landing page, dashboard, guide, or app.",
        href: "/layouts/patterns",
      },
      {
        title: "Build a landing page",
        summary: "Combine a split hero, a feature grid, and a clear next step.",
        href: "/layouts/landing",
      },
      {
        title: "Build a sidebar and dashboard",
        summary:
          "Arrange navigation, summary cards, and a work list in one screen.",
        href: "/layouts/dashboard",
      },
      {
        title: "Build an article with a sidebar",
        summary:
          "Keep long text readable and place supporting links beside it.",
        href: "/layouts/articles",
      },
      {
        title: "Build a full-height app screen",
        summary:
          "Keep a header and footer around a flexible list-and-detail area.",
        href: "/layouts/app-shell",
      },
      {
        title: "Make a layout work on phones",
        summary:
          "Let controls wrap and keep wide content inside its own scroll area.",
        href: "/layouts/phones",
      },
    ],
  },
  {
    id: "images",
    nav: "Images & Icons",
    title: "Images and Lucide icons",
    summary: "Size images, create useful wrappers, and add clear icons.",
    href: "/images",
    items: [
      {
        title: "Host images on the LMS",
        summary:
          "Find the cloud icon in the bottom-right corner of the LMS, upload an image, and use its URL with Next.js Image.",
        href: "/images/hosting",
      },
      {
        title: "Image sizing and cropping",
        summary:
          "Compare an image that keeps its proportions with images fitted inside a fixed box.",
        href: "/images/sizing",
      },
      {
        title: "Common image patterns",
        summary:
          "Use avatars, cards, and captions. Compare full-width, centered, and responsive image containers.",
        href: "/images/patterns",
      },
      {
        title: "Text over images",
        summary: "Use an overlay so words stay readable over a busy image.",
        href: "/images/overlays",
      },
      {
        title: "Lucide icons and icon buttons",
        summary: "Import an icon, change its appearance, and label the action.",
        href: "/images/icons",
      },
    ],
  },
  {
    id: "components",
    nav: "Component Basics",
    title: "shadcn/ui and Base UI",
    summary: "Choose and customize components for a task.",
    href: "/components",
    items: [
      {
        title: "Import and use a component",
        summary:
          "Use the components already in the template. Import a component, add it to JSX, and change its props.",
        href: "/components/customize",
      },
      {
        title: "Choose the right component",
        summary: "Match the control to the task, then compare its appearance.",
        href: "/components/choices",
      },
      {
        title: "Dialogs, menus, and tabs",
        summary:
          "Use a dialog for a focused task, a menu for actions, and tabs for related views.",
        href: "/components/patterns",
      },
      {
        title: "Design useful interface states",
        summary: "Tell users what is happening and what they can do next.",
        href: "/components/states",
      },
      {
        title: "Build a component from parts",
        summary:
          "Read the parts of a shadcn card and see how they fit together.",
        href: "/components/composition",
      },
      {
        title: "Pass props and handle events",
        summary:
          "Reuse one small card. Keep the shared selection in its parent.",
        href: "/components/props",
      },
      {
        title: "Control a component’s state",
        summary:
          "Open a Base UI dialog from state. Apply a draft choice or cancel it.",
        href: "/components/controlled",
      },
    ],
  },
  {
    id: "component-explorer",
    nav: "Component Explorer",
    title: "Explore shadcn components",
    summary:
      "Try components by their job. Start with common building blocks; explore inputs last.",
    href: "/component-explorer",
    items: [
      {
        title: "Everyday essentials",
        summary: "Start with buttons, cards, badges, and small content groups.",
        href: "/component-explorer/essentials",
      },
      {
        title: "Navigation and views",
        summary: "Use links to move between pages and tabs to switch views.",
        href: "/component-explorer/navigation",
      },
      {
        title: "Dialogs, panels, and menus",
        summary:
          "Compare a focused dialog, a side panel, a popover, and an action menu.",
        href: "/component-explorer/overlays",
      },
      {
        title: "Feedback and loading",
        summary:
          "Use alerts, progress, loading shapes, and short notifications.",
        href: "/component-explorer/feedback",
      },
      {
        title: "Content, layout, and media",
        summary:
          "Reveal extra details and keep content inside useful containers.",
        href: "/component-explorer/content",
      },
      {
        title: "Tables and charts",
        summary: "Show the same local data as rows and as a chart.",
        href: "/component-explorer/data",
      },
      {
        title: "Inputs and choices",
        summary:
          "Choose a control based on the kind of value a person needs to enter.",
        href: "/component-explorer/inputs",
      },
    ],
  },
  {
    id: "libraries",
    nav: "Libraries",
    title: "Libraries and packages",
    summary: "Find a library, compare options, and build a real map.",
    href: "/libraries",
    items: [
      {
        title: "Find and install a library",
        summary:
          "Choose a package for a real need, then understand what pnpm adds.",
        href: "/libraries/packages",
      },
      {
        title: "Compare libraries for a task",
        summary:
          "Use a small map project to compare libraries, React wrappers, and tile services.",
        href: "/libraries/compare",
      },
      {
        title: "Render your first map",
        summary:
          "Use a real map with local sample places. Learn one small step at a time.",
        href: "/libraries/first-map",
      },
      {
        title: "Show places and popups",
        summary:
          "Use a real map with local sample places. Learn one small step at a time.",
        href: "/libraries/places",
      },
      {
        title: "Connect a list to the map",
        summary:
          "Use a real map with local sample places. Learn one small step at a time.",
        href: "/libraries/connected-map",
      },
      {
        title: "Render a map with Leaflet",
        summary:
          "Use React Leaflet to show a real map, three markers, and popups in Next.js.",
        href: "/libraries/leaflet",
      },
      {
        title: "Fix common library problems",
        summary: "Check one cause at a time before changing the whole example.",
        href: "/libraries/troubleshooting",
      },
    ],
  },
  {
    id: "design",
    nav: "Visual Design",
    title: "Visual design",
    summary: "Use hierarchy, spacing, type, and color to make content clear.",
    href: "/design",
    items: [
      {
        title: "Hierarchy and grouping",
        summary:
          "Use emphasis and spacing to show what matters and what belongs together.",
        href: "/design/hierarchy",
      },
      {
        title: "Typography and spacing",
        summary:
          "Adjust line length, line height, and space between related items.",
        href: "/design/type-spacing",
      },
      {
        title: "Color, surfaces, and depth",
        summary:
          "Compare ways to separate content without decorating every edge.",
        href: "/design/surfaces",
      },
      {
        title: "Improve a crowded interface",
        summary: "Improve a card by changing one design decision at a time.",
        href: "/design/improve",
      },
    ],
  },
  {
    id: "brand",
    nav: "Brand & Themes",
    title: "Brand, themes, and style guides",
    summary: "Turn a visual direction into a consistent set of choices.",
    href: "/brand",
    items: [
      {
        title: "Explore brand styles and copy",
        summary:
          "Compare calm, playful, and editorial designs. Change the visual style and the words together.",
        href: "/brand/styles",
      },
      {
        title: "Know where styles belong",
        summary:
          "Choose whether a style should affect one element, a shared component, or the whole app.",
        href: "/brand/style-scope",
      },
      {
        title: "Apply your color palette",
        summary:
          "Give colors jobs, then apply them to a small app with Tailwind and shadcn.",
        href: "/brand/theme",
      },
      {
        title: "Set fonts and text styles",
        summary:
          "Choose a heading font, a body font, and a small set of readable text styles.",
        href: "/brand/typography",
      },
      {
        title: "Apply spacing and shape",
        summary:
          "Turn your style guide into Tailwind spacing, widths, corners, borders, and shadows.",
        href: "/brand/spacing-shape",
      },
      {
        title: "Customize shadcn components consistently",
        summary:
          "Choose between a local class, an existing variant, and a shared component change.",
        href: "/brand/customize-components",
      },
      {
        title: "Apply a style across your app",
        summary:
          "Use a short checklist to turn a style guide into a consistent page.",
        href: "/brand/app-makeover",
      },
      {
        title: "Create a small style guide",
        summary: "Document the choices people should repeat across a site.",
        href: "/brand/style-guide",
      },
    ],
  },
  {
    id: "logic",
    nav: "Interface Logic",
    title: "Interface logic",
    summary: "Connect controls to visible changes on the page.",
    href: "/logic",
    items: [
      {
        title: "Build a random generator",
        summary:
          "Choose an idea, avoid an immediate repeat, generate a number, and shuffle a list.",
        href: "/logic/random",
      },
      {
        title: "Filter and sort visible content",
        summary:
          "Filter an array already in the browser. Give immediate, useful feedback.",
        href: "/logic/filter",
      },
      {
        title: "Design selection behavior",
        summary:
          "Make selected items clear and give users a way to clear them.",
        href: "/logic/selection",
      },
      {
        title: "Change styles with state",
        summary:
          "Connect buttons and sliders to visible class and style changes.",
        href: "/logic/styles",
      },
      {
        title: "Derive what the interface shows",
        summary: "Calculate totals and messages from a small amount of state.",
        href: "/logic/derived",
      },
      {
        title: "Build a step-by-step interface",
        summary:
          "Keep choices while moving forward and back through a small interface.",
        href: "/logic/steps",
      },
      {
        title: "Update a local checklist",
        summary:
          "Change one object in an array and derive the completed count.",
        href: "/logic/checklist",
      },
    ],
  },
  {
    id: "complex",
    nav: "Complex UIs",
    title: "Complex interfaces",
    summary: "Build a calendar in small, understandable steps.",
    href: "/complex",
    items: [
      {
        title: "Plan a calendar",
        summary:
          "Start with a small scope, a sketch, and a simple event object.",
        href: "/complex/plan",
      },
      {
        title: "Build the month view",
        summary: "Build one calendar step with local data and direct code.",
        href: "/complex/month",
      },
      {
        title: "Add navigation and event details",
        summary: "Build one calendar step with local data and direct code.",
        href: "/complex/events",
      },
      {
        title: "Adapt and test the calendar",
        summary: "Build one calendar step with local data and direct code.",
        href: "/complex/responsive",
      },
    ],
  },
  {
    id: "accessibility",
    nav: "Accessibility",
    title: "Accessibility",
    summary: "Design content and controls for different ways of using the web.",
    href: "/accessibility",
    items: [
      {
        title: "Make content work with screen readers",
        summary:
          "Use alt text, headings, and clear control names to make the same information available in different ways.",
        href: "/accessibility/screen-readers",
      },
      {
        title: "Use the page without a mouse",
        summary:
          "Use real controls, visible focus, and predictable dialog behavior.",
        href: "/accessibility/keyboard",
      },
      {
        title: "Make content easier to read and use",
        summary: "Compare contrast, enlarge text, and respect reduced motion.",
        href: "/accessibility/reading",
      },
    ],
  },
  {
    id: "performance",
    nav: "Performance",
    title: "Performance",
    summary: "Make pages load well, then measure useful improvements.",
    href: "/performance",
    items: [
      {
        title: "Make images load well",
        summary:
          "Compare real image files, choose a suitable format and size, and reserve image space.",
        href: "/performance/images",
      },
      {
        title: "Load optional features when needed",
        summary:
          "Open an optional chart and inspect when its JavaScript is requested.",
        href: "/performance/lazy-loading",
      },
      {
        title: "Measure, change, and check again",
        summary:
          "Time one real request, then use browser tools to check the complete page.",
        href: "/performance/measure",
      },
    ],
  },
];

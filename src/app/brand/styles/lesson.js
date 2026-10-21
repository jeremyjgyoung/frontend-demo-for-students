export const lesson = {
  topic: "brand",
  slug: "styles",
  title: "Explore brand styles and copy",
  summary:
    "Compare calm, playful, and editorial designs. Change the visual style and the words together.",
  steps: [
    "Choose each direction. Compare its headline, paragraph, and action label.",
    "Notice the changes in color, heading font, weight, corners, borders, and button shape.",
    "Read Why this feels different. Match the brand words to the actual copy and design.",
    "Use the action link. Each version opens the same activity demo.",
  ],
  explanations: [
    {
      title: "1. Start with the audience and purpose",
      text: "The club wants beginners to find a suitable walk. Choose a few brand words that support that task. Then connect each word to something people can see or read. These three directions are examples, not rules that every brand must follow.",
      code: "// Audience: people trying their first club walk.\n// Task: find an easy walk.\n// Calm → pale blue, soft corners, reassuring copy.\n// Playful → bright yellow, heavy heading, black borders, lively copy.\n// Editorial → serif heading, simple rules, reflective copy.",
    },
    {
      title: "2. Change the copy as well as the colors",
      text: "Copy means the words people read in the interface. A calm voice can reassure a beginner. A playful voice can invite them to join in. An editorial voice can describe the experience more thoughtfully. Change the heading, description, and action label together. Keep facts accurate and the action understandable.",
      code: '// Calm:\nheading: "A little fresh air. A good place to start.",\naction: "Find an easy walk",\n\n// Playful:\nheading: "Your weekend called. It wants an adventure.",\naction: "Pick your next adventure",\n\n// Editorial:\nheading: "Make room for a different kind of Saturday.",\naction: "Browse the weekend walks",',
    },
    {
      title: "3. Keep each direction easy to read in code",
      text: "The directions object stores the words and complete Tailwind class names together. selected stores the chosen key. Reading directions[selected] gives us one direction. The example code stays in demo.jsx so you can trace the state, data, and output in one file.",
      code: 'const [selected, setSelected] = useState("calm");\nconst directions = {\n  calm: {\n    heading: "A little fresh air. A good place to start.",\n    panel: "rounded-2xl border border-sky-200 bg-sky-50 text-sky-950",\n  },\n  // playful and editorial have their own words and classes.\n};\nconst brand = directions[selected];\n\n<article className={brand.panel}>\n  <h3>{brand.heading}</h3>\n</article>',
    },
    {
      title: "4. Use complete classes and local styles",
      text: "Tailwind needs complete class names such as bg-sky-50 in the source. Do not build a partial class from a color name. These colors, fonts, and shapes apply to the sample, so changing direction does not restyle the lesson navigation. The system fonts need no download. For a whole app, move repeated choices into your theme or shared components.",
      code: '// Complete class names in the direction data:\nheadingClass: "font-serif font-medium tracking-normal",\npanel: "rounded-none border-y-2 border-stone-800 bg-stone-50 text-stone-950",\n\n<h3 className={brand.headingClass + " text-3xl sm:text-5xl"}>\n  {brand.heading}\n</h3>',
    },
    {
      title: "5. Keep controls clear while the style changes",
      text: "The direction choices are buttons because they change this preview. aria-pressed tells assistive technology which choice is selected. The action is a Next.js Link because it opens another page. buttonVariants gives that link the shared shadcn button styles; local Tailwind classes apply the chosen brand. Keep readable text, visible keyboard focus, and enough room for longer labels in every direction.",
      code: '<button type="button" aria-pressed={selected === id}\n  onClick={function chooseDirection() { setSelected(id); }}>\n  {direction.name}\n</button>\n\n<Link href="/logic/filter"\n  className={buttonVariants({\n    className: brand.actionClass + " h-auto min-h-11 max-w-full px-5 py-3 text-center whitespace-normal",\n  })}>\n  {brand.action}\n</Link>',
    },
    {
      title: "6. Give the playful style a neo-brutalist feel",
      text: "This version uses bright yellow, heavy uppercase headings, square corners, and thick black borders. A hard shadow has no blur, so it looks like a solid shape behind the panel. The violet action has its own small shadow. On hover, it moves one pixel toward that shadow. These classes stay in the playful direction; the other directions keep their own style.",
      code: '// Playful panel: 7px right, 7px down, no blur.\npanel: "rounded-none border-4 border-black bg-yellow-300 text-black shadow-[7px_7px_0_0_#000]",\n\n// Playful heading:\nheadingClass: "font-sans font-black tracking-tight uppercase",\n\n// The action uses square corners, a black border,\n// a violet background, and its own 4px hard shadow.',
    },
  ],
};

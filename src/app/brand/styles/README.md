# Explore brand styles and copy

Compare calm, playful, and editorial designs. Change the visual style and the words together.

## Try it

1. Choose each direction. Compare its headline, paragraph, and action label.
2. Notice the changes in color, heading font, weight, corners, borders, and button shape.
3. Read Why this feels different. Match the brand words to the actual copy and design.
4. Use the action link. Each version opens the same activity demo.

## How it works

### 1. Start with the audience and purpose

The club wants beginners to find a suitable walk. Choose a few brand words that support that task. Then connect each word to something people can see or read. These three directions are examples, not rules that every brand must follow.

```jsx
// Audience: people trying their first club walk.
// Task: find an easy walk.
// Calm → pale blue, soft corners, reassuring copy.
// Playful → bright yellow, heavy heading, black borders, lively copy.
// Editorial → serif heading, simple rules, reflective copy.
```

### 2. Change the copy as well as the colors

Copy means the words people read in the interface. A calm voice can reassure a beginner. A playful voice can invite them to join in. An editorial voice can describe the experience more thoughtfully. Change the heading, description, and action label together. Keep facts accurate and the action understandable.

```jsx
// Calm:
heading: "A little fresh air. A good place to start.",
action: "Find an easy walk",

// Playful:
heading: "Your weekend called. It wants an adventure.",
action: "Pick your next adventure",

// Editorial:
heading: "Make room for a different kind of Saturday.",
action: "Browse the weekend walks",
```

### 3. Keep each direction easy to read in code

The directions object stores the words and complete Tailwind class names together. selected stores the chosen key. Reading directions[selected] gives us one direction. The example code stays in demo.jsx so you can trace the state, data, and output in one file.

```jsx
const [selected, setSelected] = useState("calm");
const directions = {
  calm: {
    heading: "A little fresh air. A good place to start.",
    panel: "rounded-2xl border border-sky-200 bg-sky-50 text-sky-950",
  },
  // playful and editorial have their own words and classes.
};
const brand = directions[selected];

<article className={brand.panel}>
  <h3>{brand.heading}</h3>
</article>;
```

### 4. Use complete classes and local styles

Tailwind needs complete class names such as bg-sky-50 in the source. Do not build a partial class from a color name. These colors, fonts, and shapes apply to the sample, so changing direction does not restyle the lesson navigation. The system fonts need no download. For a whole app, move repeated choices into your theme or shared components.

```jsx
// Complete class names in the direction data:
headingClass: "font-serif font-medium tracking-normal",
panel: "rounded-none border-y-2 border-stone-800 bg-stone-50 text-stone-950",

<h3 className={brand.headingClass + " text-3xl sm:text-5xl"}>
  {brand.heading}
</h3>
```

### 5. Keep controls clear while the style changes

The direction choices are buttons because they change this preview. aria-pressed tells assistive technology which choice is selected. The action is a Next.js Link because it opens another page. buttonVariants gives that link the shared shadcn button styles; local Tailwind classes apply the chosen brand. Keep readable text, visible keyboard focus, and enough room for longer labels in every direction.

```jsx
<button type="button" aria-pressed={selected === id}
  onClick={function chooseDirection() { setSelected(id); }}>
  {direction.name}
</button>

<Link href="/logic/filter"
  className={buttonVariants({
    className: brand.actionClass + " h-auto min-h-11 max-w-full px-5 py-3 text-center whitespace-normal",
  })}>
  {brand.action}
</Link>
```

### 6. Give the playful style a neo-brutalist feel

This version uses bright yellow, heavy uppercase headings, square corners, and thick black borders. A hard shadow has no blur, so it looks like a solid shape behind the panel. The violet action has its own small shadow. On hover, it moves one pixel toward that shadow. These classes stay in the playful direction; the other directions keep their own style.

```jsx
// Playful panel: 7px right, 7px down, no blur.
panel: "rounded-none border-4 border-black bg-yellow-300 text-black shadow-[7px_7px_0_0_#000]",

// Playful heading:
headingClass: "font-sans font-black tracking-tight uppercase",

// The action uses square corners, a black border,
// a violet background, and its own 4px hard shadow.
```

## Try a change

Choose a club or event. Write three brand words, then change its heading, description, action label, and a few Tailwind classes. Keep the event facts the same. Check the result on a phone.

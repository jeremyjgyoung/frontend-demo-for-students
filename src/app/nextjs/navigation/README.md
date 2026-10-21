# Build responsive navigation

Use one responsive header across three real club pages. Keep navigation inside the example app.

## Try it

1. Narrow the browser until the Menu button appears.
2. Open the menu, then choose About. The club page changes and the menu closes.
3. Use Home, Contact, and browser Back. The lesson frame stays in place.

## How it works

### 1. Share this example’s layout

The layout in this lesson folder wraps its home, About, and Contact pages. Its header lives in LessonDemo. Only children changes when you follow a club link.

```jsx
<LessonFrame lesson={lesson} sources={sources}>
  <LessonDemo>{children}</LessonDemo>
</LessonFrame>
```

### 2. Store whether the phone menu is open

The boolean open chooses the small-screen menu state. aria-expanded gives assistive technology the same information. The control names the menu through aria-controls.

```jsx
const [open, setOpen] = useState(false);
function toggleMenu() {
  setOpen(!open);
}
<Button aria-expanded={open} aria-controls="club-links" onClick={toggleMenu}>
  Menu
</Button>;
```

### 3. Keep the links and change their layout

Use one set of links. On a wide screen, md:flex displays them in a row. On a phone, the open state controls whether they are visible.

```jsx
className={open
  ? "flex w-full flex-col gap-2 md:w-auto md:flex-row"
  : "hidden w-full gap-2 md:flex md:w-auto"}
```

### 4. Close the menu after a choice

The link still performs normal navigation. Its click handler also closes the phone menu. scroll={false} keeps the lesson position steady.

```jsx
function closeMenu() {
  setOpen(false);
}
<Link href="/nextjs/navigation/about" scroll={false} onClick={closeMenu}>
  About
</Link>;
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

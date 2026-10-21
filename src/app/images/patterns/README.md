# Common image patterns

Use avatars, cards, and captions. Compare full-width, centered, and responsive image containers.

## Try it

1. Compare the avatar crop with the card crop.
2. Find the caption in the HTML shown in Code.
3. Compare the three container widths. Resize above and below 768px. Notice how the half-width example changes.

## How it works

### 1. Make an avatar

Give the image equal display dimensions. rounded-full makes a circle. object-cover fills it. Here the nearby name supplies the identity, so the avatar uses empty alternative text.

```jsx
<Image
  src="/landscape.svg"
  alt=""
  width={64}
  height={64}
  className="size-16 rounded-full object-cover"
/>
```

### 2. Keep the caption with the image

figure groups the image and caption. The caption adds context. Alternative text describes information that is needed when the image cannot be seen.

```jsx
<figure>
  <Image
    src="/landscape.svg"
    alt="Mountains and a sun"
    width={960}
    height={540}
  />
  <figcaption>A local illustration.</figcaption>
</figure>
```

### 3. Let the container set the width

w-full makes the image as wide as its parent, not always as wide as the screen. h-auto keeps its proportions. The Next.js width and height props describe the image ratio; CSS sets its displayed size. These examples repeat the same illustration to compare layout, so their empty alt text avoids repeating a description.

```jsx
<figure className="w-full">
  <Image
    src="/landscape.svg"
    alt=""
    width={960}
    height={540}
    className="h-auto w-full"
  />
</figure>
```

### 4. Limit or change the container width

max-w-lg caps the container at 32rem in this theme. w-full lets it shrink on a phone. mx-auto centers it. In the second example, md:w-1/2 changes the container to half its parent when the viewport is at least 768px wide. The image still uses w-full to fill that container. The md breakpoint uses the screen width, not the container width.

```jsx
<figure className="mx-auto w-full max-w-lg">
  <Image src="/landscape.svg" alt=""
    width={960} height={540} className="h-auto w-full" />
</figure>

<figure className="w-full md:w-1/2">
  <Image src="/landscape.svg" alt=""
    width={960} height={540} className="h-auto w-full" />
</figure>
```

### 5. Put a full-page hero outside the narrow wrapper

For an edge-to-edge image on your own page, put it outside the centered max-w wrapper. Its outer layout must also allow full width, with no limiting width or side padding. Put the text in its own narrower wrapper below it. w-screen means the viewport width (100vw); it can overflow a narrow parent. Prefer a clear page structure with w-full. The lesson preview stays inside its sidebar layout.

```jsx
// Structure for your own page, inside a full-width layout:
<main>
  <Image
    src="/landscape.svg"
    alt="Mountains and a yellow sun"
    width={960}
    height={540}
    className="h-auto w-full"
  />

  <section className="mx-auto max-w-3xl px-5 py-8">
    <h1>Explore the outdoors</h1>
    <p>The image spans the page. This text stays narrower.</p>
  </section>
</main>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

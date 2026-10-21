# Image sizing and cropping

Compare an image that keeps its proportions with images fitted inside a fixed box.

## Try it

1. Compare cover and contain.
2. Resize the screen. Notice which parts of the image remain visible.

## How it works

### 1. Give fill a container

fill makes the image use its parent box. relative creates its positioning context. aspect-square supplies a height through the aspect ratio.

```jsx
<div className="relative aspect-square overflow-hidden">
  <Image
    src="/landscape.svg"
    alt="Mountains"
    fill
    sizes="(max-width: 640px) 100vw, 40vw"
    className="object-cover"
  />
</div>
```

### 2. Choose the fit

cover fills the box and may crop the image. contain shows the whole image and may leave spare space. Use complete class names in the condition.

```jsx
className={fit === "cover" ? "object-cover" : "object-contain"}
```

### 3. Keep natural proportions

Width and height describe the source ratio. w-full and h-auto resize the image without stretching it. The sizes prop describes the display width when a fill image is responsive.

```jsx
<Image
  src="/landscape.svg"
  alt="Mountains"
  width={960}
  height={540}
  className="h-auto w-full"
/>
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

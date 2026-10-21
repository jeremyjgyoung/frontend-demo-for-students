# Image recipes

Choose a wrapper based on the purpose of the image.

## Get an image URL from the LMS

Find the cloud icon in the bottom-right corner of the LMS. Click it and upload your image. Copy the URL you get and use it as src in the Next.js Image component. Keep unoptimized on Image so it loads the original file directly.

## Natural proportions

Use the source dimensions to establish a ratio. A local SVG is used in these lessons so the demos do not depend on a photo service.

```jsx
<Image
  src="/landscape.svg"
  alt="Mountains and a sun"
  width={960}
  height={540}
  className="h-auto w-full"
/>
```

## Cropped card image

A fill image needs a positioned container with height. sizes describes the expected display width.

```jsx
<div className="relative aspect-video overflow-hidden rounded-xl">
  <Image
    src="/landscape.svg"
    alt="Mountains"
    fill
    sizes="(max-width: 640px) 100vw, 40vw"
    className="object-cover"
  />
</div>
```

## Avatar

Use empty alternative text only when nearby text already gives the identity and the image adds no needed information.

```jsx
<Image
  src="/landscape.svg"
  alt=""
  width={64}
  height={64}
  className="size-16 rounded-full object-cover"
/>
```

## Caption

A caption gives visible context. It is not a reason to omit necessary alternative text.

```jsx
<figure>
  <Image
    src="/landscape.svg"
    alt="Mountains and a sun"
    width={960}
    height={540}
  />
  <figcaption>A local mountain illustration.</figcaption>
</figure>
```

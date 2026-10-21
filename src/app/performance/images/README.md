# Make images load well

Compare real image files, choose a suitable format and size, and reserve image space.

## Try it

1. Choose PNG, WebP, and SVG. Compare the source file sizes for the same illustration.
2. Open the browser Network panel and reload. Inspect the actual image requests.
3. Read width, height, and sizes in Code. Notice that switching the image keeps its space.

## How it works

### 1. Compare bytes as well as appearance

A file’s byte size affects how much data must be transferred. These raster files are exports of the same local illustration. The PNG is 2400 by 1350 pixels; the smaller WebP is 960 by 540. SVG is smaller still for this simple vector artwork. Photos often suit raster formats such as WebP.

```jsx
// Files in public are available from the site root.
/performance/trail-2400.png
/performance/trail-960.webp
/landscape.svg
```

### 2. Use an appropriate source

Making an image small with CSS does not make its original file smaller. Export a suitable size and format. Next.js Image can provide resized versions of raster images. The PNG baseline deliberately bypasses optimization for this comparison.

```jsx
<Image
  src="/performance/trail-960.webp"
  alt="Illustrated mountains, grass, and a sun"
  width={960}
  height={540}
  sizes="(max-width: 768px) 100vw, 768px"
  className="h-auto w-full"
/>
```

### 3. Reserve space before loading

width and height describe the image’s proportions. h-auto and w-full let it resize while keeping those proportions. Reserving space helps prevent content below from jumping as an image loads. Do not stretch an image into a different shape.

```jsx
width={960}
height={540}
className="h-auto w-full"
```

### 4. Measure the delivered file

The table shows real source sizes from the server’s files. A Next.js image request may deliver a different size or format. Inspect its actual response in Network. Lazy loading can defer off-screen images; it does not shrink their files.

```jsx
// Server page reads source bytes for the comparison:
const info = await stat(
  path.join(process.cwd(), "public/performance/trail-960.webp"),
);
const bytes = info.size;
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.

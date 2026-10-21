export const lesson = {
  topic: "performance",
  slug: "images",
  title: "Make images load well",
  summary:
    "Compare real image files, choose a suitable format and size, and reserve image space.",
  steps: [
    "Choose PNG, WebP, and SVG. Compare the source file sizes for the same illustration.",
    "Open the browser Network panel and reload. Inspect the actual image requests.",
    "Read width, height, and sizes in Code. Notice that switching the image keeps its space.",
  ],
  explanations: [
    {
      title: "1. Compare bytes as well as appearance",
      text: "A file\u2019s byte size affects how much data must be transferred. These raster files are exports of the same local illustration. The PNG is 2400 by 1350 pixels; the smaller WebP is 960 by 540. SVG is smaller still for this simple vector artwork. Photos often suit raster formats such as WebP.",
      code: "// Files in public are available from the site root.\n/performance/trail-2400.png\n/performance/trail-960.webp\n/landscape.svg",
    },
    {
      title: "2. Use an appropriate source",
      text: "Making an image small with CSS does not make its original file smaller. Export a suitable size and format. Next.js Image can provide resized versions of raster images. The PNG baseline deliberately bypasses optimization for this comparison.",
      code: '<Image src="/performance/trail-960.webp"\n  alt="Illustrated mountains, grass, and a sun"\n  width={960} height={540}\n  sizes="(max-width: 768px) 100vw, 768px"\n  className="h-auto w-full" />',
    },
    {
      title: "3. Reserve space before loading",
      text: "width and height describe the image\u2019s proportions. h-auto and w-full let it resize while keeping those proportions. Reserving space helps prevent content below from jumping as an image loads. Do not stretch an image into a different shape.",
      code: 'width={960}\nheight={540}\nclassName="h-auto w-full"',
    },
    {
      title: "4. Measure the delivered file",
      text: "The table shows real source sizes from the server\u2019s files. A Next.js image request may deliver a different size or format. Inspect its actual response in Network. Lazy loading can defer off-screen images; it does not shrink their files.",
      code: '// Server page reads source bytes for the comparison:\nconst info = await stat(path.join(process.cwd(), "public/performance/trail-960.webp"));\nconst bytes = info.size;',
    },
  ],
};

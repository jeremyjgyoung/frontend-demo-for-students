export const lesson = {
  topic: "images",
  slug: "sizing",
  title: "Image sizing and cropping",
  summary:
    "Compare an image that keeps its proportions with images fitted inside a fixed box.",
  steps: [
    "Compare cover and contain.",
    "Resize the screen. Notice which parts of the image remain visible.",
  ],
  explanations: [
    {
      title: "1. Give fill a container",
      text: "fill makes the image use its parent box. relative creates its positioning context. aspect-square supplies a height through the aspect ratio.",
      code: '<div className="relative aspect-square overflow-hidden">\n  <Image src="/landscape.svg" alt="Mountains" fill\n    sizes="(max-width: 640px) 100vw, 40vw"\n    className="object-cover" />\n</div>',
    },
    {
      title: "2. Choose the fit",
      text: "cover fills the box and may crop the image. contain shows the whole image and may leave spare space. Use complete class names in the condition.",
      code: 'className={fit === "cover" ? "object-cover" : "object-contain"}',
    },
    {
      title: "3. Keep natural proportions",
      text: "Width and height describe the source ratio. w-full and h-auto resize the image without stretching it. The sizes prop describes the display width when a fill image is responsive.",
      code: '<Image src="/landscape.svg" alt="Mountains"\n  width={960} height={540} className="h-auto w-full" />',
    },
  ],
};

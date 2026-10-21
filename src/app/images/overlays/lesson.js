export const lesson = {
  topic: "images",
  slug: "overlays",
  title: "Text over images",
  summary: "Use an overlay so words stay readable over a busy image.",
  steps: [
    "Turn the overlay off and on.",
    "Compare the smaller text as well as the heading.",
  ],
  explanations: [
    {
      title: "1. Layer the content",
      text: "relative anchors the image. isolate keeps the layers inside this example. The text remains real HTML instead of being baked into the image.",
      code: '<div className="relative isolate min-h-72 overflow-hidden">\n  <Image src="/landscape.svg" fill alt="" sizes="100vw"\n    className="-z-20 object-cover" />\n  <div className="absolute inset-0 -z-10 bg-black/65" />\n  <h2 className="text-white">Take the scenic route</h2>\n</div>',
    },
    {
      title: "2. Test the contrast",
      text: 'An overlay helps, but it is not an automatic contrast check. Test the actual text against its background, including at narrow widths. Decorative images can use alt="".',
      code: '{overlay && <div className="absolute inset-0 -z-10 bg-black/65" />}',
    },
  ],
};

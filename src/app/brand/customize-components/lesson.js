export const lesson = {
  topic: "brand",
  slug: "customize-components",
  title: "Customize shadcn components consistently",
  summary:
    "Choose between a local class, an existing variant, and a shared component change.",
  steps: [
    "Compare the variants on the button and link.",
    "Apply pill-shaped corners to both.",
    "Find the shared variant definitions in the button source.",
  ],
  explanations: [
    {
      title: "1. Start with the existing API",
      text: "variant and size are named component choices. Use them before adding a new pile of classes. className is useful for one instance.",
      code: '<Button variant="outline" size="lg" className="rounded-full">\n  Join the club\n</Button>',
    },
    {
      title: "2. Change a shared component deliberately",
      text: "The editable Button source is in components/ui/button.tsx. Its cva definition groups the base classes, variants, and sizes. If every action needs a new shape, change the shared rule or add a clear named variant. Check all states afterward.",
      code: "// src/components/ui/button.tsx\n// Base classes: styles used by every button.\n// variants: named appearances such as outline.\n// sizes: named dimensions such as lg.",
    },
    {
      title: "3. Give a link the same appearance",
      text: "buttonVariants returns the classes without rendering a Button. Apply them to Link so normal navigation behavior remains. Do not wrap a button inside a link.",
      code: '<Link href="/brand/style-guide"\n  className={buttonVariants({ variant: "outline", size: "lg" })}>\n  Open the style guide\n</Link>',
    },
    {
      title: "4. Preserve Base UI behavior",
      text: "When customizing a dialog, menu, or other Base UI component, keep the primitive parts and their behavior. Use the installed render API for triggers. Styling should not remove keyboard access, focus, or accessible labels.",
      code: '<DialogTrigger render={<Button variant="outline" />}>\n  Open details\n</DialogTrigger>',
    },
  ],
};

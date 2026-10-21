export const lesson = {
  topic: "images",
  slug: "icons",
  title: "Lucide icons and icon buttons",
  summary: "Import an icon, change its appearance, and label the action.",
  steps: [
    "Change the size and stroke.",
    "Save the place. Notice the icon and message change together.",
  ],
  explanations: [
    {
      title: "1. Import only the icons you use",
      text: "Import named icons from lucide-react. Props control size and stroke. A class can control color.",
      code: 'import { Compass, Heart } from "lucide-react";\n<Compass size={32} strokeWidth={2} className="text-blue-600" />',
    },
    {
      title: "2. Label the action",
      text: "The button needs a name even when it contains only an icon. aria-pressed records its toggle state. The decorative icon does not need a second name.",
      code: '<Button aria-label="Save this place" aria-pressed={saved}>\n  <Heart aria-hidden="true" />\n</Button>',
    },
  ],
};

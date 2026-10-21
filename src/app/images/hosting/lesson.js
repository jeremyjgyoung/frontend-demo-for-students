export const lesson = {
  topic: "images",
  slug: "hosting",
  title: "Host images on the LMS",
  summary:
    "Find the cloud icon in the bottom-right corner of the LMS, upload an image, and use its URL with Next.js Image.",
  steps: [
    "Open the LMS. Click the cloud icon in the bottom-right corner and upload your image.",
    "Copy the image URL. Paste it into imageUrl in the example.",
    "Change the alt text, width, and height to match your image.",
  ],
  explanations: [
    {
      title: "1. Upload and copy the URL",
      text: "Find the cloud icon in the bottom-right corner of the LMS. Click it and upload your image. Copy the image URL you get. This URL points to your image file. The cloud icon is in the LMS.",
      code: '// Paste the image URL from the LMS between the quotes.\nconst imageUrl = "https://YOUR_LMS_IMAGE_HOST/YOUR_IMAGE_FOLDER/camp.jpg";',
    },
    {
      title: "2. Use Next.js Image",
      text: "Import Image from next/image. Set src to imageUrl. Keep unoptimized in this simple example. It lets the browser load the original image directly, so there is no image-host configuration step. Replace the example URL with your own.",
      code: 'import Image from "next/image";\n\nexport function HostedPhoto() {\n  // Paste the URL from the LMS cloud upload here.\n  const imageUrl = "https://YOUR_LMS_IMAGE_HOST/YOUR_IMAGE_FOLDER/camp.jpg";\n\n  return (\n    <Image\n      src={imageUrl}\n      alt="Mountains below a yellow sun"\n      width={1200}\n      height={800}\n      unoptimized\n      className="h-auto w-full max-w-lg rounded-xl"\n    />\n  );\n}',
    },
    {
      title: "3. Match the image and its size",
      text: "alt describes the useful content for someone who cannot see the image. width and height are the original image dimensions in pixels. They reserve the right shape. w-full lets the image fit its container. h-auto keeps its proportions. max-w-lg limits its display width. This example loads the original file, so use a sensibly sized image rather than a very large camera photo.",
      code: '<Image\n  src={imageUrl}\n  alt="Mountains below a yellow sun"\n  width={1200}\n  height={800}\n  unoptimized\n  className="h-auto w-full max-w-lg rounded-xl"\n/>',
    },
  ],
};

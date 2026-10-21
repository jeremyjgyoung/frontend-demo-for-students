# Host images on the LMS

Find the cloud icon in the bottom-right corner of the LMS, upload an image, and use its URL with Next.js Image.

## Try it

1. Open the LMS. Click the cloud icon in the bottom-right corner and upload your image.
2. Copy the image URL. Paste it into imageUrl in the example.
3. Change the alt text, width, and height to match your image.

## How it works

### 1. Upload and copy the URL

Find the cloud icon in the bottom-right corner of the LMS. Click it and upload your image. Copy the image URL you get. This URL points to your image file. The cloud icon is in the LMS.

```jsx
// Paste the image URL from the LMS between the quotes.
const imageUrl = "https://YOUR_LMS_IMAGE_HOST/YOUR_IMAGE_FOLDER/camp.jpg";
```

### 2. Use Next.js Image

Import Image from next/image. Set src to imageUrl. Keep unoptimized in this simple example. It lets the browser load the original image directly, so there is no image-host configuration step. Replace the example URL with your own.

```jsx
import Image from "next/image";

export function HostedPhoto() {
  // Paste the URL from the LMS cloud upload here.
  const imageUrl = "https://YOUR_LMS_IMAGE_HOST/YOUR_IMAGE_FOLDER/camp.jpg";

  return (
    <Image
      src={imageUrl}
      alt="Mountains below a yellow sun"
      width={1200}
      height={800}
      unoptimized
      className="h-auto w-full max-w-lg rounded-xl"
    />
  );
}
```

### 3. Match the image and its size

alt describes the useful content for someone who cannot see the image. width and height are the original image dimensions in pixels. They reserve the right shape. w-full lets the image fit its container. h-auto keeps its proportions. max-w-lg limits its display width. This example loads the original file, so use a sensibly sized image rather than a very large camera photo.

```jsx
<Image
  src={imageUrl}
  alt="Mountains below a yellow sun"
  width={1200}
  height={800}
  unoptimized
  className="h-auto w-full max-w-lg rounded-xl"
/>
```

## Try a change

Upload your own image with the cloud icon in the LMS. Paste its URL into the example. Change the description and source dimensions.

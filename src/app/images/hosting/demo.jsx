import Image from "next/image";
import { Cloud } from "lucide-react";

export function LessonDemo() {
  return (
    <div className="space-y-6">
      <section className="space-y-4 rounded-xl border p-6">
        <h2 className="flex items-center gap-3 text-xl font-semibold">
          <Cloud aria-hidden="true" className="size-6 shrink-0" />
          Get your image URL from the LMS
        </h2>
        <ol className="list-decimal space-y-3 pl-5 leading-7">
          <li>Open the LMS. Find the cloud icon in the bottom-right corner.</li>
          <li>Click it and upload your image.</li>
          <li>
            Copy the URL you get. Paste it into imageUrl in the example below.
          </li>
        </ol>
        <p className="text-sm leading-6 text-muted-foreground">
          The cloud icon is in the LMS. This demo shows how to use the URL after
          the upload.
        </p>
      </section>
      <section className="space-y-4 rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Put the URL in Next.js Image</h2>
        {/* The local image keeps the preview working before you upload your own. */}
        <Image
          src="/landscape.svg"
          alt="Illustrated mountains and a yellow sun"
          width={960}
          height={540}
          unoptimized
          className="h-auto w-full max-w-lg rounded-xl"
        />
        <p className="leading-7">
          This preview uses a local image. In your project, use the URL from the
          LMS. Keep unoptimized so the image loads directly. Change the alt text
          and dimensions to match your image.
        </p>
        <pre
          tabIndex={0}
          className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
        >
          <code>
            {
              'import Image from "next/image";\n\nexport function HostedPhoto() {\n  // Paste the URL from the LMS cloud upload here.\n  const imageUrl = "https://YOUR_LMS_IMAGE_HOST/YOUR_IMAGE_FOLDER/camp.jpg";\n\n  return (\n    <Image\n      src={imageUrl}\n      alt="Mountains below a yellow sun"\n      width={1200}\n      height={800}\n      unoptimized\n      className="h-auto w-full max-w-lg rounded-xl"\n    />\n  );\n}'
            }
          </code>
        </pre>
      </section>
    </div>
  );
}

import Link from "next/link";
export const dynamic = "force-dynamic";
export default async function Page() {
  // Wait only for this teaching example. Real pages should not add a fake delay.
  await new Promise(function wait(resolve) {
    setTimeout(resolve, 1800);
  });
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">The practice page is ready</h1>
      <Link className="underline" href="/nextjs/feedback">
        Back to loading and missing pages
      </Link>
    </div>
  );
}

import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl space-y-5 px-6 py-20">
      <h1 className="text-3xl font-semibold">We could not find that page</h1>
      <p>Check the address or choose a lesson from the home page.</p>
      <Link className="underline" href="/">
        Choose a lesson
      </Link>
    </main>
  );
}

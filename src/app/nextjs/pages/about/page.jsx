import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
export const metadata = { title: "About the Adventure Club" };

export default function Page() {
  return (
    <article className="space-y-7">
      <header className="max-w-xl space-y-3">
        <p className="text-xs font-semibold tracking-widest text-blue-700 uppercase dark:text-blue-300">
          About this club
        </p>
        <h2 className="text-3xl font-semibold tracking-tight">
          Small adventures. Good company.
        </h2>
        <p className="leading-7 text-muted-foreground">
          We make time to explore, create, and learn together. Each week,
          members choose a simple activity that anyone can join.
        </p>
      </header>
      <div className="grid gap-5 sm:grid-cols-2">
        <section className="rounded-xl bg-muted/60 p-5">
          <h3 className="font-semibold">What we do</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
            <li>Walk a local trail.</li>
            <li>Sketch, build, or take photos.</li>
            <li>Share an idea and try it together.</li>
          </ul>
        </section>
        <section className="rounded-xl border p-5">
          <h3 className="font-semibold">Your first visit</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Bring a friend or come on your own. We start with a short welcome,
            then help you choose an activity.
          </p>
        </section>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="/nextjs/pages/contact"
          scroll={false}
          className={buttonVariants()}
        >
          Find out how to join
        </Link>
        <Link
          href="/nextjs/pages"
          scroll={false}
          className="text-sm underline underline-offset-4"
        >
          Back to club home
        </Link>
      </div>
    </article>
  );
}

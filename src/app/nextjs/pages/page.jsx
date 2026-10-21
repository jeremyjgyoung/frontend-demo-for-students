import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
export const metadata = { title: "Create pages and link between them" };

export default function Page() {
  // The surrounding club header comes from this folder's layout.jsx.
  return (
    <article className="space-y-7">
      <div className="max-w-xl space-y-4">
        <p className="text-xs font-semibold tracking-widest text-blue-700 uppercase dark:text-blue-300">
          A little time. A new adventure.
        </p>
        <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
          Find your people.
          <br />
          Try something new.
        </h2>
        <p className="max-w-prose leading-7 text-muted-foreground">
          Take a short walk, make something with friends, or learn a new skill.
          Our after-school club is open to curious people.
        </p>
        <Link
          href="/nextjs/pages/about"
          scroll={false}
          className={buttonVariants()}
        >
          Meet the club
        </Link>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <section className="rounded-xl bg-muted/60 p-4">
          <h3 className="font-semibold">Get outside</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Follow a local trail and take a break from the screen.
          </p>
        </section>
        <section className="rounded-xl bg-muted/60 p-4">
          <h3 className="font-semibold">Make something</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Bring an idea. We will help you get started.
          </p>
        </section>
        <section className="rounded-xl bg-muted/60 p-4">
          <h3 className="font-semibold">Come as you are</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            You do not need special equipment or experience.
          </p>
        </section>
      </div>
    </article>
  );
}

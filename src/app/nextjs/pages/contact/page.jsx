import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
export const metadata = { title: "Contact the Adventure Club" };

export default function Page() {
  return (
    <article className="space-y-7">
      <header className="max-w-xl space-y-3">
        <p className="text-xs font-semibold tracking-widest text-blue-700 uppercase dark:text-blue-300">
          Contact the club
        </p>
        <h2 className="text-3xl font-semibold tracking-tight">
          Come and say hello.
        </h2>
        <p className="leading-7 text-muted-foreground">
          Have a question before you join? Visit our welcome table. We can
          explain the activities and help you choose your first one.
        </p>
      </header>
      <dl className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-muted/60 p-5">
          <dt className="text-sm text-muted-foreground">When</dt>
          <dd className="mt-2 font-semibold">Friday, 15:30</dd>
        </div>
        <div className="rounded-xl bg-muted/60 p-5">
          <dt className="text-sm text-muted-foreground">Where</dt>
          <dd className="mt-2 font-semibold">School library</dd>
        </div>
        <div className="rounded-xl bg-muted/60 p-5">
          <dt className="text-sm text-muted-foreground">Bring</dt>
          <dd className="mt-2 font-semibold">Your questions</dd>
        </div>
      </dl>
      <p className="text-sm text-muted-foreground">
        This club and its meeting details are practice content for the demo.
      </p>
      <Link
        href="/nextjs/pages"
        scroll={false}
        className={buttonVariants({ variant: "outline" })}
      >
        Back to club home
      </Link>
    </article>
  );
}

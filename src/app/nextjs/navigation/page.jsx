import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
export const metadata = { title: "Build responsive navigation" };
export default function Page() {
  return (
    <article className="max-w-xl space-y-5">
      <p className="text-xs font-semibold tracking-widest text-blue-700 uppercase dark:text-blue-300">
        Welcome to the club
      </p>
      <h2 className="text-3xl font-semibold tracking-tight">
        Good plans start here.
      </h2>
      <p className="leading-7 text-muted-foreground">
        Explore an after-school activity with people who like trying new things.
        Use the club navigation to find out who we are and when to meet.
      </p>
      <Link
        href="/nextjs/navigation/about"
        scroll={false}
        className={buttonVariants({ variant: "outline" })}
      >
        Get to know us
      </Link>
    </article>
  );
}

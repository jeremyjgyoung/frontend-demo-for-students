import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
export const metadata = { title: "Style the active navigation link" };
export default function Page() {
  return (
    <article className="max-w-xl space-y-5">
      <p className="text-xs font-semibold tracking-widest text-blue-700 uppercase dark:text-blue-300">
        Your next adventure
      </p>
      <h2 className="text-3xl font-semibold tracking-tight">
        Make a little room for something new.
      </h2>
      <p className="leading-7 text-muted-foreground">
        Find an activity, read its details, or revisit the example saved list.
        The club navigation shows which section you are in.
      </p>
      <Link
        href="/nextjs/active/activities"
        scroll={false}
        className={buttonVariants()}
      >
        Browse activities
      </Link>
    </article>
  );
}

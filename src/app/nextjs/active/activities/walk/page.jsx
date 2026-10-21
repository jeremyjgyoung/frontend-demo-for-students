import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
export const metadata = { title: "Trail walk" };
export default function Page() {
  return (
    <article className="max-w-xl space-y-5">
      <p className="text-xs font-semibold tracking-widest text-blue-700 uppercase dark:text-blue-300">
        Outdoors · Friday, 15:30
      </p>
      <h2 className="text-3xl font-semibold tracking-tight">
        A short walk. A fresh perspective.
      </h2>
      <p className="leading-7 text-muted-foreground">
        Meet outside the school library. We will follow a marked trail and
        return before 17:00. Bring water and a coat.
      </p>
      <p className="rounded-xl bg-muted/60 p-4 text-sm leading-6">
        Notice that Activities stays highlighted. This detail page belongs to
        that section. The breadcrumb shows your exact location.
      </p>
      <Link
        href="/nextjs/active/activities"
        scroll={false}
        className={buttonVariants({ variant: "outline" })}
      >
        Back to activities
      </Link>
    </article>
  );
}

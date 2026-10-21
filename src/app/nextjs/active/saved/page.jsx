import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
export const metadata = { title: "Saved club activities" };
export default function Page() {
  return (
    <article className="max-w-xl space-y-5">
      <h2 className="text-3xl font-semibold tracking-tight">
        A place for your next idea.
      </h2>
      <div className="space-y-3 rounded-xl border border-dashed bg-muted/30 p-6">
        <h3 className="font-semibold">No saved activities in this example</h3>
        <p className="text-sm leading-6 text-muted-foreground">
          This page shows an empty state. It does not store a saved list.
        </p>
        <Link
          href="/nextjs/active/activities"
          scroll={false}
          className={buttonVariants({ variant: "outline" })}
        >
          Explore activities
        </Link>
      </div>
    </article>
  );
}

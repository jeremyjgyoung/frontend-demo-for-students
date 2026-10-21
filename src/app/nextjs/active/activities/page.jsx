import Link from "next/link";
export const metadata = { title: "Club activities" };
export default function Page() {
  return (
    <article className="space-y-5">
      <header className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight">
          Find something to try.
        </h2>
        <p className="leading-7 text-muted-foreground">
          Start with a short walk. All experience levels are welcome.
        </p>
      </header>
      <Link
        href="/nextjs/active/activities/walk"
        scroll={false}
        className="block max-w-lg rounded-xl border p-5 transition-colors hover:bg-muted"
      >
        <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
          Outdoors · Friday
        </p>
        <h3 className="mt-3 text-xl font-semibold">Trail walk</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          An easy route, fresh air, and time to talk.
        </p>
        <span className="mt-4 inline-block text-sm font-medium underline underline-offset-4">
          Read about the trail walk
        </span>
      </Link>
    </article>
  );
}

// This file is one folder deeper, so ../ goes back to the lesson folder.
import { TrailNote } from "../trail-note";
export function PathCard() {
  return (
    <article className="space-y-3 rounded-xl bg-muted/40 p-5">
      <h3 className="font-semibold">Parent-folder import</h3>
      <code className="text-sm">../trail-note</code>
      <TrailNote />
    </article>
  );
}

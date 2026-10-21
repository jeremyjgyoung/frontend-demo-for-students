// A normal reusable component uses the named-export convention for this project.
export function ClubNote() {
  return (
    <aside
      aria-label="Named component example"
      className="rounded-xl border p-5"
    >
      <p className="font-semibold">A named component</p>
      <p className="mt-2">
        Bring water and a coat. This note comes from ClubNote.
      </p>
    </aside>
  );
}

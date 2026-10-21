// Next.js loads this default export for the /basics/page-exports/example URL.
export default function ExamplePage() {
  return (
    <article className="space-y-4 rounded-xl bg-muted/40 p-6">
      <h2 className="text-2xl font-semibold">Adventure Club</h2>
      <p>Meet at the school library on Friday at 15:30.</p>
      <p>
        The same component can be rendered through a default import or loaded by
        Next.js as this route’s page.
      </p>
    </article>
  );
}

import { Button } from "@/components/ui/button";

// This component receives data and a handler. The parent owns the selected value.
export function ActivityCard({ title, description, selected, onChoose }) {
  return (
    <article
      className={
        selected
          ? "space-y-4 rounded-xl border-2 border-blue-600 bg-blue-50 p-5 text-blue-950"
          : "space-y-4 rounded-xl border-2 border-border p-5"
      }
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm leading-7">{description}</p>
      <Button
        variant={selected ? "default" : "outline"}
        aria-pressed={selected}
        onClick={onChoose}
      >
        {selected ? "Selected" : "Choose " + title}
      </Button>
    </article>
  );
}

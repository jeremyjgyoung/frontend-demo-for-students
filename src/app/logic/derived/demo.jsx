"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LessonDemo() {
  const [quantity, setQuantity] = useState(0);
  const [member, setMember] = useState(false);
  const price = 12;
  // These values are calculated, not stored in a second set of state variables.
  const subtotal = quantity * price;
  const discount = member ? subtotal * 0.25 : 0;
  const total = subtotal - discount;
  return (
    <div className="space-y-6 rounded-xl border p-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold">Workshop places</h2>
        <p>Practice price: $12 per person. Choose up to five places.</p>
      </header>
      <div className="flex flex-wrap items-center gap-4">
        <Button
          variant="outline"
          aria-label="Remove one place"
          disabled={quantity === 0}
          onClick={function removePlace() {
            setQuantity(quantity - 1);
          }}
        >
          −
        </Button>
        <output
          aria-live="polite"
          className="min-w-12 text-center text-2xl font-semibold"
        >
          {quantity}
        </output>
        <Button
          variant="outline"
          aria-label="Add one place"
          disabled={quantity === 5}
          onClick={function addPlace() {
            setQuantity(quantity + 1);
          }}
        >
          +
        </Button>
      </div>
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={member}
          onChange={function changeMembership(event) {
            setMember(event.target.checked);
          }}
        />
        Apply the example member discount of 25%
      </label>
      <dl className="grid gap-4 sm:grid-cols-3">
        <div>
          <dt className="text-sm text-muted-foreground">Subtotal</dt>
          <dd className="text-xl">${subtotal.toFixed(2)}</dd>
        </div>
        <div>
          <dt className="text-sm text-muted-foreground">Discount</dt>
          <dd className="text-xl">${discount.toFixed(2)}</dd>
        </div>
        <div>
          <dt className="text-sm text-muted-foreground">Practice total</dt>
          <dd className="text-xl font-semibold" data-testid="practice-total">
            ${total.toFixed(2)}
          </dd>
        </div>
      </dl>
      <p role="status">
        {quantity === 0
          ? "Choose at least one place to continue."
          : quantity === 1
            ? "One place selected."
            : quantity + " places selected."}
      </p>
      <p className="text-sm text-muted-foreground">
        No payment or booking happens in this example.
      </p>
    </div>
  );
}

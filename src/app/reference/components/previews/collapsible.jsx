"use client";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// A local preview using the real component already in your template.
export function CollapsiblePreview() {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>
        Toggle extra details
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-3 text-sm">
        The route is mostly flat. Meet at the library.
      </CollapsibleContent>
    </Collapsible>
  );
}

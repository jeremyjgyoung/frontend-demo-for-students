"use client";
import { Badge } from "@/components/ui/badge";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";

// A local preview using the real component already in your template.
export function ItemPreview() {
  return (
    <Item variant="outline" className="w-full">
      <ItemContent>
        <ItemTitle>Art club</ItemTitle>
        <ItemDescription>Wednesday after school.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Badge variant="secondary">Open</Badge>
      </ItemActions>
    </Item>
  );
}

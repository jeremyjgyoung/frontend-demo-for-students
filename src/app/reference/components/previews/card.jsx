"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// A local preview using the real component already in your template.
export function CardPreview() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <h4>Walking club</h4>
        </CardTitle>
        <CardDescription>Friday after school</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Meet at the library at 15:30.</p>
      </CardContent>
    </Card>
  );
}

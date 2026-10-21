"use client";
import { DirectionProvider } from "@/components/ui/direction";

// A local preview using the real component already in your template.
export function DirectionPreview() {
  return (
    <DirectionProvider direction="rtl">
      <div dir="rtl" className="w-full space-y-3 rounded-lg border p-4">
        <p lang="ar" className="text-lg">
          مرحبا بكم
        </p>
        <p className="text-sm text-muted-foreground">
          Right-to-left reading direction
        </p>
      </div>
    </DirectionProvider>
  );
}

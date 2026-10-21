"use client";
import { BarChart, Bar, XAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

// A local preview using the real component already in your template.
export function ChartPreview() {
  return (
    <div className="w-full">
      <ChartContainer
        config={{ members: { label: "Members", color: "#2563eb" } }}
        className="h-40 w-full"
      >
        <BarChart
          data={[
            { club: "Art", members: 12 },
            { club: "Walk", members: 18 },
            { club: "Music", members: 9 },
          ]}
          accessibilityLayer
        >
          <XAxis dataKey="club" tickLine={false} axisLine={false} />
          <Bar
            dataKey="members"
            fill="var(--color-members)"
            radius={4}
            isAnimationActive={false}
          />
        </BarChart>
      </ChartContainer>
      <p className="text-xs text-muted-foreground">
        Members: Art 12 · Walk 18 · Music 9
      </p>
    </div>
  );
}

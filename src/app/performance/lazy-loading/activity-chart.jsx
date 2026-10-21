"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
export function ActivityChart({ activities }) {
  const config = { members: { label: "Members", color: "#2563eb" } };
  return (
    <div
      role="group"
      aria-label="Club membership chart; exact values are listed above"
      className="min-w-0"
    >
      <ChartContainer config={config} className="h-64 w-full">
        <BarChart data={activities} accessibilityLayer>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="club" />
          <YAxis allowDecimals={false} />
          <Bar dataKey="members" fill="var(--color-members)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

"use client";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { Button } from "@/components/ui/button";
import { ChartContainer } from "@/components/ui/chart";
import {
  Table,
  TableCaption,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
export function LessonDemo() {
  const [nextWeek, setNextWeek] = useState(false);
  const rows = nextWeek
    ? [
        { club: "Art", members: 16 },
        { club: "Outdoors", members: 20 },
        { club: "Music", members: 14 },
      ]
    : [
        { club: "Art", members: 12 },
        { club: "Outdoors", members: 18 },
        { club: "Music", members: 9 },
      ];
  const chartConfig = { members: { label: "Members", color: "#2563eb" } };
  function changeWeek() {
    setNextWeek(!nextWeek);
  }
  return (
    <section className="min-w-0 space-y-6 rounded-xl border p-6">
      <h2 className="text-2xl font-semibold">Two views of the same data</h2>
      <Button variant="outline" aria-pressed={nextWeek} onClick={changeWeek}>
        {nextWeek ? "Show this week" : "Show next week"}
      </Button>
      <p role="status">Showing {nextWeek ? "next week" : "this week"}.</p>
      <Table>
        <TableCaption>
          Club membership: {nextWeek ? "next week" : "this week"}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead scope="col">Club</TableHead>
            <TableHead scope="col">Members</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map(function showRow(row) {
            return (
              <TableRow key={row.club}>
                <TableCell>{row.club}</TableCell>
                <TableCell>{row.members}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div
        role="group"
        aria-label="Club membership bar chart; exact values are in the table above"
        className="min-w-0"
      >
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <BarChart data={rows} accessibilityLayer>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="club" />
            <YAxis allowDecimals={false} />
            <Bar dataKey="members" fill="var(--color-members)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
    </section>
  );
}

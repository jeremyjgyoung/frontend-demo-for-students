"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// A local preview using the real component already in your template.
export function TabsPreview() {
  return (
    <Tabs defaultValue="details" className="w-full">
      <TabsList aria-label="Activity views">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="schedule">Schedule</TabsTrigger>
      </TabsList>
      <TabsContent value="details" className="rounded-lg border p-4 text-sm">
        A short walk with friends.
      </TabsContent>
      <TabsContent value="schedule" className="rounded-lg border p-4 text-sm">
        Friday, 15:30–17:00.
      </TabsContent>
    </Tabs>
  );
}

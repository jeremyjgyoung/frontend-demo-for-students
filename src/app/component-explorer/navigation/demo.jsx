"use client";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
export function LessonDemo() {
  return (
    <section className="space-y-6 rounded-xl border p-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/component-explorer" />}>
              Component Explorer
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Club details</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="text-2xl font-semibold">Friday walk</h2>
      <Tabs defaultValue="schedule">
        <TabsList aria-label="Club detail views">
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="location">Location</TabsTrigger>
        </TabsList>
        <TabsContent value="schedule">
          <p className="py-4">Meet at 15:30. Return before 17:00.</p>
        </TabsContent>
        <TabsContent value="location">
          <p className="py-4">
            Start at the school library. Follow the nearby trail.
          </p>
        </TabsContent>
      </Tabs>
      <Link
        href="/nextjs/pages"
        className={buttonVariants({ variant: "outline" })}
      >
        Open the pages lesson
      </Link>
    </section>
  );
}

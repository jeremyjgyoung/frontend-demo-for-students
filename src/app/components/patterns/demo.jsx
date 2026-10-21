"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
export function LessonDemo() {
  const [choice, setChoice] = useState("No action chosen.");
  return (
    <div className="space-y-6 rounded-xl border p-6">
      <div className="flex flex-wrap gap-3">
        <Dialog>
          <DialogTrigger render={<Button />}>Open trip details</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Friday walk</DialogTitle>
              <DialogDescription>
                Meet outside the school at 15:30. Bring water and a coat.
              </DialogDescription>
            </DialogHeader>
            <DialogClose render={<Button variant="outline" />}>
              Done
            </DialogClose>
          </DialogContent>
        </Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" />}>
            Trip actions
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={function chooseShare() {
                setChoice("Share selected. This is a local example.");
              }}
            >
              Share trip
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={function chooseSave() {
                setChoice("Trip saved for this preview.");
              }}
            >
              Save trip
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p aria-live="polite">{choice}</p>
      <Tabs defaultValue="details">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="py-4">
          A short walk on a marked trail.
        </TabsContent>
        <TabsContent value="equipment" className="py-4">
          Bring water, a coat, and suitable shoes.
        </TabsContent>
      </Tabs>
    </div>
  );
}

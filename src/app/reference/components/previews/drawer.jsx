"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

// A local preview using the real component already in your template.
export function DrawerPreview() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>
        Open bottom drawer
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Trip details</DrawerTitle>
          <DrawerDescription>Meet on Friday at 15:30.</DrawerDescription>
        </DrawerHeader>
        <div className="p-5">Drag the handle or close the panel.</div>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>
            Close drawer
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

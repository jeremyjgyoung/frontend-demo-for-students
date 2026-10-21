"use client";
import { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

// A local preview using the real component already in your template.
export function MenubarPreview() {
  const [message, setMessage] = useState("Choose a File action.");
  return (
    <div className="space-y-3">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem
              onClick={function newProject() {
                setMessage("New project selected.");
              }}
            >
              New project
            </MenubarItem>
            <MenubarItem
              onClick={function saveProject() {
                setMessage("Project saved in this preview.");
              }}
            >
              Save
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarItem
              onClick={function showHelp() {
                setMessage("Try each component, then open its code.");
              }}
            >
              Quick help
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <p role="status" className="text-xs text-muted-foreground">
        {message}
      </p>
    </div>
  );
}

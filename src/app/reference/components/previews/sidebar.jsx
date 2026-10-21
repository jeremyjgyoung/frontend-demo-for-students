"use client";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

// A local preview using the real component already in your template.
export function SidebarPreview() {
  const [section, setSection] = useState("Projects");
  return (
    <SidebarProvider className="min-h-0 overflow-hidden rounded-lg border">
      <Sidebar collapsible="none" className="w-36">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {["Projects", "Files"].map(function menuItem(label) {
                  return (
                    <SidebarMenuItem key={label}>
                      <SidebarMenuButton
                        isActive={section === label}
                        onClick={function chooseSection() {
                          setSection(label);
                        }}
                      >
                        {label}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="flex min-w-0 flex-1 items-center justify-center p-3 text-sm">
        {section}
      </div>
    </SidebarProvider>
  );
}

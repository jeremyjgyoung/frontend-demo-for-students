"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

// A local preview using the real component already in your template.
export function ResizablePreview() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-32 w-full rounded-lg border"
    >
      <ResizablePanel defaultSize="40%" minSize="25%">
        <div className="flex h-32 items-center justify-center bg-muted/40 p-3 text-sm">
          Sidebar
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel minSize="25%">
        <div className="flex h-32 items-center justify-center p-3 text-sm">
          Drag the divider
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

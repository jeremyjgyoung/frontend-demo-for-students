"use client";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

// A local preview using the real component already in your template.
export function PaginationPreview() {
  const [page, setPage] = useState(1);
  return (
    <div className="space-y-3">
      <Pagination aria-label="Preview pages">
        <PaginationContent>
          {[1, 2, 3].map(function pageLink(number) {
            return (
              <PaginationItem key={number}>
                <PaginationLink
                  href="#component-pagination"
                  isActive={page === number}
                  onClick={function changePage(event) {
                    event.preventDefault();
                    setPage(number);
                  }}
                >
                  {number}
                </PaginationLink>
              </PaginationItem>
            );
          })}
        </PaginationContent>
      </Pagination>
      <p role="status" className="text-center text-xs text-muted-foreground">
        Showing page {page}
      </p>
    </div>
  );
}

"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// A local preview using the real component already in your template.
export function TablePreview() {
  return (
    <Table>
      <TableCaption>Club schedule</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead scope="col">Club</TableHead>
          <TableHead scope="col">Day</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Art</TableCell>
          <TableCell>Wednesday</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Walking</TableCell>
          <TableCell>Friday</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

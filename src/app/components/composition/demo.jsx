"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
export function LessonDemo() {
  const [footer, setFooter] = useState(true);
  const [message, setMessage] = useState("");
  return (
    <div className="space-y-5">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={footer}
          onChange={function changeFooter(event) {
            setFooter(event.target.checked);
          }}
        />
        Show the card footer
      </label>
      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle>
            <h2>Friday walk</h2>
          </CardTitle>
          <CardDescription>A short route and time to talk.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-7">
            Meet at the school library at 15:30. Bring water and a coat.
          </p>
        </CardContent>
        {footer && (
          <CardFooter>
            <Button
              onClick={function showDetails() {
                setMessage(
                  "The walk returns before 17:00. No booking is made in this demo.",
                );
              }}
            >
              Read the details
            </Button>
          </CardFooter>
        )}
      </Card>
      <p role="status">{message}</p>
    </div>
  );
}

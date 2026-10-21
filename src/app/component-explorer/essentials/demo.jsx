"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
export function LessonDemo() {
  const [saved, setSaved] = useState(false);
  function toggleSaved() {
    setSaved(!saved);
  }
  return (
    <Card className="max-w-xl">
      <CardHeader>
        <div className="mb-3 flex items-center gap-3">
          <Avatar>
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <Badge variant="secondary">Outdoors</Badge>
        </div>
        <CardTitle>
          <h2>Friday walk</h2>
        </CardTitle>
        <CardDescription>A short route and time to talk.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>Meet at the school library at 15:30. Bring water and a coat.</p>
        <Separator />
        <p role="status">
          <Badge variant={saved ? "default" : "outline"}>
            {saved ? "Saved to your practice list" : "Not saved"}
          </Badge>
        </p>
      </CardContent>
      <CardFooter>
        <Button onClick={toggleSaved} aria-pressed={saved}>
          {saved ? "Remove from my list" : "Save this activity"}
        </Button>
      </CardFooter>
    </Card>
  );
}

"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
export function LessonDemo() {
  const [status, setStatus] = useState("ready");
  const [progress, setProgress] = useState(25);
  function addProgress() {
    setProgress(Math.min(progress + 25, 100));
  }
  function notify() {
    toast.success("Practice progress noted.");
  }
  return (
    <section className="space-y-6 rounded-xl border p-6">
      <h2 className="text-2xl font-semibold">Explain what is happening</h2>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          aria-pressed={status === "loading"}
          onClick={function showLoading() {
            setStatus("loading");
          }}
        >
          Loading
        </Button>
        <Button
          variant="outline"
          aria-pressed={status === "ready"}
          onClick={function showReady() {
            setStatus("ready");
          }}
        >
          Ready
        </Button>
        <Button
          variant="outline"
          aria-pressed={status === "empty"}
          onClick={function showEmpty() {
            setStatus("empty");
          }}
        >
          Empty
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        These controls simulate display states. No network request is made.
      </p>
      {status === "loading" && (
        <div className="space-y-4">
          <p role="status" className="flex items-center gap-2">
            <Spinner aria-hidden="true" />
            Loading sample activities…
          </p>
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-6 w-2/3" />
        </div>
      )}
      {status === "ready" && (
        <div className="space-y-5">
          <Alert>
            <AlertTitle>Activity list ready</AlertTitle>
            <AlertDescription>
              Two sample activities are available.
            </AlertDescription>
          </Alert>
          <Progress value={progress} aria-label="Practice progress" />
          <p role="status">{progress}% complete</p>
          <div className="flex flex-wrap gap-3">
            <Button onClick={addProgress} disabled={progress === 100}>
              Add progress
            </Button>
            <Button variant="outline" onClick={notify}>
              Show notification
            </Button>
          </div>
        </div>
      )}
      {status === "empty" && (
        <Empty>
          <EmptyHeader>
            <EmptyTitle>No activities yet</EmptyTitle>
            <EmptyDescription>
              Load the local examples to try this page.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button
              onClick={function loadExamples() {
                setStatus("ready");
              }}
            >
              Load examples
            </Button>
          </EmptyContent>
        </Empty>
      )}
    </section>
  );
}

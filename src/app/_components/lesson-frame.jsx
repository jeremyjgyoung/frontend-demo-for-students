"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function SourceCode({ source }) {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  async function copyCode() {
    try {
      await navigator.clipboard.writeText(source.code);
      setCopied(true);
      setMessage("Code copied.");
    } catch {
      setMessage("Select the code and copy it with your keyboard.");
    }
  }
  return (
    <section className="min-w-0 overflow-hidden rounded-xl border">
      <div className="flex flex-wrap items-center justify-between gap-3 bg-muted/40 px-4 py-3">
        <h3 className="min-w-0 text-xs break-all">{source.name}</h3>
        <Button variant="ghost" size="sm" onClick={copyCode}>
          {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          {copied ? "Copied" : "Copy code"}
        </Button>
      </div>
      <p role="status" className={message ? "px-4 py-2 text-sm" : "sr-only"}>
        {message}
      </p>
      <pre
        tabIndex={0}
        className="source-code max-h-[40rem] overflow-auto bg-slate-950 p-5 text-xs leading-6 text-slate-100"
      >
        <code dangerouslySetInnerHTML={{ __html: source.highlighted }} />
      </pre>
    </section>
  );
}

export function LessonFrame({ lesson, sources, children }) {
  return (
    <div className="space-y-7">
      <header className="max-w-3xl space-y-3">
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Front End Demos · JavaScript
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {lesson.title}
        </h1>
        <p className="text-base leading-7 text-muted-foreground">
          {lesson.summary}
        </p>
      </header>
      <Tabs defaultValue="preview">
        <TabsList variant="line" className="mb-6">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="explanation">Explanation</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" keepMounted>
          <section className="mb-6 rounded-xl bg-muted/50 p-5">
            <h2 className="font-semibold">Try this</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6">
              {lesson.steps.map(function renderStep(step) {
                return <li key={step}>{step}</li>;
              })}
            </ol>
          </section>
          <div className="lesson-preview min-w-0">{children}</div>
        </TabsContent>
        <TabsContent value="explanation">
          <article className="max-w-3xl space-y-8">
            <section className="rounded-xl border p-6">
              <h2 className="text-xl font-semibold">How this works</h2>
              <p className="mt-3 leading-7">
                {lesson.summary} Follow the steps below. Match each snippet to
                the full example in Code.
              </p>
            </section>
            {lesson.explanations.map(function renderExplanation(part) {
              return (
                <section key={part.title} className="space-y-4">
                  <h3 className="text-xl font-semibold">{part.title}</h3>
                  <p className="leading-7 text-muted-foreground">{part.text}</p>
                  <pre
                    tabIndex={0}
                    className="overflow-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"
                  >
                    <code>{part.code}</code>
                  </pre>
                </section>
              );
            })}
            <section className="rounded-xl border p-6">
              <h3 className="font-semibold">Try a change</h3>
              <p className="mt-2 leading-7">
                Change one value in the example. Predict what will change. Run
                the page and explain the result.
              </p>
            </section>
          </article>
        </TabsContent>
        <TabsContent value="code">
          <div className="space-y-5">
            <p className="text-sm leading-7 text-muted-foreground">
              The first file contains the working example. The following files
              show the page and any extra setup. These are the actual source
              files. Each lesson folder also has a README.md lesson.
            </p>
            {sources.map(function renderSource(source) {
              return <SourceCode key={source.name} source={source} />;
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

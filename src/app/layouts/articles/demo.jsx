"use client";
import { useState } from "react";

export function LessonDemo() {
  const [width, setWidth] = useState("wide");
  return (
    <div className="space-y-5">
      <label className="flex flex-wrap items-center gap-3 text-sm font-medium">
        Preview width
        <select
          value={width}
          onChange={function changeWidth(event) {
            setWidth(event.target.value);
          }}
          className="rounded-lg border bg-background px-3 py-2"
        >
          <option value="wide">Wide</option>
          <option value="narrow">Narrow</option>
        </select>
      </label>
      <p className="text-sm leading-6 text-muted-foreground">
        Narrow limits this example to 24rem. Wide uses the available space. The
        page itself stays the same size.
      </p>
      {/* Container queries respond to this preview box, not the whole browser. */}
      <div
        className={
          width === "narrow"
            ? "@container mx-auto w-full max-w-sm"
            : "@container w-full"
        }
      >
        <div className="rounded-2xl border bg-background p-5 @2xl:p-8">
          <header className="mb-8 border-b pb-5">
            <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Field notes / A project guide
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold">
              A small project can teach you a lot.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              By the Make Club team · 3 minute read
            </p>
          </header>
          <div className="grid gap-8 @2xl:grid-cols-[minmax(0,1fr)_11rem]">
            {/* Put these links first so a reader can choose a section before the article. */}
            <aside className="self-start rounded-xl bg-muted/50 p-4 @2xl:sticky @2xl:top-6 @2xl:col-start-2 @2xl:row-start-1">
              <nav aria-label="Article sections">
                <p className="font-semibold">On this page</p>
                <ul className="mt-3 space-y-3 text-sm">
                  <li>
                    <a
                      className="underline underline-offset-4"
                      href="#article-problem"
                    >
                      Choose a problem
                    </a>
                  </li>
                  <li>
                    <a
                      className="underline underline-offset-4"
                      href="#article-first-version"
                    >
                      Build a first version
                    </a>
                  </li>
                  <li>
                    <a
                      className="underline underline-offset-4"
                      href="#article-feedback"
                    >
                      Ask for feedback
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>
            <article className="max-w-prose min-w-0 space-y-8 leading-7 @2xl:col-start-1 @2xl:row-start-1">
              <section id="article-problem" className="scroll-mt-8 space-y-4">
                <h3 className="text-xl font-bold">Choose a problem</h3>
                <p>
                  Start with something you notice each day. Your club might need
                  a clear list of events. Your team might need a place to show
                  its work. Choose one audience and one useful task.
                </p>
                <p>
                  Write a sentence that names the person and the task. For
                  example: a new club member needs to find the next meeting.
                  This sentence helps you decide what belongs on the page.
                </p>
              </section>
              <section
                id="article-first-version"
                className="scroll-mt-8 space-y-4"
              >
                <h3 className="text-xl font-bold">Build a first version</h3>
                <p>
                  Draw the main parts on paper. Put the most useful information
                  first. Add a heading, a short introduction, and the details a
                  person needs to act.
                </p>
                <p>
                  Build one page before you add more. Use sample text that looks
                  like the real content. A layout that fits two words may fail
                  when a real event has a longer name.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 font-medium">
                  Make the main task easy to find.
                </blockquote>
              </section>
              <section id="article-feedback" className="scroll-mt-8 space-y-4">
                <h3 className="text-xl font-bold">Ask for feedback</h3>
                <p>
                  Ask a classmate to find the next meeting without your help.
                  Watch what they read and where they click. A pause or wrong
                  turn tells you what to improve.
                </p>
                <p>
                  Check the page on a phone. Try the links with a keyboard.
                  Change one problem, then test again. Keep a short note of what
                  you learned.
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

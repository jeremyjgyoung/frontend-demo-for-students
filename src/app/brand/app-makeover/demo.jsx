"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
export function LessonDemo() {
  const [styled, setStyled] = useState(true);
  const [checked, setChecked] = useState([]);
  const checks = [
    "Set shared colors and readable pairs.",
    "Apply the heading and body fonts.",
    "Use consistent spacing and corners.",
    "Check buttons, links, and focus states.",
    "Update images, title, icon, and navigation.",
    "Check a narrow screen and dark mode.",
  ];
  return (
    <div className="space-y-6">
      <Button
        variant="outline"
        aria-pressed={styled}
        onClick={function compareStyle() {
          setStyled(!styled);
        }}
      >
        Compare the app makeover
      </Button>
      <section
        className={
          styled
            ? "overflow-hidden rounded-2xl border bg-sky-50 font-sans text-sky-950"
            : "border bg-white font-mono text-black"
        }
      >
        <header
          className={
            styled
              ? "border-b border-sky-200 p-5 font-semibold"
              : "border-b p-2"
          }
        >
          Adventure Club
        </header>
        <article
          className={styled ? "max-w-xl space-y-5 p-7" : "space-y-1 p-2"}
        >
          <p
            className={
              styled
                ? "text-xs font-semibold tracking-widest uppercase"
                : "text-base"
            }
          >
            After school, together
          </p>
          <h2
            className={
              styled
                ? "text-3xl leading-tight font-semibold tracking-tight"
                : "text-base"
            }
          >
            Make time for something new.
          </h2>
          <p className={styled ? "leading-7" : "leading-4"}>
            Join a walk, make something, or meet people who share your
            interests.
          </p>
          <Link
            href="/brand/style-guide"
            className={buttonVariants({
              variant: styled ? "default" : "outline",
            })}
          >
            View our style guide
          </Link>
        </article>
      </section>
      <ul className="space-y-3">
        {checks.map(function showCheck(check) {
          return (
            <li key={check}>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={checked.includes(check)}
                  onChange={function toggleCheck(event) {
                    if (event.target.checked) {
                      setChecked([...checked, check]);
                    } else {
                      setChecked(
                        checked.filter(function keepOther(value) {
                          return value !== check;
                        }),
                      );
                    }
                  }}
                />
                <span>{check}</span>
              </label>
            </li>
          );
        })}
      </ul>
      <p role="status">
        {checked.length} of {checks.length} checks complete.
      </p>
    </div>
  );
}

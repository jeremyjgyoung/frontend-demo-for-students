"use client";
import { useState } from "react";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireDescription,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire";

// A local preview using the real component already in your template.
export function QuestionnairePreview() {
  const [message, setMessage] = useState("");
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setMessage("Thanks, " + data.get("name") + ".");
  }
  return (
    <div className="w-full space-y-3">
      <Questionnaire defaultItem="name" onSubmit={submit}>
        <QuestionnaireItem name="name" required>
          <QuestionnaireTitle>What is your name?</QuestionnaireTitle>
          <QuestionnaireDescription>
            A short form with one question.
          </QuestionnaireDescription>
          <QuestionnaireInput
            aria-label="Questionnaire name"
            placeholder="Your name"
          />
          <QuestionnaireActions>
            <QuestionnaireSubmit>Finish</QuestionnaireSubmit>
          </QuestionnaireActions>
        </QuestionnaireItem>
      </Questionnaire>
      <p role="status" className="text-xs text-muted-foreground">
        {message}
      </p>
    </div>
  );
}

import ClubPage from "./example/page";
import { ClubNote } from "./club-note";
export function LessonDemo() {
  return (
    <div className="space-y-5">
      <p className="text-sm leading-6 text-muted-foreground">
        This view imports the page as ClubPage, without braces. It also imports
        ClubNote, with braces.
      </p>
      <ClubPage />
      <ClubNote />
    </div>
  );
}

import { LessonSidebar } from "@/app/_components/sidebar";
import { topics } from "@/app/_lib/catalog";
export default function Layout({ children }) {
  const topic = topics.find(function findTopic(item) {
    return item.id === "performance";
  });
  return (
    <div className="mx-auto grid max-w-[96rem] gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[15rem_minmax(0,1fr)]">
      <LessonSidebar topic={topic} />
      <main id="main-content" className="min-w-0 pb-16">
        {children}
      </main>
    </div>
  );
}

import { Suspense } from "react";
import AreaComments from "./AreaComments";

export default function CommentsPage() {
  return (
    <main className="flex h-screen w-screen flex-col items-center gap-6 overflow-y-auto px-8 py-6 dark:bg-neutral-900 dark:text-slate-50">
      <h1 className="text-center text-4xl">Comments and Questions</h1>
      <p>Text to show what this is</p>
      <Suspense fallback={<h2>Loading...</h2>}>
        <AreaComments />
      </Suspense>
    </main>
  );
}

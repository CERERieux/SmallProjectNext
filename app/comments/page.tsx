import { Suspense } from "react";
import AreaComments from "./AreaComments";
import type { CommentPageProps } from "../lib/types";

export default function CommentsPage({ searchParams }: CommentPageProps) {
  const commentSearch = searchParams?.comment?.toLowerCase() || "";
  const answerSearch = searchParams?.answer?.toLowerCase() || "";
  const page = Number(searchParams?.page) || 1;

  return (
    <main className="relative flex h-screen w-screen flex-col items-center gap-6 overflow-y-auto px-8 py-6 dark:bg-neutral-900 dark:text-slate-50">
      <h1 className="text-center text-4xl">Comments and Questions</h1>
      <p>Text to show what this is</p>
      <Suspense fallback={<h2>Loading...</h2>}>
        <AreaComments
          commentSearch={commentSearch}
          answerSearch={answerSearch}
        />
      </Suspense>
    </main>
  );
}

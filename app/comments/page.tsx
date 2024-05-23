import { Suspense } from "react";
import AreaComments from "./AreaComments";
import type { CommentPageProps } from "../lib/types";
import SendComment from "./SendComment";

export default function CommentsPage({ searchParams }: CommentPageProps) {
  const commentSearch = searchParams?.comment?.toLowerCase() || "";
  const answerSearch = searchParams?.answer?.toLowerCase() || "";
  const authorSearch = searchParams?.author?.toLowerCase() || "";
  const page = Number(searchParams?.page) || 1;

  return (
    <main className="relative flex h-screen w-screen flex-col items-center gap-4 overflow-y-auto px-8 py-6 dark:bg-neutral-900 dark:text-slate-50">
      <h1 className="text-center text-2xl text-sky-500 dark:text-lime-300">
        Comments and Questions
      </h1>
      <div className="flex w-full items-center justify-between">
        <p className="text-sm text-yellow-100">
          Hi and welcome! Here you can send me any question or comment you want
          to share with me :) <br />
          I&apos;ll try to reply when I&apos;m free! <br />
          (Only the comments I replied to will appear below <s>just in case</s>)
        </p>
        <SendComment />
      </div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <AreaComments
          commentSearch={commentSearch}
          answerSearch={answerSearch}
          authorSearch={authorSearch}
          page={page}
        />
      </Suspense>
    </main>
  );
}

import { Suspense } from "react";
import AreaComments from "./AreaComments";
import type { CommentPageProps } from "../lib/types";
import SendComment from "./SendComment";
import { ToastContainer } from "react-toastify";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comments and Questions",
  description:
    "A place where you can send me something that you want to share with me through text.",
};

export default function CommentsPage({ searchParams }: CommentPageProps) {
  const commentSearch = searchParams?.comment?.toLowerCase() || "";
  const answerSearch = searchParams?.answer?.toLowerCase() || "";
  const authorSearch = searchParams?.author?.toLowerCase() || "";
  const page = Number(searchParams?.page) || 1;

  return (
    <main className="relative flex h-screen w-screen flex-col items-center gap-4 overflow-y-auto px-8 py-6 dark:bg-black/70 dark:text-slate-50">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-black"></div>
      <h1 className="text-center text-2xl text-sky-500 dark:text-lime-300">
        Comments and Questions
      </h1>
      <div className="flex w-full items-center justify-around">
        <p className="text-sm dark:text-yellow-100">
          Hi and welcome! Here you can send me anything you want to share with
          me, a question, comments, <s>a bug you found in this webpage</s> :){" "}
          <br />
          I&apos;ll try to read it and reply when I&apos;m free! <br />
          (Only the comments I replied to will appear below, but I can read all
          that is sent)
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
      <ToastContainer />
    </main>
  );
}

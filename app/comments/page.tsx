import { Suspense } from "react";
import { Metadata } from "next";
import { redHatDisplay } from "../ui/fonts";
import { ToastContainer } from "react-toastify";
import AreaComments from "./AreaComments";
import SendComment from "./SendComment";
import GalleryButton from "../ui/GalleryButton";
import HomeButton from "../ui/HomeButton";
import type { CommentPageProps } from "../lib/types";

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
    <main
      className={`relative flex h-screen w-screen flex-col items-center gap-4 overflow-y-auto px-8 py-6 dark:bg-black/70 dark:text-slate-50 ${redHatDisplay.className}`}
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-black"></div>
      <div className="absolute left-4 top-4 flex items-center gap-4">
        <HomeButton isMini position="top-0 left-4" />
        <GalleryButton isMini position="top-0 left-20" />
      </div>
      <h1 className="text-center text-2xl text-sky-500 dark:text-lime-300">
        Comments and Questions
      </h1>
      <div className="flex w-full items-center justify-center">
        <p className="w-[800px] text-sm dark:text-yellow-100">
          Here you can send me anything you want to share with me, a question,
          comments,{" "}
          <span className="line-through">a bug you found in this webpage</span>{" "}
          :) <br />
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

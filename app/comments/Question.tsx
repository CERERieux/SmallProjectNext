import type { QuestionProps } from "../lib/types";

export default function Question({
  question,
  answer = "",
  author,
}: QuestionProps) {
  return (
    <>
      <button className="btnOpenDialog flex h-20 w-72 flex-col justify-center gap-4 overflow-hidden rounded-2xl bg-slate-50 px-6 text-sm text-black">
        <h3 className="h-5 w-52 overflow-hidden overflow-ellipsis whitespace-pre-wrap text-start">
          Q: {question} {`By - ${author}`}
        </h3>
        <p className="h-5 w-52 overflow-hidden overflow-ellipsis whitespace-pre-wrap text-left">
          A: {answer}
        </p>
      </button>
    </>
  );
}

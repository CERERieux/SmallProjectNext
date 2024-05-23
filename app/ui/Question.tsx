import type { QuestionProps } from "../lib/types";

export default function Question({ question, answer = "" }: QuestionProps) {
  const questionShort =
    question.length > 28 ? question.slice(0, 28) + "..." : question;
  const answerShort = answer.length > 28 ? answer.slice(0, 28) + "..." : answer;
  return (
    <>
      <button className="btnOpenDialog flex h-20 w-72 flex-col justify-center gap-4 overflow-hidden rounded-2xl bg-slate-50 px-6 text-sm text-black">
        <h3 className="h-5 w-52 overflow-hidden overflow-ellipsis whitespace-pre-wrap text-start">
          Q: {question}
        </h3>
        <p className="h-5 w-52 overflow-hidden overflow-ellipsis whitespace-pre-wrap">
          A: {answer}
        </p>
      </button>
    </>
  );
}

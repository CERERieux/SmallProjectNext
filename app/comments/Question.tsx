import type { QuestionProps } from "../lib/types";

const QUESTION_COLOR = [
  "[background:_linear-gradient(205deg,rgba(252,165,165,.8),rgba(252,165,165,0)_30%),rgba(0,0,0,.05)_100%] dark:[background:_linear-gradient(205deg,rgba(252,165,165,.8),rgba(252,165,165,0)_30%),rgba(255,255,255,.15)_100%] border border-red-300 shadow-red-800/30 dark:shadow-red-100/30",
  "[background:_linear-gradient(205deg,rgba(252,211,77,.8),rgba(252,211,77,0)_30%),rgba(0,0,0,.05)_100%] dark:[background:_linear-gradient(205deg,rgba(252,211,77,.8),rgba(252,211,77,0)_30%),rgba(255,255,255,.15)_100%] border border-amber-300 shadow-amber-800/30 dark:shadow-amber-100/30",
  "[background:_linear-gradient(205deg,rgba(103,232,249,.8),rgba(103,232,249,0)_30%),rgba(0,0,0,.05)_100%] dark:[background:_linear-gradient(205deg,rgba(103,232,249,.8),rgba(103,232,249,0)_30%),rgba(255,255,255,.15)_100%] border border-cyan-300 shadow-cyan-800/30 dark:shadow-cyan-100/30",
  "[background:_linear-gradient(205deg,rgba(110,231,183,.8),rgba(110,231,183,0)_30%),rgba(0,0,0,.05)_100%] dark:[background:_linear-gradient(205deg,rgba(110,231,183,.8),rgba(110,231,183,0)_30%),rgba(255,255,255,.15)_100%] border border-emerald-300 shadow-emerald-800/30 dark:shadow-emerald-100/30",
  "[background:_linear-gradient(205deg,rgba(249,168,212,.8),rgba(249,168,212,0)_30%),rgba(0,0,0,.05)_100%] dark:[background:_linear-gradient(205deg,rgba(249,168,212,.8),rgba(249,168,212,0)_30%),rgba(255,255,255,.15)_100%] border border-pink-300 shadow-pink-800/30 dark:shadow-pink-100/30",
  "[background:_linear-gradient(205deg,rgba(190,242,100,.8),rgba(190,242,100,0)_30%),rgba(0,0,0,.05)_100%] dark:[background:_linear-gradient(205deg,rgba(190,242,100,.8),rgba(190,242,100,0)_30%),rgba(255,255,255,.15)_100%] border border-lime-300 shadow-lime-800/30 dark:shadow-lime-100/30",
  "[background:_linear-gradient(205deg,rgba(196,181,253,.8),rgba(196,181,253,0)_30%),rgba(0,0,0,.05)_100%] dark:[background:_linear-gradient(205deg,rgba(255,255,255,.6),rgba(255,255,255,0)_30%),rgba(255,255,255,.15)_100%] border border-slate-300 shadow-slate-800/30 dark:shadow-slate-100/30",
  "[background:_linear-gradient(205deg,rgba(165,180,252,.8),rgba(165,180,252,0)_30%),rgba(0,0,0,.05)_100%] dark:[background:_linear-gradient(205deg,rgba(165,180,252,.8),rgba(165,180,252,0)_30%),rgba(255,255,255,.15)_100%] border border-indigo-300 shadow-indigo-800/30 dark:shadow-indigo-100/30",
  "[background:_linear-gradient(205deg,rgba(196,181,165,.8),rgba(196,181,165,0)_30%),rgba(0,0,0,.05)_100%] dark:[background:_linear-gradient(205deg,rgba(196,181,165,.8),rgba(196,181,165,0)_30%),rgba(255,255,255,.15)_100%] border border-[#ab9d8e] shadow-[#6e655c]/30 dark:[#dbcab8]/30",
];

export default function Question({
  question,
  answer = "",
  author,
  color,
}: QuestionProps) {
  // const colorStyle = QUESTION_COLOR[Math.floor(Math.random() * 9)];
  const colorStyle = QUESTION_COLOR[color];
  return (
    <>
      <button
        className={`btnOpenDialog flex h-20 w-72 flex-col justify-center gap-4 overflow-hidden rounded-2xl px-6 text-sm text-black ${colorStyle} shadow-md dark:text-white`}
      >
        <h3 className="h-5 w-52 overflow-hidden overflow-ellipsis whitespace-pre-wrap text-start">
          Q: {question} {`\nBy - ${author}`}
        </h3>
        <p className="h-5 w-52 overflow-hidden overflow-ellipsis whitespace-pre-wrap text-left">
          A: {answer}
        </p>
      </button>
    </>
  );
}

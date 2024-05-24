import { OpacityState } from "../lib/types";
import FilterCommentForm from "./FilterCommentsForm";
import CloseButton from "../ui/CloseButton";

interface FilterProps {
  opacity: OpacityState;
  handleOpacity: () => void;
}

export default function FilterComments({
  opacity,
  handleOpacity,
}: FilterProps) {
  return (
    <aside
      className={`${opacity} absolute right-0 top-0 h-full w-[400px] bg-gradient-to-b from-black/70 from-30% to-sky-700/50 backdrop-blur-sm transition-all duration-500 dark:to-sky-700/50`}
    >
      <section className="relative flex h-full w-full flex-col items-center gap-8 px-6 py-5  text-slate-50">
        <h3 className="text-xl first-letter:text-2xl first-letter:text-sky-300">
          Filter
        </h3>
        <CloseButton onClick={handleOpacity} />
        <FilterCommentForm />
      </section>
    </aside>
  );
}

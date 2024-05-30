import { dosis, redHatDisplay, shadowIntoLight } from "../ui/fonts";

interface AsideContainterProps {
  description: string;
}

export default function AsideContainer({ description }: AsideContainterProps) {
  return (
    <aside className="flex h-screen w-1/4 flex-col gap-4 overflow-y-auto border-l-2 border-lime-500 bg-gradient-to-bl from-stone-100 from-70% to-lime-200 px-4 py-2 dark:border-sky-600 dark:bg-gradient-to-b dark:from-stone-900 dark:from-30% dark:to-sky-950 dark:text-stone-50">
      <h1
        className={`text-center text-2xl ${shadowIntoLight.className} text-blue-400 dark:text-amber-300`}
      >
        Drawing gallery
      </h1>
      <p className={`whitespace-pre-wrap ${redHatDisplay.className}`}>
        {description}
      </p>
    </aside>
  );
}

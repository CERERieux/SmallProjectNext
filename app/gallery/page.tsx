import { Metadata } from "next";
import CarrouselContainer from "./CarrouselContainer";
import CommentsButton from "../ui/CommentsButton";
import HomeButton from "../ui/HomeButton";

export const metadata: Metadata = {
  title: "Draw Gallery",
  description:
    "You can see some of my drawings while I keep thinking if I should show them or not.",
};

export default function GalleryPage() {
  return (
    <main className="relative flex w-screen items-center overflow-hidden bg-gradient-to-b from-sky-300/10 text-sky-950 dark:bg-stone-900/85 dark:text-slate-100">
      <div className="absolute inset-0 -left-[80%] -top-[300%] -z-10 h-[7000px] w-[7000px] rotate-45 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-stone-900"></div>
      <div className="absolute -left-2 top-4 flex h-4 w-full items-center gap-4 sm:left-4 sm:top-4">
        <HomeButton isMini position="top-0 left-4" />
        <CommentsButton isMini position="top-0 sm:right-10 right-0" />
      </div>
      <CarrouselContainer />
    </main>
  );
}

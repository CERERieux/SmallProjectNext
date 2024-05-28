import { Metadata } from "next";
import CarrouselContainer from "./CarrouselContainer";

export const metadata: Metadata = {
  title: "Draw Gallery",
  description:
    "You can see some of my drawings while I keep thinking if I should show them or not.",
};

export default function GalleryPage() {
  return (
    <main className="relative flex w-screen items-center overflow-hidden bg-gradient-to-b from-sky-300/10 text-sky-950 dark:bg-stone-900/85 dark:text-slate-100">
      <div className="absolute inset-0 -left-[50%] -top-[80%] -z-10 h-[3000px] w-[3000px] rotate-45 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-stone-900"></div>
      <CarrouselContainer />
    </main>
  );
}

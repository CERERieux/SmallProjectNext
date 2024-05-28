import { Metadata } from "next";
import CarrouselContainer from "./CarrouselContainer";

export const metadata: Metadata = {
  title: "Draw Gallery",
  description:
    "You can see some of my drawings while I keep thinking if I should show them or not.",
};

export default function GalleryPage() {
  return (
    <main className="flex w-screen items-center">
      <CarrouselContainer />
    </main>
  );
}

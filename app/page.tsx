import Image from "next/image";
import { Metadata } from "next";
import TabsInfo from "./TabsInfo";

export const metadata: Metadata = {
  title: "Welcome to my page!",
  description: "A site I made to learn Next.js where I share some stuff!",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <TabsInfo />
    </main>
  );
}

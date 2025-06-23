"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeaderApp() {
  const [opacityHeader, setOpacityHeader] = useState(
    "opacity-0 -translate-x-10",
  );

  useEffect(() => {
    setOpacityHeader("opacity-100 translate-x-0");
  }, []);

  return (
    <header
      className={`flex gap-4 sm:w-[700] sm:flex-row ${opacityHeader} flex-col items-center justify-center px-6 py-4 transition-all duration-700`}
      id="topMainPage"
    >
      <Image
        src={`/kanadeHi.png`}
        alt="Yoisaki Kanade waving at you."
        width={300}
        height={424}
        className="order-1 sm:-order-1"
      />
      <section className="rounded-md bg-white/50 px-6 py-4 dark:bg-transparent/70 dark:backdrop-blur-sm">
        <h1 className="text-4xl first-letter:text-lime-500">
          Welcome to my personal site!
        </h1>
        <h2 className="mt-4 text-2xl text-amber-600 dark:text-yellow-200">
          Rieux - Mexico
        </h2>
        <p className="text-cyan-600 dark:text-cyan-200">English/Español - 27</p>
      </section>
    </header>
  );
}

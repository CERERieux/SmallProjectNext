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
      className={`flex w-[700] gap-4 ${opacityHeader} items-center justify-center px-6 py-4 transition-all duration-700`}
    >
      <Image
        src={`/kanadeHi.png`}
        alt="Yoisaki Kanade waving at you."
        width={300}
        height={424}
      />
      <section className="rounded-md bg-white/50 px-6 py-4 dark:bg-transparent/70 dark:backdrop-blur-sm">
        <h1 className="text-2xl">Welcome to my personal webpage!</h1>
        <h2 className="text-lg">Rieux - 26</h2>
        <p>Mexico, English/Español Ok</p>
      </section>
    </header>
  );
}

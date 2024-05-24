"use client";
import { useState } from "react";
import FilterComments from "./FilterComments";
import { FunnelIcon } from "@heroicons/react/24/solid";
import Button from "../ui/Button";
import { OpacityState } from "../lib/types";

export default function AsideComments() {
  const [opacity, setOpacity] = useState<OpacityState>("opacity-0 -z-10");
  const handleOpacity = () => {
    if (opacity.includes("opacity-0")) setOpacity("opacity-100 z-30");
    else setOpacity("opacity-0 -z-10");
  };
  return (
    <>
      <div className="absolute right-[11.5rem] top-[7.75rem]">
        <Button
          onClick={handleOpacity}
          color="bg-slate-200 text-sky-600 hover:bg-sky-600 hover:text-slate-50 border-none dark:bg-slate-50"
          extraStyles="text-sm flex gap-2 justify-center items-center dark:disabled:bg-slate-300 active:scale-95 hover:scale-105"
          xSize="w-28"
          disabled={opacity === "opacity-100 z-30"}
        >
          <FunnelIcon className="w-5" /> Filter
        </Button>
      </div>
      <FilterComments handleOpacity={handleOpacity} opacity={opacity} />
    </>
  );
}

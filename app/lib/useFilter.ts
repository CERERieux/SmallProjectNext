"use client";
import { create } from "zustand";

interface FilterOpacity {
  opacity: "opacity-0 -z-10" | "opacity-100 z-30";
  setOpacity: () => void;
}

export const useFilter = create<FilterOpacity>((set, get) => ({
  opacity: "opacity-0 -z-10",
  setOpacity: () => {
    const { opacity } = get();
    if (opacity.includes("opacity-0")) set({ opacity: "opacity-100 z-30" });
    else set({ opacity: "opacity-0 -z-10" });
  },
}));

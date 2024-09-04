"use client";
import FilterComments from "./FilterComments";
import { useFilter } from "../lib/useFilter";

export default function AsideComments() {
  const { opacity, setOpacity } = useFilter();
  return (
    <>
      <FilterComments handleOpacity={setOpacity} opacity={opacity} />
    </>
  );
}

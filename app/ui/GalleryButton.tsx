import Link from "next/link";
import Button from "./Button";
import { PaintBrushIcon } from "@heroicons/react/24/outline";
import ActionButton from "./ActionButton";

interface GalleryButtonProps {
  isMini?: boolean;
  position?: string;
}

export default function GalleryButton({
  isMini,
  position = "top-0 left-0",
}: GalleryButtonProps) {
  return !isMini ? (
    <Link href={"/gallery"}>
      <Button
        color="bg-stone-400 hover:bg-slate-600 border-none dark:bg-stone-600 dark:hover:bg-sky-600"
        extraStyles="flex items-center justify-center gap-4 text-lg"
        xSize="w-40"
      >
        <PaintBrushIcon className="w-6" />
        Gallery
      </Button>
    </Link>
  ) : (
    <Link href={"/gallery"}>
      <ActionButton
        coverColor="bg-stone-400 dark:bg-stone-600 p-2 hover:text-white"
        hoverColor="hover:bg-slate-600 dark:hover:bg-sky-600"
        groupName={["group/gallery", "group-hover/gallery:block"]}
        position={position}
        tooltipText="Gallery"
        tooltipPos="left-0 -bottom-5"
      >
        <PaintBrushIcon className="w-7" />
      </ActionButton>
    </Link>
  );
}

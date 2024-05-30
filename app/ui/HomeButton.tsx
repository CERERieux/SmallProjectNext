import Link from "next/link";
import Button from "./Button";
import { HomeIcon } from "@heroicons/react/24/outline";
import ActionButton from "./ActionButton";

interface HomeButtonProps {
  isMini?: boolean;
  position?: string;
}

export default function HomeButton({
  isMini = false,
  position = "top-0 left-0",
}: HomeButtonProps) {
  return !isMini ? (
    <Link href={"/"}>
      <Button
        color="bg-lime-400 border-none dark:bg-white dark:text-black hover:bg-amber-600 dark:hover:bg-lime-800"
        extraStyles="flex items-center justify-center gap-4 text-lg"
        xSize="w-40"
      >
        <HomeIcon className="w-6" />
        Home
      </Button>
    </Link>
  ) : (
    <Link href={"/"}>
      <ActionButton
        coverColor="bg-lime-400 dark:text-black dark:bg-white p-2"
        hoverColor="hover:bg-sky-300 dark:hover:bg-lime-800"
        groupName={["group/home", "group-hover/home:block"]}
        position={position}
        tooltipText="Home"
        tooltipPos="left-1 -bottom-5"
      >
        <HomeIcon className="w-7" />
      </ActionButton>
    </Link>
  );
}

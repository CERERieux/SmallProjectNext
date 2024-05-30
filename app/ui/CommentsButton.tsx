import Link from "next/link";
import Button from "./Button";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import ActionButton from "./ActionButton";

interface CommentsButtonProps {
  isMini?: boolean;
  position?: string;
}

export default function CommentsButton({
  isMini = false,
  position = "top-0 left-0",
}: CommentsButtonProps) {
  return !isMini ? (
    <Link href={"/comments"}>
      <Button
        color="bg-pink-400 border-none dark:bg-purple-600 hover:bg-amber-600"
        extraStyles="flex items-center justify-center gap-4 text-lg"
        xSize="w-40"
      >
        <ChatBubbleBottomCenterIcon className="w-6" />
        Comments
      </Button>
    </Link>
  ) : (
    <Link href={"/comments"}>
      <ActionButton
        coverColor="bg-pink-400 dark:bg-purple-600 p-2"
        hoverColor="hover:bg-amber-600"
        groupName={["group/comments", "group-hover/comments:block"]}
        position={position}
        tooltipText="Comments"
        tooltipPos="-left-2 -bottom-5"
      >
        <ChatBubbleBottomCenterIcon className="w-7" />
      </ActionButton>
    </Link>
  );
}

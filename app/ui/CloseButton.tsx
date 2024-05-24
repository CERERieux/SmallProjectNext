import { XMarkIcon } from "@heroicons/react/24/solid";

interface CloseBtnProps {
  id?: string;
  onClick?: () => void;
  textColor?: string;
}

export default function CloseButton({
  id,
  onClick,
  textColor = "text-white",
}: CloseBtnProps) {
  return (
    <button
      className={`absolute left-4 top-4 flex size-8 items-center justify-center rounded-full ${textColor} transition-all hover:scale-110 hover:bg-red-500 active:scale-95 active:bg-white active:text-black`}
      id={id}
      onClick={onClick}
    >
      <XMarkIcon className="w-6" />
    </button>
  );
}

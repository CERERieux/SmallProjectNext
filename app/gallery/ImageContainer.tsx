import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface ImageData {
  imgName: string;
  alt: string;
  width: number;
  height: number;
}
interface ImageContainerProps {
  data: ImageData;
  handleCarrousel: (numberToAdd: number) => void;
}

export default function ImageContainer({
  data,
  handleCarrousel,
}: ImageContainerProps) {
  return (
    <div className="relative flex h-screen w-3/4 items-center justify-center bg-black/85 shadow-lg shadow-lime-600 dark:shadow-xl dark:shadow-sky-900">
      <Image
        src={`/${data.imgName}`}
        alt={data.alt}
        width={data.width}
        height={data.height}
        className={`max-h-full max-w-full object-contain`}
      />
      <button
        onClick={() => {
          handleCarrousel(1);
        }}
        className="absolute right-5 z-20 my-auto flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all hover:scale-105 hover:bg-sky-600 active:bg-white active:text-black"
      >
        <ArrowRightIcon className="w-7" />
      </button>
      <button
        onClick={() => {
          handleCarrousel(-1);
        }}
        className="absolute left-5 z-20 my-auto flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all hover:scale-105 hover:bg-sky-600 active:bg-white active:text-black"
      >
        <ArrowLeftIcon className="w-7" />
      </button>
    </div>
  );
}

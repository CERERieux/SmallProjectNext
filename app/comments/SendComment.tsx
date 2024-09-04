"use client";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import Button from "../ui/Button";
import Dialog from "../ui/Dialog";
import TitleForm from "../ui/TitleForm";
import FormSendComment from "./FormSendComment";
import CloseButton from "../ui/CloseButton";
import { FunnelIcon } from "@heroicons/react/24/solid";
import { useFilter } from "../lib/useFilter";

export default function SendComment() {
  const idOpen = "OpenDialogSendComment";
  const idClose = "CloseDialogSendComment";
  const idDialog = "DialogSendComment";
  const { opacity, setOpacity } = useFilter();
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-4 md:flex-col md:items-start">
        <Button
          color="border-none text-sky-950 bg-sky-200 hover:bg-slate-900 dark:bg-lime-600 dark:text-white dark:hover:bg-slate-50 dark:hover:text-black"
          extraStyles="flex gap-4 justify-center items-center hover:scale-105"
          id={idOpen}
          xSize="mr-2 w-52"
        >
          <ChatBubbleLeftEllipsisIcon className="w-6" />
          Send Comment
        </Button>
        <Button
          onClick={setOpacity}
          color="bg-slate-200 text-sky-600 hover:bg-sky-600 hover:text-slate-50 border-none dark:bg-slate-50"
          extraStyles="text-sm flex gap-2 justify-center items-center dark:disabled:bg-slate-300 active:scale-95 hover:scale-105"
          xSize="w-28"
          disabled={opacity === "opacity-100 z-30"}
        >
          <FunnelIcon className="w-5" /> Filter
        </Button>
      </div>
      <Dialog
        colorBg="purpleBlack"
        idClose={idClose}
        idDialog={idDialog}
        idOpen={idOpen}
      >
        <article className="flex h-full md:w-[600px] flex-col items-center gap-8 px-6 py-4">
          <TitleForm firstColor="dark:first-letter:text-purple-300 first-letter:text-purple-500">
            Send your comment!
          </TitleForm>
          <FormSendComment idDialog={idDialog} />
          <p className="-mt-4 whitespace-pre-wrap text-xs text-sky-700 dark:text-blue-200">
            If you want to send an Anonymous message, just leave the Author
            field empty :){"\n"}
            And I&apos;m the only want that can delete comments sent!
          </p>
        </article>
        <CloseButton id={idClose} textColor="text-black dark:text-white" />
      </Dialog>
    </>
  );
}

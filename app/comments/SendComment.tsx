import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import Button from "../ui/Button";
import Dialog from "../ui/Dialog";
import TitleForm from "../ui/TitleForm";
import FormSendComment from "./FormSendComment";
import CloseButton from "../ui/CloseButton";

export default function SendComment() {
  const idOpen = "OpenDialogSendComment";
  const idClose = "CloseDialogSendComment";
  const idDialog = "DialogSendComment";
  return (
    <>
      <Button
        color="border-none dark:hover:bg-lime-600 dark:text-white hover:bg-slate-900"
        extraStyles="flex gap-4 justify-center items-center hover:scale-105"
        id={idOpen}
        xSize="w-52 mr-12 mb-8"
      >
        <ChatBubbleLeftEllipsisIcon className="w-6" />
        Send Comment
      </Button>
      <Dialog
        colorBg="purpleBlack"
        idClose={idClose}
        idDialog={idDialog}
        idOpen={idOpen}
      >
        <article className="flex h-full w-[600px] flex-col items-center gap-8 px-6 py-4">
          <TitleForm firstColor="dark:first-letter:text-purple-300 first-letter:text-purple-500">
            Send your comment!
          </TitleForm>
          <FormSendComment idDialog={idDialog} />
          <p className="text-xs text-sky-700 dark:text-blue-200">
            If you want to send an Anonymous message, just leave the Author
            field empty :)
          </p>
        </article>
        <CloseButton id={idClose} textColor="text-black dark:text-white" />
      </Dialog>
    </>
  );
}

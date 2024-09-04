"use client";
import Form from "../ui/Form";
import LabelForm from "../ui/LabelForm";
import TitleInput from "../ui/TitleInput";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useEffect, useState } from "react";
import { createComment } from "../lib/actionServers";
import { useFormState, useFormStatus } from "react-dom";
import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

interface FormSendCommentProps {
  idDialog: string;
}

export default function FormSendComment({ idDialog }: FormSendCommentProps) {
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");
  const [colsComment, setColComments] = useState(55);
  const [state, formAction] = useFormState(createComment, {
    error: null,
    message: "",
  });
  const { pending } = useFormStatus();

  useEffect(() => {
    if (window.innerWidth < 600) setColComments(30);
  }, []);

  useEffect(() => {
    if (state.error === null && state.message !== "") {
      const dialog = document.getElementById(idDialog) as HTMLDialogElement;
      dialog.close();
      toast.success(`${state.message}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });
    } else if (state.message !== "") {
      const message: Object = state.message.valueOf();
      if ("author" in message) {
        const [author] = message.author as string[];
        toast.error(`${author}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        });
      }
      if ("comment" in message) {
        const [commentUser] = message.comment as string[];
        toast.error(`${commentUser}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        });
      }
    }
  }, [state]);

  const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };
  const handleAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  return (
    <>
      <Form style="items-center justify-around gap-6" action={formAction}>
        <LabelForm style="relative items-center justify-center mt-4">
          <TitleInput
            firstColor="text-left absolute -top-8 left-0 dark:first-letter:text-purple-300 first-letter:text-purple-500"
            required
          >
            Comment
          </TitleInput>
          <TextArea
            cols={colsComment}
            lineStyle={false}
            name="commentContent"
            onChange={handleComment}
            rows={10}
            value={comment}
            required
            max={500}
            placeHolder="Write your comment here."
            extraStyles="dark:bg-slate-600/60 border-none shadow-inner shadow-black/50 backdrop-blur-sm"
            newCycle
          />
        </LabelForm>
        <LabelForm style="items-center justify-start mr-14 mb-4">
          <TitleInput firstColor="dark:first-letter:text-purple-300 first-letter:text-purple-500">
            Author
          </TitleInput>
          <Input
            lineStyle
            name="authorComment"
            onChange={handleAuthor}
            type="text"
            value={author}
            extraStyles="text-sm"
            autoComplete="off"
            max={50}
          />
        </LabelForm>
        <Button
          color="bg-purple-300 hover:bg-purple-600 border-purple-400 hover:text-purple-100 text-black"
          extraStyles="-mt-2"
          xSize="w-32"
          disabled={pending}
        >
          Send!
        </Button>
      </Form>
    </>
  );
}

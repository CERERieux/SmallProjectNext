"use client";
import { updateComment } from "@/app/lib/actionServers";
import type { Comments } from "@/app/lib/types";
import Button from "@/app/ui/Button";
import Form from "@/app/ui/Form";
import TextArea from "@/app/ui/TextArea";
import TitleInput from "@/app/ui/TitleInput";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

interface CommentInfoProps {
  id: string;
  comment: Comments;
}
export default function CommentInfo({ id, comment }: CommentInfoProps) {
  const { answer, author } = comment;
  const [answerArea, setAnswerArea] = useState("");
  const updateCommentAnswer = updateComment.bind(null, id);
  const [state, formAction] = useFormState(updateCommentAnswer, {
    error: null,
    message: "",
  });

  useEffect(() => {
    if (answer !== null) setAnswerArea(answer);
  }, []);

  useEffect(() => {
    if (state.error === null && state.message !== "") {
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
    }
    /** TODO Toasty for errors */
  }, [state]);

  const handleAnswer = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswerArea(e.target.value);
  };

  return (
    <article className="flex h-full w-[1000px] flex-col gap-8 px-6 py-8 dark:bg-transparent/40 dark:text-white dark:backdrop-blur-sm">
      <h1 className="text-xl first-letter:text-blue-500 dark:first-letter:text-blue-300">
        {comment.comment}
      </h1>
      <p className="-mt-4 text-xs text-lime-600 dark:text-lime-300">
        By: {author}
      </p>
      <Form
        style="items-start justify-start gap-4"
        textPos="[&_span]:text-left"
        action={formAction}
      >
        <TitleInput firstColor="pl-4 dark:first-letter:text-blue-300 first-letter:text-blue-500">
          My answer
        </TitleInput>
        <TextArea
          cols={110}
          rows={15}
          name="AnswerPersonComment"
          onChange={handleAnswer}
          lineStyle={false}
          autoComplete="off"
          value={answerArea}
          extraStyles="ml-4 bg-transparent/5 dark:bg-transparent/50 dark:text-slate-100 text-sm"
        />
        <Button
          color="hover:bg-black bg-blue-600 text-blue-100 border-none"
          extraStyles="self-center dark:hover:bg-white dark:hover:text-black"
          xSize="w-1/3"
        >
          Update
        </Button>
      </Form>
    </article>
  );
}

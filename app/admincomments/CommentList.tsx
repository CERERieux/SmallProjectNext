"use client";

import { useEffect, useState } from "react";
import type { Comments } from "../lib/types";
import Link from "next/link";
import Button from "../ui/Button";
import ActionButton from "../ui/ActionButton";
import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteComment } from "../lib/actionServers";
import { Flip, toast } from "react-toastify";

interface CommentsProps {
  comments: Comments[];
}
interface ResultDeleteState {
  error: null | unknown;
  message: string;
}

export default function CommentList({ comments }: CommentsProps) {
  const [noAnswer, setNoAnswer] = useState(true);
  const [filteredComments, setFilteredComments] = useState<Comments[]>([]);
  const [resultDelete, setResultDelete] = useState<ResultDeleteState>({
    error: null,
    message: "",
  });

  useEffect(() => {
    const filtered = comments.filter(comment => {
      if (noAnswer) return comment.answer === null;
      else return comment.answer !== null;
    });
    setFilteredComments(filtered);
  }, [noAnswer, comments]);

  useEffect(() => {
    if (resultDelete.error === null && resultDelete.message !== "") {
      toast.success(`${resultDelete.message}`, {
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
    } else if (resultDelete.message !== "") {
      toast.error(`${resultDelete.message}`, {
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
  }, [resultDelete]);

  const handleNoAnswer = () => {
    setNoAnswer(!noAnswer);
  };

  const handleDelete = (id: string) => {
    const deleteUserComment = deleteComment.bind(null, id);
    deleteUserComment().then(result => {
      setResultDelete(result);
    });
  };

  return (
    <>
      <Button
        color="bg-lime-300 hover:bg-amber-600 border-lime-400 hover:border-amber-400"
        onClick={handleNoAnswer}
        extraStyles="absolute -top-[4.25rem] right-52"
        xSize="w-32"
      >
        {noAnswer ? "No Answer" : "With Answer"}
      </Button>
      {filteredComments.length > 0 ? (
        filteredComments.map(comment => {
          const { id, author } = comment;
          return (
            <section
              key={id}
              className="relative flex w-full flex-col gap-2 rounded-lg border border-white/50 bg-gradient-to-b from-white/70 to-transparent/60 to-15% px-6 py-2 pr-12 text-slate-50"
            >
              <Link
                href={`/admincomments/${id}`}
                className="text-lime-300 underline"
              >
                <h3>{comment.comment}</h3>
              </Link>
              <p className="text-sm">By: {author}</p>
              <ActionButton
                coverColor="bg-slate-200 shadow-slate-100 dark:text-slate-700"
                hoverColor="hover:bg-red-400 hover:shadow-red-400/30 hover:text-white"
                groupName={["group/delete", "group-hover/delete:block"]}
                position="top-4 right-4"
                tooltipText="Delete comment"
                tooltipPos="-left-3 -bottom-9"
                onClick={() => handleDelete(id)}
              >
                <TrashIcon className="w-5" />
              </ActionButton>
            </section>
          );
        })
      ) : (
        <section className="flex w-full flex-col gap-2 rounded-lg border border-white/50 bg-gradient-to-b from-white/70 to-transparent/60 to-15% px-6 py-2 text-slate-50">
          <h3>There is no questions available</h3>
        </section>
      )}
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import Button from "../ui/Button";

// Colors for the backdrop of the modal
const COLOR_BACK = [
  "backdrop:from-white/50 backdrop:to-lime-900/50",
  "backdrop:from-black/50 backdrop:to-lime-200/50",
  "backdrop:from-white/50 backdrop:to-sky-900/50",
  "backdrop:from-black/50 backdrop:to-sky-200/50",
  "backdrop:from-white/50 backdrop:to-amber-900/50",
  "backdrop:from-black/50 backdrop:to-amber-200/50",
  "backdrop:from-white/50 backdrop:to-red-900/50",
  "backdrop:from-black/50 backdrop:to-red-300/50",
];

interface DialogProps {
  children: React.ReactNode;
  extraStyles?: string;
}

/** Function that open a dialog element */
const handleOpenModal = (dialog: HTMLDialogElement) => {
  dialog.showModal();
};
/** Function that close a dialog element with a button */
const handleCloseModalBtn = (dialog: HTMLDialogElement) => {
  dialog.close();
};
/** Function that close a dialog element with a click outside the modal space */
const handleCloseModalOutside = (dialog: HTMLDialogElement, e: MouseEvent) => {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close();
  }
};

export default function DialogQuestionGroup({
  children,
  extraStyles,
}: DialogProps) {
  const idDialog = "CommentAnswerDialog";
  const idClose = "CloseCommentAnswerDialog";
  const [myAnswer, setMyAnswer] = useState("");
  const [personQuestion, setPersonQuestion] = useState("");
  const [randomColor, setRandomColor] = useState(0);

  useEffect(() => {
    setRandomColor(Math.floor(Math.random() * 8));
  }, [personQuestion]);

  /** Effect that activates at the start to handle the dialog element */
  useEffect(() => {
    // Get the dialog, and the close button to close it
    const dialog = document.getElementById(idDialog) as HTMLDialogElement;
    const closeButton = document.getElementById(idClose) as HTMLButtonElement;
    // Since we need the buttons for the questions, get all of them
    const openButton = document.querySelectorAll(".btnOpenDialog");

    // If the dialog exist
    if (dialog != null) {
      // Add a listener to those 3 elements to do actions
      setRandomColor(Math.floor(Math.random() * 8));
      if (openButton.length > 0) {
        // If the question exist, then add a listener to it
        openButton.forEach(button => {
          const btn = button as HTMLButtonElement;
          const question = btn.children[0] as HTMLHeadingElement;
          const answer = btn.children[1] as HTMLParagraphElement;
          btn.addEventListener("click", () => {
            handleOpenModal(dialog);
            setPersonQuestion(question.innerText);
            setMyAnswer(answer.innerText);
          });
        });
      }
      closeButton.addEventListener("click", () => {
        handleCloseModalBtn(dialog);
      });
      dialog.addEventListener("click", e => {
        handleCloseModalOutside(dialog, e);
      });
      // And when unmount, remove the listener
      return () => {
        // Remove the listener to all the question buttons
        if (openButton.length > 0) {
          openButton.forEach(button => {
            const btn = button as HTMLButtonElement;
            const question = btn.children[0] as HTMLHeadingElement;
            const answer = btn.children[1] as HTMLParagraphElement;
            btn.removeEventListener("click", () => {
              handleOpenModal(dialog);
              setPersonQuestion(question.innerText);
              setMyAnswer(answer.innerText);
            });
            return null;
          });
        }
        closeButton.removeEventListener("click", () => {
          handleCloseModalBtn(dialog);
        });
        dialog.removeEventListener("click", e => {
          handleCloseModalOutside(dialog, e);
        });
      };
    }
  }, []);

  // Return the dialog element
  return (
    <>
      {children}
      <dialog
        id={idDialog}
        className={`rounded-xl bg-slate-50 px-6 py-4 shadow-lg shadow-black/40 backdrop:bg-gradient-to-b ${COLOR_BACK[randomColor]} focus:flex ${extraStyles} dark:bg-gray-800 dark:text-slate-200 [&_button]:text-black`}
      >
        <section className="flex h-full w-[800px] flex-col items-start justify-center gap-6 overflow-y-auto p-4">
          <h3
            className={`whitespace-pre-wrap text-sky-700 ${personQuestion.length > 250 ? "dark:text-[#dbf1ff]" : "dark:text-[#faffb0]"}`}
          >
            <b>{personQuestion.slice(3)}</b>
          </h3>
          <p className="whitespace-pre-wrap text-sm">{myAnswer.slice(3)}</p>
          <div className="flex w-full justify-center">
            <Button
              id={idClose}
              color="bg-lime-200 hover:bg-lime-600 border-lime-400"
              xSize="w-40"
              extraStyles="shadow-black shadow-sm"
            >
              Close
            </Button>
          </div>
        </section>
      </dialog>
    </>
  );
}

"use client";

import { useEffect } from "react";
import type { ErrorProps } from "@/app/lib/types";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error.message);
    toast.error(`${error.message}`, {
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
  }, [error]);

  return (
    <main className="absolute inset-0 -z-10 flex h-full w-full flex-col items-center justify-center overflow-y-auto bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-slate-900">
      <ToastContainer />
      <div className="flex w-[500px] flex-col items-center rounded-2xl bg-transparent/90 px-6 py-4">
        <h2 className="text-center text-xl dark:text-white">
          Something went wrong!
        </h2>
        <button
          className="mt-4 w-32 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
          onClick={
            // Attempt to recover by trying to re-render the invoices route
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </main>
  );
}

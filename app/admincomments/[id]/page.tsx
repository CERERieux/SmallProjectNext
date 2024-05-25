import { Suspense } from "react";
import CommentInfo from "./CommentInfo";
import { getCommentById } from "@/app/lib/services";
import { ToastContainer } from "react-toastify";

interface UpdateCommentsParams {
  params: { id: string };
}
export default async function PageUpdateComments({
  params,
}: UpdateCommentsParams) {
  const { id } = params;
  const comment = await getCommentById(id);

  return (
    <main className="absolute inset-0 -z-10 flex h-full w-full flex-col items-center justify-center overflow-y-auto bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-slate-900">
      {!("error" in comment) ? (
        <Suspense
          fallback={
            <h2 className="text-xl dark:text-white">Loading Comment...</h2>
          }
        >
          <CommentInfo id={id} comment={comment} />
        </Suspense>
      ) : (
        <section className=" flex h-full w-full items-center justify-center bg-transparent/50 text-white">
          <h4 className="text-center text-xl first-letter:text-red-500">
            Error: {comment.message}
          </h4>
        </section>
      )}
      <ToastContainer />
    </main>
  );
}

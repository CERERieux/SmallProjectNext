import { Suspense } from "react";
import CommentInfo from "./CommentInfo";
import { getCommentById } from "@/app/lib/services";
import { UUID } from "crypto";
import { ToastContainer } from "react-toastify";

interface UpdateCommentsParams {
  params: { id: string };
}
export default async function PageUpdateComments({
  params,
}: UpdateCommentsParams) {
  const { id } = params;
  const comment = await getCommentById(id);
  // const comment = {
  //   id: id as UUID,
  //   author: "fd",
  //   answer: null,
  //   comment: "Testing interface for question",
  // };
  return (
    <main className="absolute inset-0 -z-10 flex h-full w-full flex-col items-center justify-center overflow-y-auto bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-slate-900">
      {!("error" in comment) ? (
        <Suspense>
          <CommentInfo id={id} comment={comment} />
        </Suspense>
      ) : (
        <></>
      )}
      <ToastContainer />
    </main>
  );
}

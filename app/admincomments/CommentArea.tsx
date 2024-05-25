import { getAdminComments } from "../lib/services";
import { questionMock } from "../lib/mock";
import CommentList from "./CommentList";

export default async function CommentArea() {
  const comments = await getAdminComments();
  //   console.log(comments);
  //   const comments = questionMock;
  return (
    <article className="flex w-[1000px] flex-col items-center justify-center gap-4 bg-black/50 p-4 shadow-inner shadow-white/60 backdrop-blur-sm">
      {!("error" in comments) ? <CommentList comments={comments} /> : <></>}
    </article>
  );
}

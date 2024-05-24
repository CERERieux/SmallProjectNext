import Question from "./Question";
import DialogQuestionGroup from "./DialogQuestionGroup";
import AsideComments from "./AsideComments";
import { getComments, getCommentsPages } from "../lib/services";
import type { SearchProps } from "../lib/types";
import Pagination from "./Pagination";

export default async function AreaComments({
  answerSearch,
  commentSearch,
  authorSearch,
  page,
}: SearchProps) {
  const comments = await getComments({
    answerSearch,
    commentSearch,
    authorSearch,
    page,
  });
  const totalPages = await getCommentsPages({
    answerSearch,
    commentSearch,
    authorSearch,
    page,
  });

  return (
    <DialogQuestionGroup comments={comments}>
      <AsideComments />
      <article className="grid w-[1100px] grid-cols-3 justify-items-center gap-10 px-8 py-6">
        {!("error" in comments) ? (
          comments.length > 0 ? (
            comments.map(question => {
              return (
                <Question
                  question={question.comment}
                  answer={question.answer}
                  key={question.id}
                  author={question.author}
                />
              );
            })
          ) : (
            <section className="col-span-3 col-start-1 h-full w-full">
              <h4 className="text-center text-xl first-letter:text-red-500">
                Sorry, it seems there is no result that matches your filter.{" "}
                <br />
                Try another search!
              </h4>
            </section>
          )
        ) : (
          <section className="col-span-3 col-start-1 h-full w-full">
            <h4 className="text-center text-xl first-letter:text-red-500">
              Error: {comments.message}
            </h4>
          </section>
        )}
      </article>
      {!("error" in totalPages) ? (
        <Pagination totalPages={totalPages.totalPages} />
      ) : (
        <h4 className="text-center text-sm first-letter:text-red-500">
          Error: {totalPages.message}
        </h4>
      )}
    </DialogQuestionGroup>
  );
}

import Question from "../ui/Question";
import DialogQuestionGroup from "./DialogQuestionGroup";
import AsideComments from "./AsideComments";
import { getComments } from "../lib/services";
import type { SearchProps } from "../lib/types";

export default async function AreaComments({
  answerSearch,
  commentSearch,
}: SearchProps) {
  const comments = await getComments({ answerSearch, commentSearch });

  return (
    <DialogQuestionGroup>
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
                />
              );
            })
          ) : (
            <div>
              <h1>No match with your search</h1>
            </div>
          )
        ) : (
          <div>
            <h1>error change later</h1>
          </div>
        )}
      </article>
    </DialogQuestionGroup>
  );
}

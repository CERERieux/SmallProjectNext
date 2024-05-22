import { sql } from "@vercel/postgres";
import Question from "../ui/Question";
import DialogQuestionGroup from "./DialogQuestionGroup";

export default async function AreaComments() {
  const { rows } = await sql`SELECT * FROM comments;`;

  return (
    <DialogQuestionGroup>
      <article className="grid w-[1100px] grid-cols-3 justify-items-center gap-10 px-8 py-6">
        {rows.map(question => {
          return (
            <Question
              question={question.comment}
              answer={question.answer}
              key={question.id}
            />
          );
        })}
      </article>
    </DialogQuestionGroup>
  );
}

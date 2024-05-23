import { sql } from "@vercel/postgres";
import type { Comments, SearchProps } from "./types";

export async function getComments({
  answerSearch,
  commentSearch,
}: SearchProps) {
  try {
    const { rows } = await sql<Comments>`SELECT * FROM comments
      WHERE answer IS NOT NULL;`;
    /**
       * SELECT * FROM comments
      WHERE
        answer IS NOT NULL AND
        (comment ILIKE '%vercer%' OR
        answer ILIKE '%date%');

        SELECT * FROM comments ORDER BY date DESC;
       */
    // const { rows } = await sql<Comments>`SELECT * FROM comments
    //   WHERE
    //     answer IS NOT NULL AND
    //     (comment ILIKE '%${commentSearch}%' OR
    //     answer ILIKE '%${answerSearch}%');`;
    // let { rows } = data;
    // if (commentSearch !== "" && rows.length > 0) {
    //   rows = rows.filter(({ comment }) =>
    //     comment.toLowerCase().includes(commentSearch),
    //   );
    // }
    // if (answerSearch !== "" && rows.length > 0) {
    //   rows = data.rows.filter(({ answer }) =>
    //     answer.toLowerCase().includes(answerSearch),
    //   );
    // }

    return rows;
  } catch (error) {
    console.error("An error in the DB happened: " + error);
    return {
      error,
      message: "We can't get the comments right now, please try later!",
    };
  }
}

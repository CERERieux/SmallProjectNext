import { sql } from "@vercel/postgres";
import type { Comments, SearchProps } from "./types";
const COMMENTS_PER_PAGE = 9;

export async function getComments({
  answerSearch,
  commentSearch,
  authorSearch,
  page,
}: SearchProps) {
  const offset = (page - 1) * COMMENTS_PER_PAGE;
  try {
    const { rows } = await sql<Comments>`SELECT * FROM comments 
      WHERE 
        answer IS NOT NULL 
        AND comment ILIKE ${`%${commentSearch}%`}
        AND answer ILIKE ${`%${answerSearch}%`}
        AND author ILIKE ${`%${authorSearch}%`}
        ORDER BY date DESC
        LIMIT ${COMMENTS_PER_PAGE} OFFSET ${offset}
        `;

    return rows;
  } catch (error) {
    console.error("An error in the DB happened: " + error);
    return {
      error,
      message:
        "I can't get the comments from the database right now, please try later!",
    };
  }
}

export async function getCommentsPages({
  answerSearch,
  commentSearch,
  authorSearch,
  page,
}: SearchProps) {
  try {
    const count = await sql`SELECT COUNT(*) FROM comments 
      WHERE 
        answer IS NOT NULL 
        AND comment ILIKE ${`%${commentSearch}%`}
        AND answer ILIKE ${`%${answerSearch}%`}
        AND author ILIKE ${`%${authorSearch}%`}`;

    const totalPages = Math.ceil(
      Number(count.rows[0].count) / COMMENTS_PER_PAGE,
    );
    return { totalPages };
  } catch (error) {
    console.error("An error in the DB happened: " + error);
    return {
      error,
      message:
        "I can't do the pagination of the comments right now, please try later!",
    };
  }
}

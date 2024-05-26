"use server";
import { auth } from "@/auth";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Schema to validate the info I get from user
const FormSchema = z.object({
  id: z.string(),
  comment: z
    .string()
    .min(1, { message: "Comment cannot be empty" })
    .max(500, { message: "Comment only can have 500 characters." }),
  answer: z.nullable(z.string()),
  author: z
    .string()
    .max(50, { message: "Author only can be less than 50 characters." }),
  date: z.string(),
});

// Object to validate creation and update of comments
const CreateComment = FormSchema.omit({ id: true, date: true, answer: true });
const UpdateComment = FormSchema.omit({
  id: true,
  date: true,
  author: true,
  comment: true,
});

export async function createComment(prevState: any, formData: FormData) {
  //Get author to see if is anonymous or not
  const authorComment = formData.get("authorComment") || "Anonymous";
  // Validate inputs
  const result = CreateComment.safeParse({
    comment: formData.get("commentContent"),
    author: authorComment,
  });
  // If inputs are valid
  if (result.success) {
    // Save in db
    try {
      await sql`INSERT INTO comments (comment,author,date)
          VALUES (${result.data.comment},${result.data.author},NOW())`;
    } catch (error) {
      console.error(error);
      // Send an error if db failed
      throw new Error(
        "An error happened at saving your comment! Try again later.",
      );
    }
    // Return a message to know it was a success
    revalidatePath("/adminComment");
    return { error: null, message: "Your comment was sent successfully!" };
  } else {
    // If an error happened at the validation, return a message
    return {
      error: "Error in zod validation",
      message: result.error.flatten().fieldErrors,
    };
  }
}

export async function updateComment(
  id: string,
  prevState: any,
  formData: FormData,
) {
  // Get admin session, if not valid, return error
  const session = await auth();
  if (session === null || session.user?.name !== process.env.ADMIN) {
    return {
      error: "No User or Not Admin",
      message: "You can't update the answers if you aren't an admin...",
    };
  }
  // Get the answer and validate it
  const myAnswer =
    formData.get("AnswerPersonComment") === ""
      ? null
      : formData.get("AnswerPersonComment");
  const result = UpdateComment.safeParse({
    answer: myAnswer,
  });
  if (result.success) {
    // If it was good, then save it in db, send an error if it can't be done
    try {
      await sql`UPDATE comments SET answer = ${result.data.answer} WHERE id::text = ${id}`;
    } catch (error) {
      console.error(error);
      throw new Error(
        "An error happened at saving your answer! Try again later.",
      );
    }
    revalidatePath(`/admincomments/${id}`);
    return { error: null, message: "Answer was sent successfully" };
  } else {
    // If an error happened at the validation, return a message
    return {
      error: "Error in zod validation",
      message: result.error.flatten().fieldErrors,
    };
  }
}

export async function deleteComment(id: string) {
  const session = await auth();
  if (session === null || session.user?.name !== process.env.ADMIN) {
    return {
      error: "No User or Not Admin",
      message: "You can't delete the comments if you aren't an admin...",
    };
  }
  try {
    await sql`DELETE FROM comments WHERE id::text = ${id}`;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Something went wrong in the DB when deleting your message...",
    );
  }
  revalidatePath("/admincomments");
  return { error: null, message: "Comment was deleted successfully" };
}

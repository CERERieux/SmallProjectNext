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
  answer: z.string(),
  author: z
    .string()
    .max(50, { message: "Author only can be less than 50 characters." }),
  date: z.string(),
});

// Object to validate creation of comments
const CreateComment = FormSchema.omit({ id: true, date: true, answer: true });

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
      // Return a message to know it was a success
      return { error: null, message: "Your comment was sent successfully!" };
    } catch (error) {
      console.error(error);
      // Send an error if db failed
      return {
        error: error,
        message: "An error happened at saving your comment! Try again later.",
      };
    }
  } else {
    // If an error happened at the validation, return a message
    return {
      errors: result.error.flatten().formErrors,
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
    revalidatePath("/admincomments");
    return { error: null, message: "Comment was deleted successfully" };
  } catch (error) {
    console.error(error);
    return { error, message: "Something went wrong in the DB..." };
  }
}

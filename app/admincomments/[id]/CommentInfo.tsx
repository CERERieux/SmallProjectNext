import type { Comments } from "@/app/lib/types";

interface CommentInfoProps {
  id: string;
  comment: Comments;
}
export default async function CommentInfo({ id, comment }: CommentInfoProps) {}

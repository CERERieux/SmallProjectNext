import type { UUID } from "crypto";

export interface Comments {
  id: UUID;
  comment: string;
  answer: string;
  author: string;
}

export interface resultCommentQuery {
  rows: Comments[];
  rowCount: number;
}

export interface SearchProps {
  commentSearch: string;
  answerSearch: string;
  authorSearch: string;
  page: number;
}
export interface CommentPageProps {
  searchParams?: {
    comment?: string;
    answer?: string;
    page?: string;
    author?: string;
  };
}
export interface QuestionProps {
  question: string;
  answer?: string;
  author: string;
}

export type OpacityState = "opacity-0 -z-10" | "opacity-100 z-30";

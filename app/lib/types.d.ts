import type { UUID } from "crypto";

export interface Comments {
  id: UUID;
  comment: string;
  answer: string;
}

export interface SearchProps {
  commentSearch: string;
  answerSearch: string;
}
export interface CommentPageProps {
  searchParams?: {
    comment?: string;
    answer?: string;
    page?: string;
  };
}
export interface QuestionProps {
  question: string;
  answer?: string;
}

export type OpacityState = "opacity-0 -z-10" | "opacity-100 z-30";

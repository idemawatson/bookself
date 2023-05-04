import { BookStatuses } from "@/types/IBookForm";

export type SearchBook = {
  id: string;
  title: string;
  author?: string;
  publishedAt?: string;
  imageUrl?: string;
  pageCount: number;
  description: string;
};

export type ClientBook = SearchBook & {
  comment?: string;
  status: BookStatuses;
  completedAt?: string;
};

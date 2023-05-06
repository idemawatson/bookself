import { BookStatuses } from "@/types/IBookForm";
export type CreateBookRequest = {
  book_id: string;
  title: string;
  author?: string;
  imageUrl?: string;
  publishedAt?: string;
  pageCount: number;
  description?: string;
  comment?: string;
  status: BookStatuses;
};

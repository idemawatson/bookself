import { ClientBook } from "./BooksResponse";

export type UpdateBookResponse = {
  updated: ClientBook;
  newLevel: number | null;
};

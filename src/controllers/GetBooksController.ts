import BookSerializer from "@/helpers/BookSerializer";
import { ValidationError } from "@/helpers/apiErrors";
import prisma from "@/lib/prisma";
import { ClientBook } from "@/types/BooksResponse";

export default class GetBooksController {
  constructor() {}

  async execute(user_id: string): Promise<ClientBook[]> {
    if (!user_id) throw new ValidationError("user_id required");
    const books = await prisma.book.findMany({
      where: {
        user_id,
      },
    });
    return books.map((book) => new BookSerializer(book).execute());
  }
}

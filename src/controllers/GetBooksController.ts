import BookSerializer from "@/helpers/BookSerializer";
import { ValidationError } from "@/helpers/apiErrors";
import prisma from "@/lib/prisma";
import { ClientBook } from "@/types/BooksResponse";

export default class GetBooksController {
  constructor() {}
  PER_PAGE = 12;

  async execute({
    user_id,
    page,
    status,
  }: {
    user_id?: string;
    page: string;
    status: string;
  }): Promise<ClientBook[]> {
    if (!user_id) throw new ValidationError("user_id required");
    const books = await prisma.book.findMany({
      where: {
        user_id,
        status: status ? Number(status) : undefined,
      },
      skip: this.PER_PAGE * (Number(page) - 1),
      take: this.PER_PAGE,
    });
    return books.map((book) => new BookSerializer(book).execute());
  }
}

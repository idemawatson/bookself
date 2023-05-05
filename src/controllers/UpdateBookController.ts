import BookSerializer from "@/helpers/BookSerializer";
import { ValidationError } from "@/helpers/apiErrors";
import prisma from "@/lib/prisma";
import { ClientBook } from "@/types/BooksResponse";
import {
  BOOK_STATUSES,
  BookUpdateSchema,
  bookUpdateSchema,
} from "@/types/IBookForm";

export default class UpdateBookController {
  constructor() {}

  async execute({
    body,
    user_id,
    book_id,
  }: {
    body: BookUpdateSchema;
    user_id?: string;
    book_id: string;
  }): Promise<ClientBook> {
    if (!user_id || !book_id) throw new ValidationError();
    await bookUpdateSchema.validate(body).catch((e) => {
      throw new ValidationError(e);
    });

    const updated = await prisma.book.update({
      where: {
        book_id_on_user: {
          user_id,
          book_id,
        },
      },
      data: {
        comment: body.comment,
        status: body.status,
        completed_at:
          body.status === BOOK_STATUSES.COMPLETED ? body.completedAt : null,
      },
    });
    return new BookSerializer(updated).execute();
  }
}

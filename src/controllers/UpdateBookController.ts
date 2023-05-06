import BookSerializer from "@/helpers/BookSerializer";
import { ValidationError } from "@/helpers/apiErrors";
import { ClientBook } from "@/types/BooksResponse";
import { BookUpdateSchema, bookUpdateSchema } from "@/types/IBookForm";
import UpdateBookUsecase from "@/usecases/UpdateBookUsecase";

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
  }) {
    if (!user_id || !book_id) throw new ValidationError();

    await bookUpdateSchema.validate(body).catch((e) => {
      throw new ValidationError(e);
    });

    const { updatedBook, levelUpRecord } =
      await new UpdateBookUsecase().execute({
        user_id,
        book_id,
        body,
      });
    return {
      updated: new BookSerializer(updatedBook).execute(),
      newLevel: levelUpRecord ? levelUpRecord.level : null,
    };
  }
}

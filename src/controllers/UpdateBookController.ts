import BookSerializer from "@/helpers/BookSerializer";
import { ValidationError } from "@/helpers/apiErrors";
import { BookUpdateSchema, bookUpdateSchema } from "@/types/IBookForm";
import UpdateBookUsecase from "@/usecases/UpdateBookUsecase";

export default class UpdateBookController {
  usecase: UpdateBookUsecase;
  constructor() {
    this.usecase = new UpdateBookUsecase();
  }

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

    const { updatedBook, levelUpRecord } = await this.usecase.execute({
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

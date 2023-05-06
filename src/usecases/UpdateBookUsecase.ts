import prisma from "@/lib/prisma";
import { BOOK_STATUSES, BookUpdateSchema } from "@/types/IBookForm";
import UserProfilceLevelUpService from "@/services/UserProfileLevelUpService";

export default class UpdateBookUsecase {
  constructor() {}
  async execute({
    user_id,
    book_id,
    body,
  }: {
    user_id: string;
    book_id: string;
    body: BookUpdateSchema;
  }) {
    return await prisma.$transaction(async (prisma) => {
      const old = await prisma.book.findUniqueOrThrow({
        where: {
          book_id_on_user: {
            user_id,
            book_id,
          },
        },
      });
      const updatedBook = await prisma.book.update({
        where: {
          book_id_on_user: {
            user_id,
            book_id,
          },
        },
        data: {
          comment: body.comment,
          status: body.status,
          completed_at: isCompleted(body.status as number)
            ? body.completedAt
            : null,
        },
      });
      //その他 -> COMPLETED に変更された場合レベルアップ
      let levelUpRecord = null;
      if (!isCompleted(old.status) && isCompleted(updatedBook.status)) {
        levelUpRecord = await new UserProfilceLevelUpService().execute({
          user_id,
          pageCount: updatedBook.page_count,
        });
        //COMPLETED -> その他 に変更された場合レベルダウン
      } else if (isCompleted(old.status) && !isCompleted(updatedBook.status)) {
        await new UserProfilceLevelUpService().execute({
          user_id,
          pageCount: updatedBook.page_count * -1,
        });
      }

      return { updatedBook, levelUpRecord };
    });
  }
}

const isCompleted = (status: number) => {
  return status === BOOK_STATUSES.COMPLETED;
};

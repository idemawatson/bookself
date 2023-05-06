import prisma from "@/lib/prisma";
import { CreateBookRequest } from "@/types/CreateBookRequest";
import dayjs from "@/lib/importDayjs";
import { BOOK_STATUSES } from "@/types/IBookForm";
import UserProfilceLevelUpService from "@/services/UserProfileLevelUpService";

export default class CreateBookUsecase {
  constructor() {}
  async execute({
    user_id,
    body,
  }: {
    user_id: string;
    body: CreateBookRequest;
  }) {
    prisma.$transaction(async (prisma) => {
      const book = await prisma.book.create({
        data: {
          book_id: body.book_id,
          owner: {
            connect: {
              sub: user_id,
            },
          },
          title: body.title,
          author: body.author,
          image_url: body.imageUrl,
          published_at: body.publishedAt
            ? dayjs(body.publishedAt).toDate()
            : undefined,
          page_count: body.pageCount,
          description: body.description,
          comment: body.comment,
          status: body.status,
          completed_at:
            body.status === BOOK_STATUSES.COMPLETED
              ? dayjs().toDate()
              : undefined,
        },
      });
      if (book.status === BOOK_STATUSES.COMPLETED) {
        await new UserProfilceLevelUpService().execute({
          user_id,
          pageCount: book.page_count,
        });
      }
    });
  }
}
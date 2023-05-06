import { ValidationError } from "@/helpers/apiErrors";
import prisma from "@/lib/prisma";
import { CreateBookRequest } from "@/types/CreateBookRequest";
import { BOOK_STATUSES } from "@/types/IBookForm";
import dayjs from "@/lib/importDayjs";

export default class CreateBookController {
  constructor() {}

  async execute({
    body,
    user_id,
  }: {
    body: CreateBookRequest;
    user_id?: string;
  }) {
    if (!user_id) throw new ValidationError();
    await prisma.book.create({
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
  }
}

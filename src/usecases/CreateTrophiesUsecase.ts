import prisma from "@/lib/prisma";
import { BOOK_STATUSES } from "@/types/IBookForm";
import {
  COMMENTED_TROPHIES,
  COMPLETED_TROPHIES,
  LEVEL_TROPHIES,
  PAGE_TROPHIES,
} from "@/constants/trophies";
import { Book } from "@prisma/client";

export default class CreateTrophiesUsecase {
  constructor() {}
  async execute({ user_id }: { user_id: string }) {
    const user = await prisma.user.findUniqueOrThrow({
      where: { sub: user_id },
      include: {
        books: {
          select: {
            comment: true,
            status: true,
            book_id: true,
          },
        },
        record: {
          select: {
            level: true,
            total_pages: true,
          },
        },
      },
    });

    const level = user.record?.level || 1;
    const totalPages = user.record?.total_pages || 0;
    const currentTrophies = await prisma.trophy.findMany({
      where: { user_id },
    });
    const currentTrophyIds = currentTrophies.map((t) => t.trophy_id);
    const trophies = getAchivableTrophies(level, totalPages, user.books);
    await prisma.trophy.createMany({
      data: trophies
        .filter((t) => !currentTrophyIds.includes(t.id))
        .map((t) => {
          return { trophy_id: t.id, user_id };
        }),
    });

    return trophies;
  }
}

const getAchivableTrophies = (
  level: number,
  totalPages: number,
  books: Partial<Book>[]
) => {
  const bookCounts = books.reduce(
    (previews, current) => {
      previews.count++;
      if (current.status == BOOK_STATUSES.COMPLETED) previews.completed++;
      if (!!current.comment) previews.commented++;
      return previews;
    },
    {
      count: 0,
      completed: 0,
      commented: 0,
    }
  );
  const trophies = [];
  for (const t of LEVEL_TROPHIES) {
    if (level >= t.threshold) trophies.push(t.trophy);
  }
  for (const t of COMPLETED_TROPHIES) {
    if (bookCounts.completed >= t.threshold) trophies.push(t.trophy);
  }
  for (const t of COMMENTED_TROPHIES) {
    if (bookCounts.commented >= t.threshold) trophies.push(t.trophy);
  }
  for (const t of PAGE_TROPHIES) {
    if (totalPages >= t.threshold) trophies.push(t.trophy);
  }
  return trophies;
};

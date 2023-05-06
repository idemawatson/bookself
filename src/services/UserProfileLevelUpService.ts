import { calcLevel } from "@/helpers/levelUtils";
import prisma from "@/lib/prisma";
import { Book, UserRecord } from "@prisma/client";

export default class UserProfilceLevelUpService {
  constructor() {}

  async execute({
    user_id,
    pageCount = 0,
  }: {
    user_id: string;
    pageCount: number;
  }): Promise<UserRecord> {
    const userRecord = await prisma.userRecord.findUniqueOrThrow({
      where: { user_id },
    });

    const newTotalPages = userRecord.total_pages + pageCount;
    const newLevel = calcLevel(newTotalPages);
    return await prisma.userRecord.update({
      where: { user_id },
      data: {
        level: newLevel,
        total_pages: newTotalPages,
      },
    });
  }
}

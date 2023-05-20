import { Book, Trophy } from '@prisma/client'
import dayjs from 'dayjs'
import {
  COMMENTED_TROPHIES,
  COMPLETED_TROPHIES,
  LEVEL_TROPHIES,
  PAGE_TROPHIES,
  getTrophyByTrophyId,
  TrophyCode,
} from '@/constants/trophies'
import prisma from '@/lib/prisma'
import { ClientTrophy } from '@/types/ClientTrophy'
import { BOOK_STATUSES } from '@/types/IBookForm'

export default class CreateTrophiesUsecase {
  constructor() {}
  async execute({ user_id }: { user_id: string }): Promise<ClientTrophy[]> {
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
        trophies: {
          select: {
            trophy_id: true,
            created_at: true,
          },
          orderBy: { created_at: 'desc' },
        },
      },
    })
    const level = user.record?.level || 1
    const totalPages = user.record?.total_pages || 0
    const currentTrophies = user.trophies
    const currentTrophyIds = currentTrophies.map((t) => t.trophy_id)
    const newTrophies = getAchivableTrophies(
      level,
      totalPages,
      user.books,
    ).filter(({ trophy_id }) => !currentTrophyIds.includes(trophy_id))

    const { count } = await prisma.trophy.createMany({
      data: newTrophies.map(({ trophy_id }) => {
        return { trophy_id, user_id }
      }),
    })

    if (count > 0) {
      const trophies = await prisma.trophy.findMany({
        where: { user_id },
        orderBy: { created_at: 'desc' },
      })
      return createClientTrophies(trophies, currentTrophyIds)
    } else {
      return createClientTrophies(currentTrophies, currentTrophyIds)
    }
  }
}

const getAchivableTrophies = (
  level: number,
  totalPages: number,
  books: Partial<Book>[],
) => {
  const bookCounts = books.reduce(
    (previews, current) => {
      previews.count++
      if (current.status == BOOK_STATUSES.COMPLETED) previews.completed++
      if (!!current.comment) previews.commented++
      return previews
    },
    {
      count: 0,
      completed: 0,
      commented: 0,
    },
  )
  const trophyWithCreatedAt = (trophy_id: TrophyCode) => ({
    trophy_id: trophy_id,
    created_at: dayjs().toISOString(),
  })
  const trophies = []
  for (const t of LEVEL_TROPHIES) {
    if (level >= t.threshold) trophies.push(trophyWithCreatedAt(t.trophy))
  }
  for (const t of COMPLETED_TROPHIES) {
    if (bookCounts.completed >= t.threshold)
      trophies.push(trophyWithCreatedAt(t.trophy))
  }
  for (const t of COMMENTED_TROPHIES) {
    if (bookCounts.commented >= t.threshold)
      trophies.push(trophyWithCreatedAt(t.trophy))
  }
  for (const t of PAGE_TROPHIES) {
    if (totalPages >= t.threshold) trophies.push(trophyWithCreatedAt(t.trophy))
  }
  return trophies
}

const createClientTrophies = (
  trophies: Pick<Trophy, 'trophy_id' | 'created_at'>[],
  currentTrophyIds: string[],
): ClientTrophy[] => {
  return trophies.map(({ trophy_id, created_at }) => {
    return {
      ...getTrophyByTrophyId(trophy_id),
      createdAt: dayjs(created_at).toISOString(),
      isNew: !currentTrophyIds.includes(trophy_id),
    }
  })
}

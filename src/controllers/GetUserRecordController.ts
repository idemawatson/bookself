import UserRecordSerializer from '@/helpers/UserRecordSerializer'
import { ValidationError } from '@/helpers/apiErrors'
import prisma from '@/lib/prisma'
import { ClientUserRecord } from '@/types/ClientUserRecord'
import { BOOK_STATUSES } from '@/types/IBookForm'

export default class GetUserRecordController {
  async execute({ user_id }: { user_id?: string }): Promise<ClientUserRecord> {
    if (!user_id) throw new ValidationError('user_id required')

    const userRecord = await prisma.userRecord.findUniqueOrThrow({
      where: { user_id },
    })
    const {
      _sum: { page_count },
      _count,
    } = await prisma.book.aggregate({
      where: {
        user_id,
        status: BOOK_STATUSES.COMPLETED,
      },
      _sum: { page_count: true },
      _count: true,
    })

    return new UserRecordSerializer({
      ...userRecord,
      pageCount: page_count || 0,
      bookCount: _count,
    }).execute()
  }
}

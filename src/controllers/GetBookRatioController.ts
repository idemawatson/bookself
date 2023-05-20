import { ValidationError } from '@/helpers/apiErrors'
import dayjs from '@/lib/importDayjs'
import prisma from '@/lib/prisma'
import { BookRatioResponse } from '@/types/BookRatioResponse'

type RawData = {
  status: number
  _count: number
}[]

export default class GetBookRatioController {
  async execute({
    user_id,
    year,
  }: {
    user_id?: string
    year: number
  }): Promise<BookRatioResponse> {
    if (!user_id) throw new ValidationError('user_id required')
    if (!Number.isInteger(year)) throw new ValidationError('year is invalid')

    const gte = dayjs().year(year).startOf('year').toDate()
    const lt = dayjs().year(year).endOf('year').toDate()
    const data = await prisma.book.groupBy({
      where: {
        user_id,
        created_at: {
          gte,
          lt,
        },
      },
      by: ['status'],
      _count: true,
    })

    const STATUSES = [
      { status: 0, count: 0 },
      { status: 1, count: 0 },
      { status: 2, count: 0 },
      { status: 3, count: 0 },
    ]

    return (data as RawData).reduce(
      (ratios, raw) => {
        ratios.splice(raw.status, 1, {
          status: raw.status,
          count: Number(raw._count),
        })
        return ratios
      },
      [...STATUSES],
    )
  }
}

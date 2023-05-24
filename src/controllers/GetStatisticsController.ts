import { ValidationError } from '@/helpers/apiErrors'
import dayjs from '@/lib/importDayjs'
import prisma from '@/lib/prisma'
import { BOOK_STATUSES } from '@/types/IBookForm'
import { StatisticsResponse } from '@/types/StatisticsResponse'

type RawData = {
  month: string
  book_count: bigint
}[]

const MONTHS = [
  { month: '1', count: 0 },
  { month: '2', count: 0 },
  { month: '3', count: 0 },
  { month: '4', count: 0 },
  { month: '5', count: 0 },
  { month: '6', count: 0 },
  { month: '7', count: 0 },
  { month: '8', count: 0 },
  { month: '9', count: 0 },
  { month: '10', count: 0 },
  { month: '11', count: 0 },
  { month: '12', count: 0 },
]

export default class GetStatisticsController {
  async execute({
    user_id,
    year,
  }: {
    user_id?: string
    year: number
  }): Promise<StatisticsResponse> {
    if (!user_id) throw new ValidationError('user_id required')
    if (!Number.isInteger(year)) throw new ValidationError('year is invalid')

    const gte = dayjs().year(year).startOf('year').toDate()
    const lt = dayjs().year(year).endOf('year').toDate()
    const rawData = await prisma.$queryRaw`
                                SELECT date_trunc('month', completed_at) as month, count(*) as book_count
                                FROM "Book"
                                WHERE completed_at IS NOT NULL AND status = ${BOOK_STATUSES.COMPLETED} AND user_id = ${user_id}
                                AND completed_at between ${gte} AND ${lt}
                                GROUP BY month
                                ORDER BY month ASC;`

    return (rawData as RawData).reduce(
      (months, raw) => {
        const month = dayjs(raw.month).format('M')
        months.splice(Number(month) - 1, 1, {
          month,
          count: Number(raw.book_count),
        })
        return months
      },
      [...MONTHS],
    )
  }
}

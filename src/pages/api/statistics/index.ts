import { Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import CreateBookController from '@/controllers/CreateBookController'
import GetBooksController from '@/controllers/GetBooksController'
import GetStatisticsController from '@/controllers/GetStatisticsController'
import { ApplicationError, ValidationError } from '@/helpers/apiErrors'
import apiHandler from '@/helpers/apiHandler'
import { CREATE_BOOK_DUPLICATE } from '@/helpers/errorCodes'
import { CreateBookRequest } from '@/types/CreateBookRequest'

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)

  const controller = new GetStatisticsController()
  const { year } = req.query
  const books = await controller.execute({
    user_id: session?.user.id,
    year: Number(year),
  })
  res.json(books)
}

export default apiHandler({
  GET: getHandler,
})

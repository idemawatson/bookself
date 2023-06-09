import { Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import CreateBookController from '@/controllers/CreateBookController'
import GetBooksController from '@/controllers/GetBooksController'
import { ApplicationError, ValidationError } from '@/helpers/apiErrors'
import apiHandler from '@/helpers/apiHandler'
import { CREATE_BOOK_DUPLICATE } from '@/helpers/errorCodes'
import { CreateBookRequest } from '@/types/CreateBookRequest'

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)

  const controller = new GetBooksController()
  const { page, status } = req.query
  const books = await controller.execute({
    user_id: session?.user.id,
    page: page as string,
    status: status as string,
  })
  res.json(books)
}

const putHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)

  const body = req.body as CreateBookRequest
  const controller = new CreateBookController()
  const { newLevel } = await controller
    .execute({
      user_id: session?.user.id,
      body,
    })
    .catch((error) => {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new ValidationError('すでに登録済みです', CREATE_BOOK_DUPLICATE)
      }
      throw new ApplicationError(error.message)
    })
  res.json({ newLevel })
}

export default apiHandler({
  GET: getHandler,
  PUT: putHandler,
})

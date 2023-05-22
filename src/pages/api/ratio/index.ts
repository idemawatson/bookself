import type { NextApiRequest, NextApiResponse } from 'next'

import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import GetBookRatioController from '@/controllers/GetBookRatioController'
import apiHandler from '@/helpers/apiHandler'

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)

  const controller = new GetBookRatioController()
  const books = await controller.execute({
    user_id: session?.user.id,
  })
  res.json(books)
}

export default apiHandler({
  GET: getHandler,
})

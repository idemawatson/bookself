import type { NextApiRequest, NextApiResponse } from 'next'

import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import GetStatisticsController from '@/controllers/GetStatisticsController'
import apiHandler from '@/helpers/apiHandler'

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

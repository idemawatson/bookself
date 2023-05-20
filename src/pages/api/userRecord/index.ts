import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import GetUserRecordController from '@/controllers/GetUserRecordController'
import apiHandler from '@/helpers/apiHandler'

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)

  const controller = new GetUserRecordController()
  const userRecord = await controller.execute({
    user_id: session?.user.id,
  })
  res.json(userRecord)
}

export default apiHandler({
  GET: getHandler,
})

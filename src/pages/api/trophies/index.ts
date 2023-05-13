import type { NextApiRequest, NextApiResponse } from "next";

import apiHandler from "@/helpers/apiHandler";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import GetTrophiesController from "@/controllers/GetTrophiesController";

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  const controller = new GetTrophiesController();
  const trophies = await controller.execute({
    user_id: session?.user.id,
  });
  res.json(trophies);
};

export default apiHandler({
  GET: getHandler,
});

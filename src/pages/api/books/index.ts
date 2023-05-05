import type { NextApiRequest, NextApiResponse } from "next";

import GetBooksController from "@/controllers/GetBooksController";
import apiHandler from "@/helpers/apiHandler";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  const controller = new GetBooksController();
  const game = await controller.execute({ user_id: session?.user.id });
  res.json(game);
};

export default apiHandler({
  GET: getHandler,
});

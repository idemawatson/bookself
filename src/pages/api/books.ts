import type { NextApiRequest, NextApiResponse } from "next";

import GetBooksController from "@/controllers/GetBooksController";
import apiHandler from "@/helpers/apiHandler";

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const controller = new GetBooksController();
  const session = req.body.user.id;
  const game = await controller.execute(session);
  res.json(game);
};

export default apiHandler({
  GET: getHandler,
});

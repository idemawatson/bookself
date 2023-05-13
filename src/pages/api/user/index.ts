import type { NextApiRequest, NextApiResponse } from "next";
import apiHandler from "@/helpers/apiHandler";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import GetUserController from "@/controllers/GetUserController";
import UpdateUserController from "@/controllers/UpdateUserController";

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  const controller = new GetUserController();
  const user = await controller.execute({
    user_id: session?.user.id,
  });
  res.json(user);
};

const patchHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  const controller = new UpdateUserController();
  const updated = await controller.execute({
    body: req.body,
    user_id: session?.user.id,
  });
  res.json(updated);
};

export default apiHandler({
  GET: getHandler,
  PATCH: patchHandler,
});

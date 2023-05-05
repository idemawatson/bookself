import type { NextApiRequest, NextApiResponse } from "next";

import UpdateBookController from "@/controllers/UpdateBookController";
import apiHandler from "@/helpers/apiHandler";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { Prisma } from "@prisma/client";
import { ApplicationError, NotFoundError } from "@/helpers/apiErrors";

const patchHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  const { book_id } = req.query;
  const controller = new UpdateBookController();
  const updated = await controller
    .execute({
      body: req.body,
      user_id: session?.user.id,
      book_id: book_id as string,
    })
    .catch((error) => {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2025")
          throw new NotFoundError("書籍が存在しません");
      }
      throw new ApplicationError(error.message);
    });
  res.json(updated);
};

export default apiHandler({
  PATCH: patchHandler,
});

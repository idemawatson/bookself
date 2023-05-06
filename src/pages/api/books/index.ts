import type { NextApiRequest, NextApiResponse } from "next";

import GetBooksController from "@/controllers/GetBooksController";
import apiHandler from "@/helpers/apiHandler";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { CreateBookRequest } from "@/types/CreateBookRequest";
import CreateBookController from "@/controllers/CreateBookController";
import { Prisma } from "@prisma/client";
import { ApplicationError, ValidationError } from "@/helpers/apiErrors";
import { CREATE_BOOK_DUPLICATE } from "@/helpers/errorCodes";

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  const controller = new GetBooksController();
  const { page, status } = req.query;
  const books = await controller.execute({
    user_id: session?.user.id,
    page: page as string,
    status: status as string,
  });
  res.json(books);
};

const putHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  const body = req.body as CreateBookRequest;
  const controller = new CreateBookController();
  await controller
    .execute({
      user_id: session?.user.id,
      body,
    })
    .catch((error) => {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002")
          throw new ValidationError(
            "すでに登録済みです",
            CREATE_BOOK_DUPLICATE
          );
      }
      throw new ApplicationError(error.message);
    });
  res.json({ created: true });
};

export default apiHandler({
  GET: getHandler,
  PUT: putHandler,
});

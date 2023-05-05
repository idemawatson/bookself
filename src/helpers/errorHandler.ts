import { NextApiResponse } from "next";
import { NotFoundError, ValidationError } from "@/helpers/apiErrors";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export const errorHandler = (error: any, res: NextApiResponse) => {
  console.error(error);
  if (error instanceof ValidationError) {
    return res.status(400).json({
      message: error.message || "不正なリクエストです",
      statusCode: 400,
      code: error.code,
    });
  }
  if (error instanceof NotFoundError) {
    return res
      .status(404)
      .json({ message: error.message, statusCode: 404, code: error.code });
  }

  // その他予期してないエラーに対する処理
  return res.status(500).json({
    message: "エラーが発生しました",
    statusCode: 500,
    code: error.code,
  });
};

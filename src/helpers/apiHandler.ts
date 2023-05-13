import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { errorHandler } from "@/helpers/errorHandler";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const httpMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"] as const;

type HttpMethod = (typeof httpMethods)[number];

const isHttpMethod = (method: string): method is HttpMethod => {
  return httpMethods.some((m) => m === method);
};

type Handlers = {
  [key in HttpMethod]?: NextApiHandler;
};

const apiHandler = (handlers: Handlers) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    console.debug(`REQUEST BODY: ${JSON.stringify(req.body)}`);

    if (!method || !isHttpMethod(method)) {
      return res.status(405).json({
        error: {
          message: `Method ${req.method} Not Allowed`,
          statusCode: 405,
        },
      });
    }

    const handler = handlers[method];

    if (!handler) {
      return res.status(405).json({
        error: {
          message: `Method ${req.method} Not Allowed`,
          statusCode: 405,
        },
      });
    }

    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({
        message: `You Must Sign In`,
        statusCode: 401,
      });
    }

    try {
      await handler(req, res);
    } catch (err) {
      errorHandler(err, res);
    }
  };
};

export default apiHandler;

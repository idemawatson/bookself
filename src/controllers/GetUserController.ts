import { ValidationError } from "@/helpers/apiErrors";
import prisma from "@/lib/prisma";
import { ClientUser } from "@/types/ClientUser";

export default class GetUserController {
  constructor() {}

  async execute({ user_id }: { user_id?: string }): Promise<ClientUser> {
    if (!user_id) throw new ValidationError("user_id required");

    const user = await prisma.user.findUniqueOrThrow({
      where: { sub: user_id },
    });

    return { name: user.name };
  }
}

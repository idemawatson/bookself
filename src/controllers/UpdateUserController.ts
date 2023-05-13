import { ValidationError } from "@/helpers/apiErrors";
import prisma from "@/lib/prisma";
import { ClientUser } from "@/types/ClientUser";
import { UserUpdateSchema, userUpdateForm } from "@/types/IUserForm";

export default class UpdateUserController {
  constructor() {}

  async execute({
    body,
    user_id,
  }: {
    body: UserUpdateSchema;
    user_id?: string;
  }): Promise<ClientUser> {
    if (!user_id) throw new ValidationError();

    await userUpdateForm.validate(body).catch((e) => {
      throw new ValidationError(e);
    });

    const updated = await prisma.user.update({
      where: { sub: user_id },
      data: {
        name: body.name,
      },
      select: {
        name: true,
      },
    });

    return updated;
  }
}

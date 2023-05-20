import prisma from '@/lib/prisma'

export default class CreateUserUsecase {
  constructor() {}

  async execute({
    user_id,
    email,
    name,
  }: {
    user_id: string
    email: string
    name: string
  }) {
    return await prisma.user.upsert({
      where: { sub: user_id },
      update: {},
      create: {
        sub: user_id,
        email,
        name,
        record: {
          create: {
            level: 1,
            total_pages: 0,
          },
        },
      },
    })
  }
}

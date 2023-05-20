import { ValidationError } from '@/helpers/apiErrors'
import { CreateBookRequest } from '@/types/CreateBookRequest'
import CreateBookUsecase from '@/usecases/CreateBookUsecase'

export default class CreateBookController {
  usecase: CreateBookUsecase
  constructor() {
    this.usecase = new CreateBookUsecase()
  }

  async execute({
    body,
    user_id,
  }: {
    body: CreateBookRequest
    user_id?: string
  }) {
    if (!user_id) throw new ValidationError()
    const { levelUpRecord } = await this.usecase.execute({ user_id, body })
    return {
      newLevel: levelUpRecord ? levelUpRecord.level : null,
    }
  }
}

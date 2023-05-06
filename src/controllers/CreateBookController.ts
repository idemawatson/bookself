import { ValidationError } from "@/helpers/apiErrors";
import { CreateBookRequest } from "@/types/CreateBookRequest";
import CreateBookUsecase from "@/usecases/CreateBookUsecase";

export default class CreateBookController {
  constructor() {}

  async execute({
    body,
    user_id,
  }: {
    body: CreateBookRequest;
    user_id?: string;
  }) {
    if (!user_id) throw new ValidationError();
    await new CreateBookUsecase().execute({ user_id, body });
  }
}

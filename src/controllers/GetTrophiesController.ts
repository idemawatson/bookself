import { ValidationError } from "@/helpers/apiErrors";
import CreateTrophiesUsecase from "@/usecases/CreateTrophiesUsecase";
import { ClientTrophy } from "@/types/ClientTrophy";

export default class GetTrophiesController {
  usecase: CreateTrophiesUsecase;
  constructor() {
    this.usecase = new CreateTrophiesUsecase();
  }

  async execute({ user_id }: { user_id?: string }): Promise<ClientTrophy[]> {
    if (!user_id) throw new ValidationError("user_id required");
    return await this.usecase.execute({ user_id });
  }
}

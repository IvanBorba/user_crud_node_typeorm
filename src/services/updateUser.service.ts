import { UsersRepository } from "../repositories/users.repository";
import { getCustomRepository } from "typeorm";

interface IProps {
  id: string;
  data: Record<string, unknown>;
}

class UpdateUserService {
  async execute({ id, data }: IProps) {
    const usersRepository = getCustomRepository(UsersRepository);

    data.updatedOn = new Date();

    await usersRepository.update(id, data);
    const user = usersRepository.findOne({ id });

    return user;
  }
}

export default UpdateUserService;

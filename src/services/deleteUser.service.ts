import { UsersRepository } from "../repositories/users.repository";
import { getCustomRepository } from "typeorm";

class DeleteUserService {
  async execute(id: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    await usersRepository.delete(id);

    return "User deleted";
  }
}

export default DeleteUserService;

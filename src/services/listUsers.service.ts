import { UsersRepository } from "../repositories/users.repository";
import { getCustomRepository } from "typeorm";

class ListUserService {
  async execute() {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = usersRepository.find();

    return users;
  }
}

export default ListUserService;

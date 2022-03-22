import { UsersRepository } from "../repositories/users.repository";
import { getCustomRepository } from "typeorm";

class UserProfileService {
  async execute(id: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = usersRepository.findOne({ id });

    return user;
  }
}

export default UserProfileService;

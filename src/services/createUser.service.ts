import { UsersRepository } from "../repositories/users.repository";
import { getCustomRepository } from "typeorm";
import { hash } from "bcrypt";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
}

class CreateUserService {
  async execute({ name, email, password, isAdm }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepository);

    if (!email) {
      throw new Error("Missing e-mail");
    }

    const emailAlreadyExists = await usersRepository.findOne({ email });

    if (emailAlreadyExists) {
      throw new Error("E-mail already registered");
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      isAdm,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;

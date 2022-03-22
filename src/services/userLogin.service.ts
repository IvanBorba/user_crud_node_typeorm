import { compare } from "bcrypt";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/users.repository";
import { sign } from "jsonwebtoken";

interface IProps {
  email: string;
  password: string;
}

class UserLoginService {
  async execute({ email, password }: IProps) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ email });

    if (!user) {
      return "Email/Password incorrect";
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return "Email/Password incorrect";
    }

    const token = sign({ email: user.email }, "a_great_secret_key", {
      subject: user.id,
      expiresIn: "3d",
    });

    return { token };
  }
}

export default UserLoginService;

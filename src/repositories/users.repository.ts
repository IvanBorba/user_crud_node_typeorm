import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/user.entity";

@EntityRepository(User)
class UsersRepository extends Repository<User> {}

export { UsersRepository };

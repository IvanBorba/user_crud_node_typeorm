import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/users.repository";

const ensureAdm = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const usersRepository = getCustomRepository(UsersRepository);

  let { user_id } = request;

  let { id } = request.params || { id: "" };

  const user = await usersRepository.findOne({ id: user_id });

  if (user_id === id || user.isAdm) return next();

  return response.status(401).json({ message: "Unauthorized" });
};

export default ensureAdm;

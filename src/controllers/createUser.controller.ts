import { Request, Response } from "express";
import CreateUserService from "../services/createUser.service";

class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { name, email, password, isAdm } = request.body;

      const createUserService = new CreateUserService();

      const user = await createUserService.execute({
        name,
        email,
        password,
        isAdm,
      });

      return response.json(user);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export default CreateUserController;

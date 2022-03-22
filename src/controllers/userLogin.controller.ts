import { Request, Response } from "express";
import UserLoginService from "../services/userLogin.service";

class UserLoginController {
  async handle(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const userLoginervice = new UserLoginService();

      const login = await userLoginervice.execute({ email, password });

      return response.json(login);
    } catch (error) {
      return response.status(401).json({ message: error.message });
    }
  }
}

export default UserLoginController;

import { Request, Response } from "express";
import UpdateUserService from "../services/updateUser.service";

class UpdateUsersController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const data = request.body;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({ id, data });

    return response.json(user);
  }
}

export default UpdateUsersController;

import { Request, Response } from "express";
import UserProfileService from "../services/userProfile.service";

class UserProfileController {
  async handle(request: Request, response: Response) {
    const userProfileService = new UserProfileService();

    const { user_id } = request;

    const user = await userProfileService.execute(user_id);

    return response.json(user);
  }
}

export default UserProfileController;

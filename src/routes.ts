import { Router } from "express";
import CreateUserController from "./controllers/createUser.controller";
import ListUsersController from "./controllers/listUsers.controller";
import UpdateUsersController from "./controllers/updateUser.controller";
import DeleteUsersController from "./controllers/deleteUser.controller";
import UserLoginController from "./controllers/userLogin.controller";
import UserProfileController from "./controllers/userProfile.controller";
import authenticateUser from "./middlewares/authenticateUser.middleware";
import ensureAdm from "./middlewares/ensureAdm.middleware";

const router = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUsersController = new UpdateUsersController();
const deleteUsersController = new DeleteUsersController();
const userLoginController = new UserLoginController();
const userProfileController = new UserProfileController();

router.post("/users", createUserController.handle);
router.post("/login", userLoginController.handle);
router.get("/users", authenticateUser, ensureAdm, listUsersController.handle);
router.get(
  "/users/:id",
  authenticateUser,
  ensureAdm,
  userProfileController.handle
);
router.patch(
  "/users/:id",
  authenticateUser,
  ensureAdm,
  updateUsersController.handle
);
router.delete(
  "/users/:id",
  authenticateUser,
  ensureAdm,
  deleteUsersController.handle
);

export default router;

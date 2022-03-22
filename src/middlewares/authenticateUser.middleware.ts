import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

const authenticateUser = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({ message: "Invalid token" });
  }

  token = token.split(" ")[1];

  try {
    const { sub } = verify(token, "a_great_secret_key") as IPayload;

    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).json({ message: "Unauthorized" });
  }
};

export default authenticateUser;

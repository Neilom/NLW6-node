import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

export class AuthController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body



    const auth = new AuthenticateUserService()

    const token = await auth.execute({ email, password })

    return res.json(token)
  }
}
import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";



export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  //Verificar se o usuario é admin
  const { user_id } = req

  const usersRepositories = getCustomRepository(UserRepositories)

  const user = await usersRepositories.findOne(user_id)

  if (user.admin) {
    return next();
  }

  return res.status(401).json({ msg: "Não Autorizado" })
}
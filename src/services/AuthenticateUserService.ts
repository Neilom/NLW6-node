import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"


interface AuthReq {
  email: string;
  password: string;
}

export class AuthenticateUserService {

  async execute({ email, password }: AuthReq) {

    const usersRepositories = getCustomRepository(UserRepositories)

    const userExist = await usersRepositories.findOne(email)

    if (!userExist) {
      throw new Error("Email/Password incorreto.")
    }

    const verificador = await compare(password, userExist.password)

    if (!verificador) {
      throw new Error("Email/Password incorreto.")
    }

    const token = sign({
      email: userExist.email
    }, "b7e83644ea219f43238bf20a94d6df3c", { subject: userExist.id, expiresIn: '7d' })

    return token
  }
}
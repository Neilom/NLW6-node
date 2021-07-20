import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs"


interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string
}

export class CreateUserService {

  async execute({ name, email, admin = false, password }: IUserRequest) {

    const userRepository = getCustomRepository(UserRepositories);

    if (!email) {
      throw new Error("Sem e-mail")
    }

    const userAlreadyExist = await userRepository.findOne({
      email
    });

    if (userAlreadyExist) {
      throw new Error("Usuário já existe")
    }

    const passwordHash = await hash(password, 8)

    const user = userRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    })

    await userRepository.save(user)

    return user
  }
}
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

export class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    
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

    const user = userRepository.create({
      name,
      email,
      admin,
    })

    await userRepository.save(user)

    return user
  }
}
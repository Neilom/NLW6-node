import { getCustomRepository } from "typeorm";
import { ComplimentsRepo } from "../repositories/ComplimentsRepo";
import { UserRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  mensagem: string
}

export class CreateComplimentService {
  async execute({ mensagem, tag_id, user_receiver, user_sender }: IComplimentRequest) {

    const complimentsRepo = getCustomRepository(ComplimentsRepo)
    const userRepo = getCustomRepository(UserRepositories)

    if (user_sender === user_receiver) {
      throw new Error("Incorret User Receiver")
    }

    const userExist = await userRepo.findOne(user_receiver)

    if (!userExist) {
      throw new Error("User Receiver does not exists!")
    }

    const compliment = complimentsRepo.create({
      tag_id,
      user_receiver,
      user_sender,
      mensagem
    })

    await complimentsRepo.save(compliment)

    return compliment

  }
}
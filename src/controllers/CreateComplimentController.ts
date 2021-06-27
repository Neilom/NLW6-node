import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimenteService";


export class CreateComplimentController {
  async handle(req: Request, res: Response) {

    const { mensagem, tag_id, user_receiver, user_sender } = req.body
    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({ mensagem, tag_id, user_receiver, user_sender })

    return res.json(compliment)
  }
}
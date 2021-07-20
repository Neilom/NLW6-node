import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimenteService";


export class CreateComplimentController {
  async handle(req: Request, res: Response) {

    const { mensagem, tag_id, user_receiver } = req.body
    const { user_id } = req
    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({ mensagem, tag_id, user_receiver, user_sender: user_id })

    return res.json(compliment)
  }
}
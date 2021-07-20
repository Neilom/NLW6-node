import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

  interface IPLoad {
    sub: string
  }

  const token = req.headers.authorization

  if (!token) {
    return res.status(401).end();
  }

  try {
    const { sub } = verify(token.substring(7), "b7e83644ea219f43238bf20a94d6df3c") as IPLoad

    req.user_id = sub

    return next();
  } catch (error) {
    return res.status(401).end()
  }




}
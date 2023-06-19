import { Request, RequestHandler, Response } from "express"
import { handleHttp, response } from '../../libs'
import { register } from "../../services/auth"

export const signup: RequestHandler = async (req: Request, res: Response) => {
  try {
    const user = await register(req)
    response(res, 201, user)
  } catch (err) {
    handleHttp(res, 'registerError', err)
  }
}
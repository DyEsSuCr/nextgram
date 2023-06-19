import { Request, Response, RequestHandler } from "express"
import { handleHttp } from '../../libs'
import { login } from '../../services/auth'

export const signin: RequestHandler = async (req: Request, res: Response) => {
  try {
    const user = await login(req)
    res.status(200).json(user)
  } catch (err) {
    handleHttp(res, 'registerError', err)
  }
}
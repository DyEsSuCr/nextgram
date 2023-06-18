import { Request, Response } from "express"
import { handleHttp, response } from '../../libs'
import { addUser } from "../../services/auth"

export const signup = async (req: Request, res: Response) => {
  try {
    const user = await addUser(req)
    response(res, 201, user)
  } catch (err) {
    handleHttp(res, 'registerError', err)
  }
}
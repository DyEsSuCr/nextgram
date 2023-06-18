import { Request } from 'express'
import { User } from '../../models'

export const addUser = async ({ body }: Request) => {
  const { username, email, password } = body

  return await User.create({
    username: username,
    email: email,
    password: password
  })
}
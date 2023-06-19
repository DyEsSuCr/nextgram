import { Request } from 'express'
import { User } from '../../models'

export const register = async ({ body }: Request) => await User.create({ ...body })

export const login = async ({ body }: Request) => await User.findOne({ where: { email: body.email } })
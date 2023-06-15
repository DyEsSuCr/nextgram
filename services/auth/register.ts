import { NextRequest } from 'next/server'
import { User } from '@/models'

export const registerUser = async (req: NextRequest) => {
  const { username, password, email } = await req.json()

  if (!username || !password || !email) {
    return 'Todos los campos son requeridos'
  }

  const passwordHash = User.prototype.hasPassword(password)

  const user = await User.create({
    username,
    password: passwordHash,
    email
  })

  return user
}
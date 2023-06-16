import { User } from '@/models'
import { NextRequest } from 'next/server'

export const loginUser = async (req: NextRequest) => {
  const { username, password } = await req.json()

  const user = await User.findOne({ where: { username } })

  if (!user) return 'Usuario no encontrado'

  const sourcePasswrod = User.prototype.comparePassword(password, user.password)

  if (!sourcePasswrod) return 'La contraña no conincide'

  return user
}
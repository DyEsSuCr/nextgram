import { NextRequest, NextResponse } from 'next/server'
import { connectSequelize } from '@/libs/connectSequelize'
import { registerUser } from '@/services/auth/register'

export const POST = async (req: NextRequest) => {
  try {
    await connectSequelize()

    const user = await registerUser(req)
    return NextResponse.json({ message: 'Usuario registrado', user })
  } catch (err) {
    return NextResponse.json(err)
  }
}
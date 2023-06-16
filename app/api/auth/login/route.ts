import { NextRequest, NextResponse } from 'next/server'
import { connectSequelize } from '@/libs/connectSequelize'
import { loginUser } from '@/services/auth/login'

export const POST = async (req: NextRequest) => {
  try {
    await connectSequelize()

    const user = await loginUser(req)
    return NextResponse.json(user)
  } catch (err) {
    return NextResponse.json(err)
  }
}
// src/app/api/session/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { userId } = await req.json()

  if (!userId) {
    return NextResponse.json({ error: 'Missing userId' }, { status: 400 })
  }

  try {
    const session = await createServerSession(userId)
    return NextResponse.json({ session })
  } catch (error) {
    console.error('Failed to create session:', error)
    return NextResponse.json(
      { error: 'Failed to create session' },
      { status: 500 },
    )
  }
}

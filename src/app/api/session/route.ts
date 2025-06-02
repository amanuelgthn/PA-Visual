import { NextResponse } from 'next/server'
import { createToken, verifyToken } from '../../Utils/Session'

const DAY_IN_SECONDS = 24 * 60 * 60

export async function POST(req: Request) {
  try {
    const { userName, userId, role } = await req.json()
    console.log(`username from session reqest ${userName}`)
    const expiresAt = Math.floor(Date.now() / 1000) + DAY_IN_SECONDS

    const token = await createToken({ userName, userId, role, expiresAt })

    const cookie = `session=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${DAY_IN_SECONDS}`
    return NextResponse.json(
      { message: `Session created: ${userId}` },
      { headers: { 'Set-Cookie': cookie } },
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Failed to create session' },
      { status: 500 },
    )
  }
}

export async function GET(req: Request) {
  const token = req.headers.get('cookie')?.split('session=')[1]

  if (!token) {
    return NextResponse.json({ error: 'No session found' }, { status: 401 })
  }

  const session = await verifyToken(token)
  if (!session) {
    return NextResponse.json(
      { error: 'Invalid or expired session' },
      { status: 401 },
    )
  }

  return NextResponse.json({ session })
}

export async function DELETE() {
  const cookie = `session=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`
  return NextResponse.json(
    { message: 'Session deleted' },
    { headers: { 'Set-Cookie': cookie } },
  )
}

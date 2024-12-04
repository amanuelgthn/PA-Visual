import { NextApiRequest, NextApiResponse } from 'next'
import { createToken, verifyToken, deleteSessionCookie } from '../Utils/Session'

const DAY_IN_SECONDS = 24 * 60 * 60

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { userId, role } = req.body
    const expiresAt = Math.floor(Date.now() / 1000) + DAY_IN_SECONDS

    const token = await createToken({ userId, role, expiresAt })
    res.setHeader(
      'Set-Cookie',
      `session=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${DAY_IN_SECONDS}`,
    )
    return res.status(200).json({ message: 'Session created' })
  }

  if (req.method === 'GET') {
    const token = req.cookies.session

    if (!token) {
      return res.status(401).json({ error: 'No session found' })
    }

    const session = await verifyToken(token)
    if (!session) {
      return res.status(401).json({ error: 'Invalid or expired session' })
    }

    return res.status(200).json({ session })
  }

  if (req.method === 'DELETE') {
    res.setHeader('Set-Cookie', deleteSessionCookie())
    return res.status(200).json({ message: 'Session deleted' })
  }

  res.setHeader('Allow', ['POST', 'GET', 'DELETE'])
  return res.status(405).end(`Method ${req.method} Not Allowed`)
}

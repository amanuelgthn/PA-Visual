import { SignJWT, jwtVerify, JWTPayload } from 'jose'
import { serialize } from 'cookie'

const SECRET = process.env.SESSION_SECRET || 'default-secret-key'
const encoder = new TextEncoder()
const encodedKey = encoder.encode(SECRET)

// Extend JWTPayload to make SessionPayload compatible
export interface SessionPayload extends JWTPayload {
  userId: string
  role: string
  expiresAt: number // Unix timestamp
}

// Create a JWT token
export async function createToken(payload: SessionPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(payload.expiresAt)
    .sign(encodedKey)
}

// Verify a JWT token
export async function verifyToken(
  token: string,
): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload as SessionPayload
  } catch (error) {
    console.error('Invalid token:', error)
    return null
  }
}

// Delete a session cookie
export function deleteSessionCookie() {
  return serialize('session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  })
}

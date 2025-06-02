import axios from 'axios'
import Jwt from 'jsonwebtoken'

// Set up the base URL using environment variables
const API = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL || 'https://globalpropertyapi.com',
  headers: {
    'x-api-key':
      process.env.NEXT_PUBLIC_API_KEY || process.env.NEXT_PUBLIC_API_KEY_2,
  },
})

export async function createClientSession(
  userName: string,
  userId: string,
  role: string,
) {
  const response = await axios.post('/api/session', { userName, userId, role })
  console.log(`response.data: ${response.data}`)
  return response.data
}

export async function getClientSession() {
  const response = await axios.get('/api/session')
  return response.data.session
}

export async function deleteClientSession() {
  await axios.delete('/api/session')
}

export interface LoginRequest {
  identifier: string
  password: string
}

export const loginUser = async (data: LoginRequest) => {
  try {
    const response = await API.post('users/login', data)
    console.log(response.data)
    const user = Jwt.decode(response.data.token)
    return user
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data
    }
    console.log(error)
    throw new Error('Unexpected error occurred')
  }
}

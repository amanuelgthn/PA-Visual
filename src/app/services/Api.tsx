import axios from 'axios'

// Set up the base URL using environment variables
const API = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL || 'https://globalpropertyapi.com',
})

// User Registration API Call
export const registerUser = async (data: {
  email: string
  username: string
  password: string
}) => {
  try {
    const response = await API.post('/users/register', data)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data
    }
    throw new Error('Unexpected error occurred')
  }
}

// Email Verification API Call
export const verifyEmail = async (token: string) => {
  try {
    const response = await API.get(`/verify/${token}`)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data
    }
    throw new Error('Unexpected error occurred')
  }
}

export const checkVerificationStatus = async (username: string) => {
  try {
    const response = await API.get(`/users/verification-status/${username}`)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data
    }
    throw new Error('Unexpected error occurred')
  }
}

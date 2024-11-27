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
    const response = await API.get(`/users/verify/${token}`)
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
    const response = await API.get(
      `/users/check-verification-status/${username}`,
    )
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data
    }
    throw new Error('Unexpected error occurred')
  }
}

export const resendVerificationEmail = async (email: string) => {
  try {
    const response = await fetch('/api/users/resend-verification-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Failed to resend verification email')
    }

    const data = await response.json()
    alert(data.message)
  } catch {
    throw new Error('An error occurred while resending verification email')
  }
}

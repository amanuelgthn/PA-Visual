'use client'

import axios from 'axios'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'

const API = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL || 'https://globalpropertyapi.com',
  headers: {
    'x-api-key':
      process.env.NEXT_PUBLIC_API_KEY || process.env.NEXT_PUBLIC_API_KEY_2,
  },
})

const handleLogout = async (router: AppRouterInstance) => {
  try {
    await API.post('/users/logout')
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('user')

    // Redirect to the login page
    router.push('/')
  } catch (error) {
    console.error('Error during logout:', error)
    alert('Failed to log out. Please try again.')
  }
}

// React Component for the Logout Page
const Logout: FC = () => {
  const router = useRouter()

  useEffect(() => {
    // Call the logout function on component mount
    handleLogout(router)
  }, [router])

  return <h1>Logging out...</h1>
}

export default Logout

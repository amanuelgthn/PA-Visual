'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'
import { useAuth } from '../Utils/AuthContext'

export async function deleteClientSession() {
  try {
    const response = await axios.delete('/api/session')
    console.log(response.data.message) // Confirm session deletion
  } catch (error) {
    console.error('Failed to delete session:', error)
  }
}

// Updated handleLogout: receives `setIsAuthenticated` and `router` as arguments
const handleLogout = async (
  setIsAuthenticated: (value: boolean) => void,
  router: ReturnType<typeof useRouter>,
) => {
  try {
    await deleteClientSession()
    setIsAuthenticated(false) // Update auth state
    router.push('/') // Redirect to login page
  } catch (error) {
    console.error('Error during logout:', error)
    alert('Failed to log out. Please try again.')
  }
}

// Logout Component
const Logout: FC = () => {
  const router = useRouter()
  const { setIsAuthenticated } = useAuth() // Call useAuth() here, inside the component

  useEffect(() => {
    handleLogout(setIsAuthenticated, router) // Pass values to the function
  }, [setIsAuthenticated, router])

  return <h1>Logging out...</h1>
}

export default Logout

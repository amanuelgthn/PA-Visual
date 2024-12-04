'use client'

import axios from 'axios'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'

export async function deleteClientSession() {
  try {
    const response = await axios.delete('/api/session')
    console.log(response.data.message) // Log the response to confirm success
  } catch (error) {
    console.error('Failed to delete session:', error)
  }
}

const handleLogout = async (router: AppRouterInstance) => {
  try {
    await deleteClientSession()
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

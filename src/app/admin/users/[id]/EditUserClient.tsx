'use client'

import React from 'react'

export default function EditUserClient({ id }: { id: string }) {
  return (
    <div>
      <h1>Edit User {id}</h1>
      <form>
        {/* Form elements for editing an existing user */}
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' />
        <button type='submit'>Save Changes</button>
      </form>
    </div>
  )
}

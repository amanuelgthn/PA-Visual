'use client';

import React from 'react';
import Link from 'next/link';

const UsersManagement: React.FC = () => {
 
  const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
  ];

  return (
    <div>
      <h1>Users Management</h1>
      <Link href="/admin/users/add">Add New User</Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - <Link href={`/admin/users/${user.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersManagement;

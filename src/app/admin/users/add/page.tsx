
'use client'
import React from 'react';

const AddUser: React.FC = () => {
  return (
    <div>
      <h1>Add New User</h1>
      <form>
        {/* Form elements for adding a new user */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;

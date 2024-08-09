'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const EditProperty: React.FC = () => {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <h1>Edit Property {id}</h1>
      <form>
        {/* Form elements for editing an existing property */}
        <label htmlFor="name">Property Name:</label>
        <input type="text" id="name" name="name" />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProperty;

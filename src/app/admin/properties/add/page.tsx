'use client';
import React from 'react';

const AddProperty: React.FC = () => {
  return (
    <div>
      <h1>Add New Property</h1>
      <form>
        {/* Form elements for adding a new property */}
        <label htmlFor="name">Property Name:</label>
        <input type="text" id="name" name="name" />
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;

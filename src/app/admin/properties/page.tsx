'use client';
import React from 'react';
import Link from 'next/link';

const PropertiesManagement: React.FC = () => {
  const properties = [
    { id: 1, name: 'Property 1' },
    { id: 2, name: 'Property 2' },
  ];

  return (
    <div>
      <h1>Properties Management</h1>
      <Link href="/admin/properties/add">Add New Property</Link>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            {property.name} -{' '}
            <Link href={`/admin/properties/${property.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertiesManagement;

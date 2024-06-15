"use client"
import React, { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

// pages/UserPage.js
const UserPage = () => {
  const { user, error, isLoading } = useUser();
  const mockUserData = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
    },
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
    },
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
    },
];

return (
  <div className="flex flex-wrap justify-center min-h-screen bg-gray-100">
  {mockUserData.map(user => (
    <div key={user.id} className="max-w-xs h-[15rem] w-full bg-white shadow-lg rounded-lg p-2 m-4 flex flex-col justify-center items-center">
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold">User Information</h2>
      </div>
      <div className="mb-1 flex">
        <label className="block text-gray-700 text-sm font-bold mb-1">ID:</label>
        <p className="text-gray-900 text-sm ml-2">{user.id}</p>
      </div>
      <div className="mb-1 flex">
        <label className="block text-gray-700 text-sm font-bold mb-1">Name:</label>
        <p className="text-gray-900 text-sm ml-2">{user.name}</p>
      </div>
      <div className="mb-1 flex">
        <label className="block text-gray-700 text-sm font-bold mb-1">Email:</label>
        <p className="text-gray-900 text-sm ml-2">{user.email}</p>
      </div>
    </div>
  ))}
</div>


);
};

export default UserPage;


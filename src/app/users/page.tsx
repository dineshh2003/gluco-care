// pages/users.tsx
import React from 'react';
import UserList from '@/components/UserList';

const UsersPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <UserList />
    </div>
  );
};

export default UsersPage;
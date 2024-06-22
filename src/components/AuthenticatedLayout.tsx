// components/AuthenticatedLayout.tsx

"use client";

import { useUser } from '@auth0/nextjs-auth0/client';
import Sidebar from './Sidebar';
import Preloader from './PreLoader';

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div><Preloader/></div>; // or a loading spinner
  }

  return (
    <div className="flex h-screen">
      {user && <Sidebar />}
      <div className="flex-1 bg-white">
        {children}
      </div>
    </div>
  );
};

export default AuthenticatedLayout;

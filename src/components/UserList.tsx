// // components/UserList.tsx
// "use client"
// import React, { useState, useEffect } from 'react';

// interface User {
//   id: number;
//   name: string;
// }

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState<string>('');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('/api/users', {
//           method: 'GET',
//           credentials: 'include',
//         });
//         if (response.ok) {
//           const data: User[] = await response.json();
//           setUsers(data);
//         } else {
//           setError('Access Denied');
//         }
//       } catch (err) {
//         setError('Error fetching users');
//       }
//     };
//     fetchUsers();
//   }, []);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="bg-white p-6 rounded shadow-lg">
//       <h1 className="text-2xl font-bold mb-4">Logged In Users</h1>
//       <ul className="list-none p-0">
//         {users.map(user => (
//           <li key={user.id} className="bg-gray-100 mb-2 p-4 rounded">
//             {user.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;










"use client"
import React, { useState, useEffect } from 'react';

// pages/UserPage.js
const UserPage = () => {
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


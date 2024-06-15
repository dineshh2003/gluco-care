
import React from 'react';

const records = [
  {
    result: 75,
    time: '5:00 PM',
    date: '20/12/2022',
    admin: 'Jacob Meyers',
    role: 'Registered Nurse',
    avatar: '/path-to-avatar.jpg' // Replace with the actual path to the avatar image
  },
  {
    result: 70,
    time: '5:00 PM',
    date: '20/12/2022',
    admin: 'Jacob Meyers',
    role: 'Registered Nurse',
    avatar: '/path-to-avatar.jpg' // Replace with the actual path to the avatar image
  },
  // More records...
];

const Records = () => {
  return (
    <div className="container mx-1 p-4 h-fit w-[72vw] ">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Records</h2>
          <button className="bg-teal-500 text-white px-4 py-2 rounded">Most Recent</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 ">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hypertension</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HeartDisease</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">smoking-history</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BMI</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HbA1c Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood-glucose</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diabetes</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {records.map((record, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{record.result}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.time}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{record.result}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.time}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{record.result}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.time}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{record.result}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.time}</td>               
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Records;

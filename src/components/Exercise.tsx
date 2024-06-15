import React from 'react';

const exercises = [
  {
    name: 'Running',
    duration: '30 minutes',
    caloriesBurned: 200
  },
  {
    name: 'Weightlifting',
    duration: '45 minutes',
    caloriesBurned: 300
  },
  // More exercises...
];

const Exercise = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden container mx-1 p-4 h-fit w-[72vw]">
      <div className="flex justify-between p-4 border-b">
        <h2 className="text-xl font-semibold">Exercise</h2>
        <button className="bg-teal-500 text-white px-4 py-2 rounded">Today's Diet</button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exercise</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calories Burned</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {exercises.map((exercise, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{exercise.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exercise.duration}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exercise.caloriesBurned}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exercise;

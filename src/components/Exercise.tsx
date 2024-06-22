import React, { useState, useEffect } from 'react';

interface Exercise {
  name: string;
  duration: string;
  caloriesBurned: number;
}

const defaultExercises: Exercise[] = [
  { name: 'Running', duration: '30 minutes', caloriesBurned: 200 },
  { name: 'Weightlifting', duration: '45 minutes', caloriesBurned: 300 },
  { name: 'Swimming', duration: '60 minutes', caloriesBurned: 400 },
  { name: 'Cycling', duration: '40 minutes', caloriesBurned: 250 },
  { name: 'Yoga', duration: '50 minutes', caloriesBurned: 150 },
  { name: 'HIIT', duration: '20 minutes', caloriesBurned: 350 },
  { name: 'Pilates', duration: '30 minutes', caloriesBurned: 180 },
  { name: 'Rowing', duration: '45 minutes', caloriesBurned: 280 },
  { name: 'Boxing', duration: '30 minutes', caloriesBurned: 300 },
  { name: 'Dancing', duration: '60 minutes', caloriesBurned: 220 },
];

const Exercise = () => {
  const [exercises, setExercises] = useState<Exercise[]>(defaultExercises);
  const [newExercise, setNewExercise] = useState<string>('');
  const [newDuration, setNewDuration] = useState<string>('');
  const [checkedExercises, setCheckedExercises] = useState<number[]>([]);
  const [submittedExercises, setSubmittedExercises] = useState<Exercise[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && submittedExercises.length > 0) {
      setSubmittedExercises([]);
      setEditMode(true);
    }
  }, [timeLeft, submittedExercises]);

  const addExercise = () => {
    const newCaloriesBurned = 100; // You may calculate this based on some logic
    const newExerciseEntry: Exercise = { name: newExercise, duration: newDuration, caloriesBurned: newCaloriesBurned };
    setExercises([...exercises, newExerciseEntry]);
    setNewExercise('');
    setNewDuration('');
  };

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedExercises = checkedExercises.includes(index)
      ? checkedExercises.filter((i) => i !== index)
      : [...checkedExercises, index];
    setCheckedExercises(updatedCheckedExercises);
  };

  const handleSubmit = () => {
    const selectedExercises = checkedExercises.map(index => exercises[index]);
    setSubmittedExercises(selectedExercises);
    setCheckedExercises([]);
    setEditMode(false);
    setTimeLeft(24 * 60 * 60); // 24 hours in seconds
  };

  const totalExercises = exercises.length;
  const percentage = (checkedExercises.length / totalExercises) * 100;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden container mx-1 p-4 h-fit w-[72vw]">
      <div className="flex justify-between p-4 border-b">
        <h2 className="text-xl font-semibold">Exercise</h2>
        {editMode && (
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Exercise name"
              value={newExercise}
              onChange={(e) => setNewExercise(e.target.value)}
              className="border rounded px-2 py-1"
            />
            <input
              type="text"
              placeholder="Duration"
              value={newDuration}
              onChange={(e) => setNewDuration(e.target.value)}
              className="border rounded px-2 py-1"
            />
            <button onClick={addExercise} className="bg-teal-500 text-white px-4 py-2 rounded">Add Exercise</button>
          </div>
        )}
      </div>
      {editMode ? (
        <>
          <div className="p-4">
            <div className="bg-gray-200 rounded-full h-4 w-full">
              <div className="bg-teal-500 h-4 rounded-full" style={{ width: `${percentage}%` }}></div>
            </div>
            <p className="text-center mt-2">{percentage}% of workout completed</p>
          </div>
          <div className="overflow-y-scroll h-64"> {/* Add scrolling container */}
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Select</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exercise</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calories Burned</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {exercises.map((exercise, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                      <input
                        type="checkbox"
                        checked={checkedExercises.includes(index)}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{exercise.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exercise.duration}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exercise.caloriesBurned}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center p-4">
            <button onClick={handleSubmit} className="bg-teal-500 text-white px-4 py-2 rounded">Submit</button>
          </div>
        </>
      ) : (
        <div className="p-4">
          <h3 className="text-lg font-semibold">To-Do List (next 24 hours)</h3>
          <ul className="list-disc pl-6">
            {submittedExercises.map((exercise, index) => (
              <li key={index} className="mt-2">
                <span className="font-medium text-green-600">{exercise.name}</span> - {exercise.duration}, {exercise.caloriesBurned} calories
              </li>
            ))}
          </ul>
          <div className="flex justify-center p-4">
            <button onClick={() => setEditMode(true)} className="bg-teal-500 text-white px-4 py-2 rounded">Edit Exercises</button>
          </div>
          <p className="text-center mt-2">Time left: {Math.floor(timeLeft / 3600)}h {Math.floor((timeLeft % 3600) / 60)}m {timeLeft % 60}s</p>
        </div>
      )}
    </div>
  );
};

export default Exercise;

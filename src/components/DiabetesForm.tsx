"use client"


import React from 'react';

const PredictDiabetesForm = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-auto w-[70vw] h-fit-content">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Predict Diabetes Chances</h2>
        </div>
        <form className="p-4 flex flex-wrap">
          <div className="w-full sm:w-1/2 mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 ">Age</label>
            <input type="number" id="age" name="age" className="mt-1 px-4 py-2 w-64 border rounded-md focus:outline-none focus:ring focus:border-blue-500" />
          </div>
          <div className="w-full sm:w-1/2 mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select id="gender" name="gender" className="mt-1 px-4 py-2 w-64 border rounded-md focus:outline-none focus:ring focus:border-blue-500">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2 mb-4">
            <label htmlFor="hypertension" className="block text-sm font-medium text-gray-700">Hypertension</label>
            <input type="checkbox" id="hypertension" name="hypertension" className="mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500" />
          </div>
          <div className="w-full sm:w-1/2 mb-4">
            <label htmlFor="heartDisease" className="block text-sm font-medium text-gray-700">Heart Disease</label>
            <input type="checkbox" id="heartDisease" name="heartDisease" className="mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500" />
          </div>
          <div className="w-full sm:w-1/2 mb-4">
            <label htmlFor="smokingHistory" className="block text-sm font-medium text-gray-700">Smoking History</label>
            <input type="text" id="smokingHistory" name="smokingHistory" className="mt-1 px-4 py-2 w-64 border rounded-md focus:outline-none focus:ring focus:border-blue-500" />
          </div>
          <div className="w-full sm:w-1/2 mb-4">
            <label htmlFor="bmi" className="block text-sm font-medium text-gray-700">BMI</label>
            <input type="number" id="bmi" name="bmi" className="mt-1 px-4 py-2 w-64 border rounded-md focus:outline-none focus:ring focus:border-blue-500" />
          </div>
          <div className="w-full sm:w-1/2 mb-4">
            <label htmlFor="hba1cLevel" className="block text-sm font-medium text-gray-700">HbA1c Level</label>
            <input type="number" id="hba1cLevel" name="hba1cLevel" className="mt-1 px-4 py-2 w-64 border rounded-md focus:outline-none focus:ring focus:border-blue-500" />
          </div>
          <div className="w-full sm:w-1/2 mb-4">
            <label htmlFor="bloodGlucose" className="block text-sm font-medium text-gray-700">Blood Glucose</label>
            <input type="number" id="bloodGlucose" name="bloodGlucose" className="mt-1 px-4 py-2 w-64 border rounded-md focus:outline-none focus:ring focus:border-blue-500" />
          </div>
          <div className="w-full sm:w-1/2 mb-4">
            <label htmlFor="diabetes" className="block text-sm font-medium text-gray-700">Diabetes</label>
            <select id="diabetes" name="diabetes" className="mt-1 px-4 py-2 w-64 border rounded-md focus:outline-none focus:ring focus:border-blue-500">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="w-full">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PredictDiabetesForm;

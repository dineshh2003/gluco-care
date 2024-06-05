"use client"

import React, { useState } from 'react';

const PatientFullInfo: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [patient, setPatient] = useState({
    patientPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCh3NOwgS65WyXMnc8twnQrRXmVLb739KhQ&s',
    firstName: 'Dinesh',
    lastName: 'Jangid',
    Gender: 'Male',
    DOB: '05/11/2003',
    BloodType: 'O+',
    Address: 'Sarwari gate',
    City: 'Kishangarh',
    state: 'rajasthan',
    ZipCode: '305***',
    KnownMedicalCondition: 'Diabetes',
    Allergies: 'Peanuts',
    Hypertension: 'Yes',
    HeartDisease: 'No',
    BMI: '25',
    HBA1CLEVEL: '6.5',
    BLOODGLUCOSE: '110',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Implement save functionality here, e.g., make an API call to save the updated patient data
    setIsEditing(false);
  };

  return (
    <div className="bg-b2 rounded-lg shadow-md m-3 w-[93vw] h-[95vh] flex flex-col justify-between text-black p-5 space-y-5 overflow-scroll">
      <div className="bg-white p-5 rounded-lg shadow flex items-center justify-between">
        <div className="flex items-center">
          <img src={patient.patientPhoto} alt={`${patient.firstName} ${patient.lastName}`} className="w-24 h-24 rounded-full mr-5" />
          <div>
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="firstName"
                  value={patient.firstName}
                  onChange={handleInputChange}
                  className="border rounded p-2 mb-2"
                />
                <input
                  type="text"
                  name="lastName"
                  value={patient.lastName}
                  onChange={handleInputChange}
                  className="border rounded p-2"
                />
              </>
            ) : (
              <h1 className="text-2xl font-bold">{patient.firstName} {patient.lastName}</h1>
            )}
            <p className="text-lg">{patient.Gender}, {new Date(patient.DOB).toLocaleDateString()}</p>
          </div>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <div className="bg-white p-5 rounded-lg shadow space-y-3">
        <h2 className="text-xl font-bold border-b pb-2 mb-3">Contact Information</h2>
        {isEditing ? (
          <>
            <input
              type="text"
              name="Address"
              value={patient.Address}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
            />
            <input
              type="text"
              name="City"
              value={patient.City}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
            />
            <input
              type="text"
              name="state"
              value={patient.state}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
            />
            <input
              type="text"
              name="ZipCode"
              value={patient.ZipCode}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
            />
          </>
        ) : (
          <p><strong>Address:</strong> {patient.Address}, {patient.City}, {patient.state}, {patient.ZipCode}</p>
        )}
      </div>

      <div className="bg-white p-5 rounded-lg shadow space-y-3">
        <h2 className="text-xl font-bold border-b pb-2 mb-3">Medical Information</h2>
        {isEditing ? (
          <>
            <input
              type="text"
              name="BloodType"
              value={patient.BloodType}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
            />
            <input
              type="text"
              name="KnownMedicalCondition"
              value={patient.KnownMedicalCondition}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
            />
            <input
              type="text"
              name="Allergies"
              value={patient.Allergies}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
            />
            <input
              type="text"
              name="Hypertension"
              value={patient.Hypertension}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
            />
            <input
              type="text"
              name="HeartDisease"
              value={patient.HeartDisease}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
            />
            <input
              type="text"
              name="BMI"
              value={patient.BMI}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
            />
            <input
              type="text"
              name="HBA1CLEVEL"
              value={patient.HBA1CLEVEL}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
            />
            <input
              type="text"
              name="BLOODGLUCOSE"
              value={patient.BLOODGLUCOSE}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
            />
          </>
        ) : (
          <>
            <p><strong>Blood Type:</strong> {patient.BloodType}</p>
            <p><strong>Known Medical Conditions:</strong> {patient.KnownMedicalCondition}</p>
            <p><strong>Allergies:</strong> {patient.Allergies}</p>
            <p><strong>Hypertension:</strong> {patient.Hypertension}</p>
            <p><strong>Heart Disease:</strong> {patient.HeartDisease}</p>
            <p><strong>BMI:</strong> {patient.BMI}</p>
            <p><strong>HBA1C Level:</strong> {patient.HBA1CLEVEL}</p>
            <p><strong>Blood Glucose:</strong> {patient.BLOODGLUCOSE}</p>
          </>
        )}
      </div>
      
      {isEditing && (
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default PatientFullInfo;

import React, { useState } from 'react';
import axios from '@/app/axios-config'; // Assuming you named your Axios configuration file as 'axios-config.js';
import Image from 'next/image';

interface Patient {
  patientPhoto: string;
  firstName: string;
  lastName: string;
  Gender: string;
  DOB: string;
  BloodType: string;
  Address: string;
  City: string;
  state: string;
  ZipCode: string;
  KnownMedicalCondition: string;
  Allergies: string;
  Hypertension: string;
  HeartDisease: string;
  BMI: string;
  HBA1CLEVEL: string;
  BLOODGLUCOSE: string;
}

interface PatientFullInfoProps {
  patientinfo: Patient;
}

const PatientFullInfo: React.FC<PatientFullInfoProps> = ({ patientinfo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [patient, setPatient] = useState<Patient>(patientinfo);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      await axios.put('/api/updatepatients', patient);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating patient data:', error);
    }
  };

  return (
    <div className="bg-b2 rounded-lg shadow-md m-3 w-[93vw] h-[95vh] flex flex-col justify-between text-black p-5 space-y-5 overflow-scroll">
      <div className="bg-white p-5 rounded-lg shadow flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-24 h-24 rounded-full mr-5 overflow-hidden">
            <Image
              src={patient.patientPhoto}
              alt={`${patient.firstName} ${patient.lastName}`}
              width={96}
              height={96}
            />
          </div>
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
          </div>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-b1 text-white py-2 px-4 rounded"
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
            <p><strong>HbA1C Level:</strong> {patient.HBA1CLEVEL}</p>
            <p><strong>Blood Glucose:</strong> {patient.BLOODGLUCOSE}</p>
          </>
        )}
      </div>

      {isEditing && (
        <button
          onClick={handleSave}
          className="bg-b1 text-white py-2 px-4 rounded self-end"
        >
          Save
        </button>
      )}
    </div>
  );
};

export default PatientFullInfo;

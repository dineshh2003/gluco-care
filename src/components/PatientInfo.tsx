import axios from '@/app/axios-config';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

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

const initialPatientData: Patient = {
  patientPhoto: '/logo-1.png',
  firstName: 'Dinesh',
  lastName: 'Jangid',
  Gender: 'Male',
  DOB: '11/5/2003',
  BloodType: 'O+',
  Address: 'Sarwari gate, Kishangarh, Rajasthan, 305***',
  City: 'Kishangarh',
  state: 'Rajasthan',
  ZipCode: '305***',
  KnownMedicalCondition: 'Diabetes',
  Allergies: 'Peanuts',
  Hypertension: 'Yes',
  HeartDisease: 'No',
  BMI: '25',
  HBA1CLEVEL: '6.5',
  BLOODGLUCOSE: '110'
};

// const calculateAge = (dob: string) => {
//   const birthDate = new Date(dob);
//   const ageDiff = Date.now() - birthDate.getTime();
//   const ageDate = new Date(ageDiff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

const PatientInfo: React.FC = () => {
  // const [info, setInfo] = useState<Patient>(initialPatientData);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchInfo = async () => {
  //     try {
  //       const response = await axios.get('/api/patients');
  //       console.log(response.data); 
  //       setInfo(response.data);
  //     } catch (err) {
  //       console.error(err);
  //       setError('Error fetching patient data');
  //     }
  //   }
  //   fetchInfo();
  // }, []);





  return (
    <div className="bg-white rounded-lg shadow-md p-4 my-5 w-[20vw] h-[95vh] m-5 flex flex-col justify-between mx-2">
      <div className="text-center">
        <div className="relative inline-block">
          <Image src="/logo-1.png" height={80} width={80} alt="Patient Photo" className="rounded-full" />
        </div>
        <h2 className="text-xl font-semibold mt-4">Aatma Ram Bhide</h2>
        <p className="text-gray-600">Patient ID: 122ee*****</p>
      </div>

      <div className="mt-6 bg-green-50 p-4 rounded-lg shadow-inner">
        <h3 className="text-lg font-semibold text-teal-600 flex items-center">
          <span className="mr-2">🗂</span> PERSONAL
        </h3>
        <ul className="mt-2 text-gray-600 space-y-1">
          <li className="flex justify-between"><strong>Age:</strong><span> 21 yrs. old</span></li>
          <li className="flex justify-between"><strong>Gender:</strong><span>male</span></li>
          <li className="flex justify-between"><strong>Blood Group:</strong><span> O+ </span></li>
          <li className="flex justify-between"><strong>Location:</strong><span> Powder Gali, Goregaon</span></li>
        </ul>
      </div>

      <div className="mt-6 bg-green-50 p-4 rounded-lg shadow-inner">
        <h3 className="text-lg font-semibold text-teal-600 flex items-center">
          <span className="mr-2">🩺</span> MEDICAL
        </h3>
        <ul className="mt-2 text-gray-600 space-y-1">
          <li className="flex justify-between"><strong>Condition:</strong><span>Dhoop</span></li>
          <li className="flex justify-between"><strong>BMI:</strong><span>27</span></li>
          <li className="flex justify-between"><strong>Allergies:</strong><span> Dust Particles </span></li>
        </ul>
      </div>
    </div>
  );
};

export default PatientInfo;

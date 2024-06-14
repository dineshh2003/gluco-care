import axios from 'axios';
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






const PatientInfo = () => {
    const [info , SetInfo] = useState<Patient>();
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchInfo = async() => {
              try {
                  const response = await axios.get('/api/patients');
                  SetInfo(response.data);
              } catch (err) {
                  setError('error fetching patient data');
              }
        }
        fetchInfo();
    } , [])


  return (
    <div className="bg-white rounded-lg shadow-md p-4 my-5 w-[20vw] h-[95vh] m-5 flex flex-col justify-between mx-2">
      <div className="text-center">
        <div className="relative inline-block">
          <Image src="/logo-1.png" height={80} width={80} alt='' className="rounded-full "/>
        </div>
        <h2 className="text-xl font-semibold mt-4">{info?.firstName} </h2>
        <p className="text-gray-600">patient id</p>
      </div>

      <div className="mt-6 bg-green-50 p-4 rounded-lg shadow-inner">
        <h3 className="text-lg font-semibold text-teal-600 flex items-center">
          <span className="mr-2">🗂</span> PERSONAL
        </h3>
        <ul className="mt-2 text-gray-600 space-y-1">
          <li className="flex justify-between"><strong>age</strong><span>50 yrs. old</span></li>
          <li className="flex justify-between"><strong>Gender:</strong><span>Male</span></li>
          <li className="flex justify-between"><strong>blood group</strong><span>O+</span></li>
          <li className="flex justify-between"><strong>Location:</strong><span>Manila</span></li>
        </ul>
      </div>

      <div className="mt-6 bg-green-50 p-4 rounded-lg shadow-inner">
        <h3 className="text-lg font-semibold text-teal-600 flex items-center">
          <span className="mr-2">🩺</span> MEDICAL
        </h3>
        <ul className="mt-2 text-gray-600 space-y-1">
          <li className="flex justify-between"><strong>Condition:</strong><span>Kidney Disease</span></li>
          <li className="flex justify-between"><strong>BMI:</strong><span>Dr. Michael Dee</span></li>
          <li className="flex justify-between"><strong>Allergies:</strong><span>Tilorone</span></li>
        </ul>
      </div>

      <div className="text-center mt-4">
        <button className="text-blue-500 hover:underline">See More</button>
      </div>
    </div>
  );
};

export default PatientInfo;

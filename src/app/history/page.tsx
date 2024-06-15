"use client"; // Directive to mark this as a client component

import React, { useEffect, useState } from 'react';
import PatientFullInfo from '@/components/PatientFullInfo';
import axios from '@/app/axios-config'; // Assuming you named your Axios configuration file as 'axios-config.js';

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
  patientPhoto: '/logo-1.png', // Set a default image or use an actual image URL
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

const PatientInfo = () => {
  const [patientData, setPatientData] = useState<Patient>(initialPatientData);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/patients');
        setPatientData(response.data);
        console.log('Fetched patient data:', response.data);
      } catch (err) {
        setError('Error fetching patient data');
        console.error('Error fetching patient data:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="  ">
      {patientData ? (
        <PatientFullInfo patientinfo={patientData} />
      ) : (
        <p>{error || 'Loading patient data...'}</p>
      )}
     </div>
  );
};

export default PatientInfo;

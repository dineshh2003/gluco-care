"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs'; // Adjust the import as needed
import Navbar from '@/components/Navbar';
import Exercise from '@/components/Exercise';
import PredictDiabetesForm from '@/components/DiabetesForm';
import Records from '@/components/Record';
import PatientInfo from '@/components/PatientInfo';
import Chatbot from '@/components/Chatbot';

const Home = () => {
 

<<<<<<< HEAD
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
=======
export default function Home() {
  const [activeComponent, setActiveComponent] = useState<string | null>('Chatbot');
>>>>>>> 9c87a86edb2e2663d331951a11e20ddfdf86d6cc

  const handleButtonClick = (component: string) => {
    setActiveComponent(component);
    console.log(component); // Debugging: Check if state updates correctly
  };

 

  return (
    <main className="flex flex-row h-screen w-[95vw] bg-b2">
      <div className="w-[80vw] h-[95vh] bg-white my-5 mx-4 rounded-xl">
        <Navbar handleButtonClick={handleButtonClick} />
        {activeComponent === 'Medical Profile' && <Records />}
        {activeComponent === 'Predict-Diabetes' && <PredictDiabetesForm />}
        {activeComponent === 'Exercise' && <Exercise />}
        {activeComponent === 'Chatbot' && <Chatbot />}
      </div>
      <div className="w-[20vw] h-full flex items-center justify-center rounded-lg">
        <PatientInfo />
      </div>
    </main>
  );
};

export default Home;

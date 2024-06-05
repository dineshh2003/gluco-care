"use client"

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Exercise from '@/components/Exercise';
import PredictDiabetesForm from '@/components/DiabetesForm';
import Records from '@/components/Record';
import PatientInfo from '@/components/PatientInfo';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [showChatbot, setShowChatbot] = useState(false);

  const handleButtonClick = (component: string) => {
    setActiveComponent(component);
  };

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <main className="flex flex-row h-screen w-[95vw] bg-b2 ">
      <div className="w-[80vw] h-[95vh] bg-white my-5 mx-4 rounded-xl ">
          <Navbar handleButtonClick={handleButtonClick} /> 
          {activeComponent === 'Medical Profile' && <Records /> }
          {activeComponent === 'Predict-Diabetes' && <PredictDiabetesForm />}
          {activeComponent === 'Medical Profile' && <Exercise />}
          {<Chatbot />}
      </div>
      <div className="w-[20vw] h-full flex items-center justify-center rounded-lg">
        <PatientInfo />
        {/* Button to toggle chatbot visibility */}
      </div>
    </main>
  );
}

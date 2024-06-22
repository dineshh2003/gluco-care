"use client"
import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Navbar from '@/components/Navbar';
import Exercise from '@/components/Exercise';
import PredictDiabetesForm from '@/components/DiabetesForm';
import Records from '@/components/Record';
import PatientInfo from '@/components/PatientInfo';
import Chatbot from '@/components/Chatbot';
import Sidebar from '@/components/Sidebar';
import PreLoader from '@/components/PreLoader';
import Landing from '@/components/Landing';

const Home = () => {
  const { user, error, isLoading } = useUser();
  const [activeComponent, setActiveComponent] = useState<string | null>('Chatbot');

  const handleButtonClick = (component: string) => {
    setActiveComponent(component);
    console.log(component); // Debugging: Check if state updates correctly
  };

  // Show loader while fetching user data
  if (isLoading) {
    return <PreLoader />;
  }





  if(user){
    return(
      <main className="flex flex-row h-screen w-[95vw] bg-b2">
    
       <div className="w-[20vw] h-full bg-white my-5 mx-4 rounded-xl">
         <Sidebar />
       </div>
     
     <div className={user ? 'w-[80vw] h-[95vh] bg-white my-5 mx-4 rounded-xl' : 'w-full h-full bg-white my-5 mx-4 rounded-xl'}>
       <Navbar handleButtonClick={handleButtonClick} />
       
         <>
           {activeComponent === 'Medical Profile' && <Records />}
           {activeComponent === 'Predict-Diabetes' && <PredictDiabetesForm />}
           {activeComponent === 'Exercise' && <Exercise />}
           {activeComponent === 'Chatbot' && <Chatbot />}
         </>
     
       {/* {!user && (
         <div className="flex items-center justify-center h-full">
           <p className="text-gray-600">Please log in to view content.</p>
         </div>
       )} */}
     </div>
      
       <div className="w-[20vw] h-full flex items-center justify-center rounded-lg">
         <PatientInfo />
       </div>
     
   </main>
    )
  }else{
    return (
       <div>
        <Landing/>
       </div>
    )
  }
};

export default Home;

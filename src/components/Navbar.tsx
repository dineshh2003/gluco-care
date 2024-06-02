"use client"

import React from 'react';

interface NavbarProps {
  handleButtonClick: (component: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleButtonClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 my-5 h-[10vh] mx-4 flex items-center justify-evenly text-xl font-serif ">
      <button onClick={() => handleButtonClick('Medical Profile')} className="hover:text-b1">
        Medical Profile
      </button>
      <button onClick={() => handleButtonClick('Predict-Diabetes')} className="hover:text-b1">
        Predict-Diabetes
      </button>
      <button onClick={() => handleButtonClick('Chat-bot')} className="hover:text-b1">
        Chat-bot
      </button>
      <button onClick={() => handleButtonClick('Diet')} className="hover:text-b1">
        Diet
      </button>
      <button onClick={() => handleButtonClick('Check-up')} className="hover:text-b1">
        Check-up
      </button>
    </div>
  );
};

export default Navbar;

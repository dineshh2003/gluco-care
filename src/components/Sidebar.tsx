import React from 'react';
import Link from 'next/link';
import { 
  FaUser, FaHome, FaComments, FaChartLine, FaInfoCircle, 
  FaSignOutAlt, FaCalculator, FaVideo, FaTractor, FaCheck, 
  FaMedal, FaHospital, FaMapMarkerAlt 
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-b1 h-screen w-[5vw] flex flex-col justify-between items-center py-5">
      <div className="flex flex-col items-center space-y-5 gap-5">
        <Link href="/history">
          <FaUser className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="Patient" />
        </Link>
        <Link href="/">
          <FaHome className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="home" />
        </Link>
        <Link href="/chat">
          <FaVideo className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="Video Call" />
        </Link>
        <Link href="/prediction">
          <FaHospital className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="Prediction" />
        </Link>
        <Link href="/stores">
          <FaMapMarkerAlt className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="Map" />
        </Link>
        <Link href="/about">
          <FaInfoCircle className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="About" />
        </Link>
      </div>
      <div>
        <Link href="/logout">
          <FaSignOutAlt className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="Logout" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

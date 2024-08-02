import React from 'react';
import Link from 'next/link';
import { 
  FaUser, FaHome, FaComments, FaChartLine, FaInfoCircle, 
  FaSignOutAlt, FaCalculator, FaVideo, FaTractor, FaCheck, 
  FaMedal, FaHospital, FaMapMarkerAlt, 
  FaDiagnoses,
  FaAmbulance
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
        <Link href="/video">
          <FaVideo className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="Video Call" />
        </Link>
        <Link href="/orders">
          <FaHospital className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="orders" />
        </Link>
        <Link href="/stores">
          <FaMapMarkerAlt className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="Map" />
        </Link>
        <Link href="/about">
          <FaInfoCircle className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="About" />
        </Link>
      </div>
      <div className="gap-4 flex flex-col">
      <Link href="/emergency">
          <FaAmbulance className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="Emergency" />
        </Link>
        <Link href="/api/auth/logout">
          <FaSignOutAlt className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="Logout" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

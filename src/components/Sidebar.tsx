import React from 'react';
import { FaUser, FaHome, FaComments, FaChartLine, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className=" bg-b1 h-screen w-[5vw] flex flex-col justify-between items-center py-5">
      <div className="flex flex-col items-center space-y-5 gap-5">
        <FaUser className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="Profile" />
        <FaHome className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="Home" />
        <FaComments className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="Chat" />
        <FaChartLine className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="Prediction" />
        <FaInfoCircle className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="About" />
      </div>
      <div>
        <FaSignOutAlt className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" title="Logout" />
      </div>
    </div>
  );
};

export default Sidebar;

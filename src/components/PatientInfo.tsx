import Image from 'next/image';
import React from 'react';



const PatientInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 my-5 w-[20vw] h-[95vh] m-5 flex flex-col justify-between mx-2">
      <div className="text-center">
        <div className="relative inline-block">
          <Image src="/logo-1.png" height={80} width={80} alt='' className="rounded-full "/>
        </div>
        <h2 className="text-xl font-semibold mt-4">Isaac Green</h2>
        <p className="text-gray-600">#1093</p>
      </div>

      <div className="mt-6 bg-green-50 p-4 rounded-lg shadow-inner">
        <h3 className="text-lg font-semibold text-teal-600 flex items-center">
          <span className="mr-2">🗂</span> PERSONAL
        </h3>
        <ul className="mt-2 text-gray-600 space-y-1">
          <li className="flex justify-between"><strong>Age:</strong><span>50 yrs. old</span></li>
          <li className="flex justify-between"><strong>Gender:</strong><span>Male</span></li>
          <li className="flex justify-between"><strong>Birthdate:</strong><span>20 May 1972</span></li>
          <li className="flex justify-between"><strong>Location:</strong><span>Manila</span></li>
        </ul>
      </div>

      <div className="mt-6 bg-green-50 p-4 rounded-lg shadow-inner">
        <h3 className="text-lg font-semibold text-teal-600 flex items-center">
          <span className="mr-2">🩺</span> MEDICAL
        </h3>
        <ul className="mt-2 text-gray-600 space-y-1">
          <li className="flex justify-between"><strong>Condition:</strong><span>Kidney Disease</span></li>
          <li className="flex justify-between"><strong>Doctor:</strong><span>Dr. Michael Dee</span></li>
          <li className="flex justify-between"><strong>Allergies:</strong><span>Tilorone</span></li>
        </ul>
      </div>

      {/* <div className="mt-6 bg-green-50 p-4 rounded-lg shadow-inner">
        <h3 className="text-lg font-semibold text-teal-600 flex items-center">
          <span className="mr-2">📞</span> CONTACT
        </h3>
        <ul className="mt-2 text-gray-600 space-y-1">
          <li className="flex justify-between"><strong>Mobile:</strong><span>(+63) 8396162764</span></li>
          <li className="flex justify-between"><strong>Email:</strong><span>green478@gmail.com</span></li>
          <li className="flex justify-between"><strong>Next of Kin:</strong><span>Linda Green</span></li>
          <li className="flex justify-between"><strong>Mobile:</strong><span>(+63) 8396162764</span></li>
        </ul>
      </div> */}

      <div className="text-center mt-4">
        <button className="text-blue-500 hover:underline">See More</button>
      </div>
    </div>
  );
};

export default PatientInfo;

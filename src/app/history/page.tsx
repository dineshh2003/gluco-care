// src/components/PatientInfo.tsx

import dynamic from 'next/dynamic';
import PatientFullInfo from '@/components/PatientFullInfo'; // Ensure this path is correct

const OpenStreetMap = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
});

const PatientInfo = () => {
  return (
    <div>
      {/* <PatientFullInfo /> */}
      <OpenStreetMap />
    </div>
  );
};

export default PatientInfo;

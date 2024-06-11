"use client"


import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';
import L from 'leaflet';

interface MarkerData {
  position: LatLngTuple;
  icon: L.Icon;
  store: string;
  medicines: string[];
}

const MapComponent = () => {
  const [center, setCenter] = useState<LatLngTuple>([26.599300, 74.852203]);
  const ZOOM_LEVEL = 9;
  const [searchQuery, setSearchQuery] = useState('');

  const customIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3209/3209464.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });

  const bloodbank = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/1483/1483336.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });

  const markers: MarkerData[] = [
    { position: [28.613939, 77.209021], icon: customIcon, store: 'New Delhi Pharmacy', medicines: ['Aspirin', 'Paracetamol', 'Insulin'] },
    { position: [19.076090, 72.877426], icon: customIcon, store: 'Mumbai Medical', medicines: ['Ibuprofen', 'Metformin', 'Captopril'] },
    { position: [12.971599, 77.594566], icon: customIcon, store: 'Bangalore Health Store', medicines: ['Amoxicillin', 'Atorvastatin', 'Levothyroxine'] },
    { position: [13.082680, 80.270718], icon: customIcon, store: 'Chennai Clinic', medicines: ['Amlodipine', 'Metoprolol', 'Lisinopril'] },
    { position: [22.572646, 88.363895], icon: customIcon, store: 'Kolkata Care', medicines: ['Omeprazole', 'Losartan', 'Albuterol'] },
    { position: [17.385044, 78.486671], icon: customIcon, store: 'Hyderabad Hospital', medicines: ['Gabapentin', 'Hydrochlorothiazide', 'Sertraline'] },
    { position: [26.912434, 75.787270], icon: customIcon, store: 'Jaipur Health', medicines: ['Clonazepam', 'Tramadol', 'Prednisone'] },
    { position: [23.259933, 77.412613], icon: customIcon, store: 'Bhopal Medical', medicines: ['Zolpidem', 'Furosemide', 'Pravastatin'] },
    { position: [21.170240, 72.831062], icon: customIcon, store: 'Surat Pharmacy', medicines: ['Citalopram', 'Montelukast', 'Escitalopram'] },
    { position: [15.317277, 75.713888], icon: customIcon, store: 'Karnataka Health Hub', medicines: ['Rosuvastatin', 'Propranolol', 'Tamsulosin'] }
  ];

  const bloodmarkers: MarkerData[] = [
    { position: [21.145800, 79.088154], icon: bloodbank, store: 'Nagpur Blood Bank', medicines: ['Blood A+', 'Blood B+', 'Blood O+'] },
    { position: [23.022505, 72.571365], icon: bloodbank, store: 'Ahmedabad Blood Bank', medicines: ['Blood A-', 'Blood B-', 'Blood O-'] },
    { position: [28.984463, 77.706414], icon: bloodbank, store: 'Meerut Blood Bank', medicines: ['Blood AB+', 'Blood AB-', 'Plasma'] },
    { position: [23.344101, 85.309563], icon: bloodbank, store: 'Ranchi Blood Bank', medicines: ['Platelets', 'Blood B+', 'Blood O+'] },
    { position: [25.435801, 81.846311], icon: bloodbank, store: 'Allahabad Blood Bank', medicines: ['Blood A+', 'Blood AB+', 'Plasma'] }
  ];

  const filteredMarkers = markers.filter(marker =>
    marker.medicines.some(medicine => medicine.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="m-auto flex flex-row ">
      <div className="h-[100vh] w-[75vw]">
        <MapContainer center={center} zoom={ZOOM_LEVEL} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {
            filteredMarkers.map((marker, idx) => (
              <Marker key={idx} position={marker.position} icon={marker.icon} />
            ))
          }
          {
            bloodmarkers.map((marker, idx) => (
              <Marker key={idx} position={marker.position} icon={marker.icon} />
            ))
          }
        </MapContainer>
      </div>
      <div className="searchMedicine h-[95vh] w-[19vw] m-auto bg-b2 border border-b1 rounded-xl flex items-center flex-col">
        <h1 className="my-4 mx-auto text-xl font-sans text-gray-600 ">Search Prescription</h1>
        <input
          type="text"
          className="rounded-lg h-15 w-11/12 border text-sans font-lg border-b1 focus:outline-none focus:ring-b1 p-2"
          placeholder="search for medicine, blood-bank, ambulance near-by-you"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <hr className="bg-gray-100 w-full h-1 my-4 " />
        <div className="result ">
          {/* Results will be displayed here */}
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
"use client";

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import L from "leaflet";
import OrderForm from "./OrderForm";

interface MarkerData {
  position: LatLngTuple;
  icon: L.Icon;
  store: string;
  medicines: string[];
  contact: string;
}

const MapComponent = () => {
  const [center, setCenter] = useState<LatLngTuple>([26.5993, 74.852203]);
  const ZOOM_LEVEL = 9;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState<number | null>(null);
  const [visible , SetVisible] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>();


 


  const handleForm = (idx: number) =>{
    setSelectedMarkerIndex(idx);
    SetVisible(true); 
  }

  const handleFormClose = () =>{
    SetVisible(!visible);
  }

  const customIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3209/3209464.png",
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });

  const bloodbank = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/1483/1483336.png",
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });

  const markers: MarkerData[] = [
    {
      position: [28.613939, 77.209021],
      icon: customIcon,
      store: "New Delhi Pharmacy",
      medicines: ["Aspirin", "Paracetamol", "Insulin"],
      contact: "+91 88925-48451",
    },
    {
      position: [19.07609, 72.877426],
      icon: customIcon,
      store: "Mumbai Medical",
      medicines: ["Ibuprofen", "Metformin", "Captopril"],
      contact: "+91 88925-48451",
    },
    {
      position: [12.971599, 77.594566],
      icon: customIcon,
      store: "Bangalore Health Store",
      medicines: ["Amoxicillin", "Atorvastatin", "Levothyroxine"],
      contact: "+91 88925-48451",
    },
    {
      position: [13.08268, 80.270718],
      icon: customIcon,
      store: "Chennai Clinic",
      medicines: ["Amlodipine", "Metoprolol", "Lisinopril"],
      contact: "+91 88925-48451",
    },
    {
      position: [22.572646, 88.363895],
      icon: customIcon,
      store: "Kolkata Care",
      medicines: ["Omeprazole", "Losartan", "Albuterol"],
      contact: "+91 88925-48451",
    },
    {
      position: [17.385044, 78.486671],
      icon: customIcon,
      store: "Hyderabad Hospital",
      medicines: ["Gabapentin", "Hydrochlorothiazide", "Sertraline"],
      contact: "+91 88925-48451",
    },
    {
      position: [26.912434, 75.78727],
      icon: customIcon,
      store: "Jaipur Health",
      medicines: ["Clonazepam", "Tramadol", "Prednisone"],
      contact: "+91 88925-48451",
    },
    {
      position: [23.259933, 77.412613],
      icon: customIcon,
      store: "Bhopal Medical",
      medicines: ["Zolpidem", "Furosemide", "Pravastatin"],
      contact: "+91 88925-48451",
    },
    {
      position: [21.17024, 72.831062],
      icon: customIcon,
      store: "Surat Pharmacy",
      medicines: ["Citalopram", "Montelukast", "Escitalopram"],
      contact: "+91 88925-48451",
    },
    {
      position: [15.317277, 75.713888],
      icon: customIcon,
      store: "Karnataka Health Hub",
      medicines: ["Rosuvastatin", "Propranolol", "Tamsulosin"],
      contact: "+91 88925-48451",
    },
    {
      position: [21.1458, 79.088154],
      icon: bloodbank,
      store: "Nagpur Blood Bank",
      medicines: ["Blood A+", "Blood B+", "Blood O+"],
      contact: "+91 88925-48451",
    },
    {
      position: [23.022505, 72.571365],
      icon: bloodbank,
      store: "Ahmedabad Blood Bank",
      medicines: ["Blood A-", "Blood B-", "Blood O-"],
      contact: "+91 88925-48451",
    },
    {
      position: [28.984463, 77.706414],
      icon: bloodbank,
      store: "Meerut Blood Bank",
      medicines: ["Blood AB+", "Blood AB-", "Plasma"],
      contact: "+91 88925-48451",
    },
    {
      position: [23.344101, 85.309563],
      icon: bloodbank,
      store: "Ranchi Blood Bank",
      medicines: ["Platelets", "Blood B+", "Blood O+"],
      contact: "+91 88925-48451",
    },
    {
      position: [25.435801, 81.846311],
      icon: bloodbank,
      store: "Allahabad Blood Bank",
      medicines: ["Blood A+", "Blood AB+", "Plasma"],
      contact: "+91 88925-48451",
    },
    {
      position: [26.847244, 75.825917],
      icon: customIcon,
      store: "Jaipur Pharmacy",
      medicines: ["Aspirin", "Paracetamol", "Ibuprofen"],
      contact: "123-456-7890",
    },
    {
      position: [26.870895, 75.804238],
      icon: customIcon,
      store: "Health Point",
      medicines: ["Metformin", "Lisinopril", "Atorvastatin"],
      contact: "098-765-4321",
    },
    {
      position: [26.873363, 75.790613],
      icon: customIcon,
      store: "Care Pharmacy",
      medicines: ["Omeprazole", "Simvastatin", "Citalopram"],
      contact: "555-555-5555",
    },
    {
      position: [26.867463, 75.829501],
      icon: customIcon,
      store: "City Medicos",
      medicines: ["Losartan", "Metoprolol", "Levothyroxine"],
      contact: "111-222-3333",
    },
    {
      position: [26.898256, 75.813232],
      icon: customIcon,
      store: "Life Line Pharmacy",
      medicines: ["Amlodipine", "Hydrochlorothiazide", "Gabapentin"],
      contact: "444-555-6666",
    },
    {
      position: [26.89566, 75.821433],
      icon: customIcon,
      store: "Health Hub",
      medicines: ["Amoxicillin", "Prednisone", "Ciprofloxacin"],
      contact: "222-333-4444",
    },
    {
      position: [26.909942, 75.823881],
      icon: customIcon,
      store: "Wellness Pharmacy",
      medicines: ["Albuterol", "Metformin", "Lisinopril"],
      contact: "333-444-5555",
    },
    {
      position: [26.89458, 75.764127],
      icon: customIcon,
      store: "Healthy Life",
      medicines: ["Omeprazole", "Simvastatin", "Citalopram"],
      contact: "777-888-9999",
    },
    {
      position: [26.921783, 75.7792],
      icon: customIcon,
      store: "Medicure Pharmacy",
      medicines: ["Losartan", "Metoprolol", "Levothyroxine"],
      contact: "888-999-0000",
    },
    {
      position: [26.927062, 75.832853],
      icon: customIcon,
      store: "Pharma Plus",
      medicines: ["Amlodipine", "Hydrochlorothiazide", "Gabapentin"],
      contact: "999-000-1111",
    },
    {
      position: [26.952657, 75.801451],
      icon: customIcon,
      store: "Guardian Pharmacy",
      medicines: ["Amoxicillin", "Prednisone", "Ciprofloxacin"],
      contact: "000-111-2222",
    },
    {
      position: [26.889939, 75.75677],
      icon: customIcon,
      store: "Jaipur Medicos",
      medicines: ["Aspirin", "Paracetamol", "Ibuprofen"],
      contact: "333-222-1111",
    },
    {
      position: [26.905622, 75.797862],
      icon: customIcon,
      store: "Pharma Care",
      medicines: ["Metformin", "Lisinopril", "Atorvastatin"],
      contact: "111-444-5555",
    },
    {
      position: [26.908182, 75.747798],
      icon: customIcon,
      store: "Health First",
      medicines: ["Omeprazole", "Simvastatin", "Citalopram"],
      contact: "222-555-6666",
    },
    {
      position: [26.907862, 75.839493],
      icon: customIcon,
      store: "Prime Pharmacy",
      medicines: ["Losartan", "Metoprolol", "Levothyroxine"],
      contact: "333-666-7777",
    },
    {
      position: [26.879376, 75.820113],
      icon: customIcon,
      store: "Good Health Pharmacy",
      medicines: ["Amlodipine", "Hydrochlorothiazide", "Gabapentin"],
      contact: "444-777-8888",
    },
    {
      position: [26.93628, 75.777997],
      icon: customIcon,
      store: "Pharma Mart",
      medicines: ["Amoxicillin", "Prednisone", "Ciprofloxacin"],
      contact: "555-888-9999",
    },
    {
      position: [26.933012, 75.843161],
      icon: customIcon,
      store: "Well Link Pharmacy",
      medicines: ["Albuterol", "Metformin", "Lisinopril"],
      contact: "666-999-0000",
    },
    {
      position: [26.858551, 75.769851],
      icon: customIcon,
      store: "Care First",
      medicines: ["Omeprazole", "Simvastatin", "Citalopram"],
      contact: "777-000-1111",
    },
    {
      position: [26.845834, 75.780848],
      icon: bloodbank,
      store: "Jaipur Blood Bank",
      medicines: ["Blood A", "Blood B"],
      contact: "222-333-4444",
    },
    {
      position: [26.911042, 75.856194],
      icon: bloodbank,
      store: "Health Point Blood Bank",
      medicines: ["Blood C"],
      contact: "111-222-3333",
    },
    {
      position: [26.932104, 75.738491],
      icon: bloodbank,
      store: "Care Blood Bank",
      medicines: ["Blood A", "Blood D"],
      contact: "555-666-7777",
    },
    {
      position: [26.95044, 75.835219],
      icon: bloodbank,
      store: "City Blood Bank",
      medicines: ["Blood B", "Blood E"],
      contact: "888-999-0000",
    },
    {
      position: [26.994541, 75.847641],
      icon: bloodbank,
      store: "Life Line Blood Bank",
      medicines: ["Blood A", "Blood F"],
      contact: "111-222-4444",
    },
    {
      position: [26.982565, 75.890405],
      icon: customIcon,
      store: "Jaipur Medicos",
      medicines: ["Aspirin", "Paracetamol", "Ibuprofen"],
      contact: "333-222-1111",
    },
    {
      position: [27.001436, 75.908529],
      icon: customIcon,
      store: "Pharma Care",
      medicines: ["Metformin", "Lisinopril", "Atorvastatin"],
      contact: "111-444-5555",
    },
    {
      position: [27.021575, 75.888165],
      icon: customIcon,
      store: "Health First",
      medicines: ["Omeprazole", "Simvastatin", "Citalopram"],
      contact: "222-555-6666",
    },
    {
      position: [27.037175, 75.841532],
      icon: customIcon,
      store: "Prime Pharmacy",
      medicines: ["Losartan", "Metoprolol", "Levothyroxine"],
      contact: "333-666-7777",
    },
    {
      position: [26.999622, 75.804877],
      icon: customIcon,
      store: "Good Health Pharmacy",
      medicines: ["Amlodipine", "Hydrochlorothiazide", "Gabapentin"],
      contact: "444-777-8888",
    },
    {
      position: [26.962238, 75.749487],
      icon: customIcon,
      store: "Pharma Mart",
      medicines: ["Amoxicillin", "Prednisone", "Ciprofloxacin"],
      contact: "555-888-9999",
    },
    {
      position: [26.929744, 75.739305],
      icon: customIcon,
      store: "Well Link Pharmacy",
      medicines: ["Albuterol", "Metformin", "Lisinopril"],
      contact: "666-999-0000",
    },
    {
      position: [26.917035, 75.738287],
      icon: customIcon,
      store: "Care First",
      medicines: ["Omeprazole", "Simvastatin", "Citalopram"],
      contact: "777-000-1111",
    },
    {
      position: [26.887797, 75.744803],
      icon: bloodbank,
      store: "Jaipur Blood Bank",
      medicines: ["Blood A", "Blood B"],
      contact: "222-333-4444",
    },
    {
      position: [26.879618, 75.800434],
      icon: bloodbank,
      store: "Health Point Blood Bank",
      medicines: ["Blood C"],
      contact: "111-222-3333",
    },
    {
      position: [26.871847, 75.791423],
      icon: bloodbank,
      store: "Care Blood Bank",
      medicines: ["Blood A", "Blood D"],
      contact: "555-666-7777",
    },
    {
      position: [26.852756, 75.787771],
      icon: bloodbank,
      store: "City Blood Bank",
      medicines: ["Blood B", "Blood E"],
      contact: "888-999-0000",
    },
  ];

  const filteredMarkers = markers.filter((marker) =>
    marker.medicines.some((medicine) =>
      medicine.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );





  return (
    <div className="m-auto flex flex-row ">
      <div className="h-[100vh] w-[75vw]">
        <MapContainer
          center={center}
          zoom={ZOOM_LEVEL}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredMarkers.map((marker, idx) => (
            <Marker
              key={idx}
              position={marker.position}
              icon={marker.icon}
              eventHandlers={{
                click: () => {
                  setSelectedMarkerIndex(idx);
                  setSelectedMarker(marker);
                },
              }}
            />
          ))}
          {/* {
            bloodmarkers.map((marker, idx) => (
              <Marker key={idx} position={marker.position} icon={marker.icon} />
            ))
          } */}
        </MapContainer>
      </div>
      {
        !visible && (
          <div className="searchMedicine h-[95vh] w-[19vw] m-auto bg-b2 border border-b1 rounded-xl flex items-center flex-col">
          <h1 className="my-4 mx-auto text-xl font-sans text-gray-600 ">
            Search Prescription
          </h1>
          <input
            type="text"
            className="rounded-lg h-15 w-11/12 border text-sans font-lg border-b1 focus:outline-none focus:ring-b1 p-2"
            placeholder="search for medicine, blood-bank, ambulance near-by-you"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <hr className="bg-gray-100 w-full h-1 my-4 " />
          <div className="result w-full p-2 overflow-scroll">
            {filteredMarkers.map((marker, idx) => (
              <div
                key={idx}
                className={`mb-2 p-2 border rounded-lg ${
                  selectedMarkerIndex === idx ? "bg-b1" : ""
                } `}
              >
                <h2 className="text-lg font-bold">{marker.store}</h2>
                <p>Contact: {marker.contact}</p>
                <p>Medicines: {marker.medicines.join(", ")}</p>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-b1 to-blue-500 group-hover:from-b1 group-hover:to-b2 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-b1"
                onClick={() => handleForm(idx)}
                  >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-black dark:bg-b2 rounded-md group-hover:bg-opacity-0">
                    order
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
        )
      }
      
      {
        visible && 
        (   
          <OrderForm  
          storeName={selectedMarker?.store || ""}
          storeAddress={selectedMarker?.position ? `${selectedMarker.position[0]}, ${selectedMarker.position[1]}` : ""}
          contact={selectedMarker?.contact || ""}
          />
        )
      }
    </div>
  );
};

export default MapComponent;

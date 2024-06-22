"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import L from "leaflet";
import OrderForm from "./OrderForm";
import axios from "../app/axios-config";

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
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState<number | null>(
    null
  );
  const [visible, setVisible] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);
  const [markers, setMarkers] = useState<MarkerData[]>([]);

  const handleForm = (idx: number) => {
    setSelectedMarkerIndex(idx);
    setVisible(true);
  };

  const handleFormClose = () => {
    setVisible(!visible);
  };

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

  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const response = await axios.get("/api/getStores");
        const data = response.data.map((marker: any) => ({
          ...marker,
          icon: marker.icon === "customIcon" ? customIcon : bloodbank,
        }));
        setMarkers(data);
      } catch (error) {
        console.error("Error fetching markers:", error);
      }
    };
  
    fetchMarkers();
  }, [customIcon, bloodbank]); 
  
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
      {!visible && (
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
                <button
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-b1 to-blue-500 group-hover:from-b1 group-hover:to-b2 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-b1"
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
      )}

      {visible && (
        <OrderForm
          storeName={selectedMarker?.store || ""}
          storeAddress={
            selectedMarker?.position
              ? `${selectedMarker.position[0]}, ${selectedMarker.position[1]}`
              : ""
          }
          contact={selectedMarker?.contact || ""}
        />
      )}
    </div>
  );
};

export default MapComponent;

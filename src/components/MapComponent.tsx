"use client"


import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';
import L from 'leaflet'

const MapComponent = () => {
  const [center, setCenter] = useState<LatLngTuple>([26.599300, 74.852203]);
  const ZOOM_LEVEL = 9;

  const customIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3209/3209464.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
  });

  const markers: { position: LatLngTuple, icon: L.Icon }[] = [
    { position: [26.599300, 74.852203], icon: customIcon },
    // Add more marker objects as needed
  ];
  


  return (
    <div className="m-5 h-[90vh]">
      <MapContainer center={center} zoom={ZOOM_LEVEL} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {
          markers.map((marker, idx) => (
            <Marker key={idx} position={marker.position} icon={marker.icon} />
          ))
        }
      </MapContainer>
    </div>
  );
};

export default MapComponent;

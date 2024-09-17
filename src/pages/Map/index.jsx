import React, { useState } from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Navbar } from '../../components/Navbar';
import { Content, MapWrapper } from './styles';
import { Modal } from '../../components/Modal'

const customIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 2.57 1.69 5.2 4.2 8.03L12 21l2.8-3.97C17.31 14.2 19 11.57 19 9c0-3.87-3.13-7-7-7zm0 11.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="#ff0000" />
    </svg>
  `),
  iconSize: [60, 60],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24]
});

export function Map() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMarkerClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <Content>
        <MapWrapper>
          <MapContainer 
            center={[-3.71722, -38.54337]}
            zoom={13} 
            scrollWheelZoom={false} 
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker 
              position={[-3.71722, -38.54337]}
              icon={customIcon}
              eventHandlers={{ click: handleMarkerClick }}
            />
          </MapContainer>
        </MapWrapper>

        {isModalOpen && 
          <Modal 
            isOpen={isModalOpen}
            onClose={closeModal}
          />}
      </Content>
    </>
  );
}

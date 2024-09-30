import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Navbar } from '../../components/Navbar';
import { Content, MapWrapper } from './styles';
import { Modal } from '../../components/Modal';
import { api, socket } from '../../services/api';

const customIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 2.57 1.69 5.2 4.2 8.03L12 21l2.8-3.97C17.31 14.2 19 11.57 19 9c0-3.87-3.13-7-7-7zm0 11.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill=${getColor(pressurizerState)} />
    </svg>
  `),
  iconSize: [60, 60],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

function getColor(pressurizerState) {
  const state = pressurizerState.state
  if (state === "ON") {
    return "#008000	"
  } else if (state === "OFF") {
    return "#FF002E"
  } else if (state === "BLOCKED") {
    return "#FFFF00"
  }
}
export function Map() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pressurizerState, setPressurizerState] = useState(false);
  const [clients, setClients] = useState([]);
  const [clientId, setClientId] = useState(null);
  const [positions, setPositions] = useState({});

  const handleMarkerClick = (clientId) => {
    setClientId(clientId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    async function fetchClients() {
      const response = await api.get('/clientes');
      socket.addEventListener("message", event => {
        console.log("message: " + event.data)
        const data = JSON.parse(event.data)
        setPressurizerState(data)
      });
      setClients(response.data);
      response.data.forEach(async (client) => {
        const position = await getPosition(client.street, client.number);
        if (position) {
          setPositions((prev) => ({
            ...prev,
            [client.id]: position,
          }));
        }
      });
    }

    fetchClients();
  }, []);

  async function getPosition(street, number) {
    const address = `${street}, ${number}`;
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`);

    if (response.ok) {
      const data = await response.json();
      if (data.length > 0) {
        return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
      }
    } else {
      alert('Erro na requisição.');
    }
    return null;
  }

  return (
    <>
      <Navbar />
      <Content>
        <MapWrapper>
          <h1>{pressurizerState}</h1>
          <MapContainer
            center={[-3.7763, -38.5322]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {clients.map((item) => {
              const position = positions[item.id];
              return position ? (
                <Marker
                  key={item.id}
                  position={position}
                  icon={customIcon}
                  eventHandlers={{ click: () => handleMarkerClick(item.id) }}
                />
              ) : null;
            })}
          </MapContainer>
        </MapWrapper>

        {isModalOpen &&
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            clientId={clientId}
          />}
      </Content>
    </>
  );
}

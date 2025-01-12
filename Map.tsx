import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

interface Location {
  lat: number;
  lng: number;
}

interface MapProps {
  driverLocation: Location;
  destination?: Location;
  showRoute?: boolean;
}

export function Map({ driverLocation, destination, showRoute }: MapProps) {
  const defaultIcon = new Icon({
    iconUrl: '/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  });

  return (
    <MapContainer 
      center={[driverLocation.lat, driverLocation.lng]} 
      zoom={13} 
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[driverLocation.lat, driverLocation.lng]} icon={defaultIcon}>
        <Popup>Driver Location</Popup>
      </Marker>
      {destination && (
        <Marker position={[destination.lat, destination.lng]} icon={defaultIcon}>
          <Popup>Destination</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}